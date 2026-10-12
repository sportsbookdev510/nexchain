$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Web

$Base = "https://nexchain.ai"
$Root = Split-Path -Parent $PSScriptRoot
$UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"

$queue = [System.Collections.Generic.Queue[string]]::new()
$seen = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
$ok = 0
$fail = New-Object System.Collections.Generic.List[string]

$Faq = @{
    "What is Nexchain?" = "Nexchain is an AI-native Layer 1 blockchain designed to combine fast execution, low fees, AI-powered network intelligence, and a more transparent user experience."
    "What makes Nexchain different?" = "Nexchain focuses on AI-native execution at the network level, practical builder tooling, cross-chain connectivity, and early presale access for the NEX token."
    "What is the current NEX price?" = "The current NEX presale price is `$0.16 during the active entry window."
    "How much has Nexchain raised?" = "The campaign summary on this page shows more than `$17M raised from 10,814 investors."
    "Is Nexchain audited?" = "CertiK and SolidProof audit references cover the NEX token smart contract, not the network or the AI layer."
    "What is NEX used for?" = "NEX is designed to power network usage, AI-related activity, staking, governance, and ecosystem incentives."
    "Can I lose money?" = "Yes. Crypto assets and presales involve risk, including loss of capital. Review the official terms and your local eligibility before participating."
    "Who can participate?" = "Participation depends on the official terms and local eligibility. Review the project terms before joining the presale."
}

$Pages = @(
    "/", "/tokenomics", "/roadmap", "/ecosystem", "/builders", "/blog",
    "/referrals", "/career", "/contact-us", "/terms-conditions",
    "/cookie-policy", "/privacy-policy"
)

function Normalize-Path([string]$url) {
    $u = [Uri]$url
    $path = [Uri]::UnescapeDataString($u.AbsolutePath)
    if ([string]::IsNullOrWhiteSpace($path)) { return "/" }
    if ($path.Length -gt 1) { $path = $path.TrimEnd("/") }
    return $path
}

function Is-PagePath([string]$path) {
    if ($path -eq "/") { return $true }
    if ($path -match '\.(html?|xml|txt)$') { return $true }
    if ($path -match '\.[a-z0-9]{1,8}$') { return $false }
    return $true
}

function Local-File([string]$path) {
    if ($path -eq "/") { return (Join-Path $Root "index.html") }
    $rel = $path.TrimStart("/").Replace("/", [IO.Path]::DirectorySeparatorChar)
    if ((Is-PagePath $path) -and ($path -notmatch '\.(html?|xml|txt)$')) {
        return (Join-Path $Root (Join-Path $rel "index.html"))
    }
    return (Join-Path $Root $rel)
}

function Enqueue([string]$url) {
    if ([string]::IsNullOrWhiteSpace($url)) { return }
    if ($url.StartsWith("//")) { $url = "https:$url" }
    if ($url -notmatch '^https?://') { return }
    $u = $null
    if (-not [Uri]::TryCreate($url, [UriKind]::Absolute, [ref]$u)) { return }
    if ($u.Host -notmatch '^(www\.)?nexchain\.ai$') { return }
    $path = Normalize-Path $u.AbsoluteUri
    if ($path -match '^/(api|admin|purchase|dashboard|private)(/|$)') { return }
    if ($seen.Add($path)) { $queue.Enqueue($path) }
}

function Extract-Urls([string]$text) {
    if ([string]::IsNullOrWhiteSpace($text)) { return }
    $patterns = @(
        '(?:href|src|srcset|action|poster|data-src)=["'']([^"'']+)["'']',
        'url\((?:["'']?)([^"'')]+)(?:["'']?)\)',
        '["''](/_next/[^"'']+)["'']',
        '["''](/images/[^"'']+)["'']',
        '["''](/documents/[^"'']+)["'']',
        '["''](/blog/[^"'']+)["'']',
        'https://nexchain\.ai(/[^"'']+)'
    )
    foreach ($pattern in $patterns) {
        [regex]::Matches($text, $pattern) | ForEach-Object {
            $raw = $_.Groups[1].Value
            foreach ($part in ($raw -split '\s*,\s*')) {
                $candidate = ($part -split '\s+')[0]
                if ([string]::IsNullOrWhiteSpace($candidate)) { continue }
                if ($candidate.StartsWith("data:") -or $candidate.StartsWith("mailto:") -or $candidate.StartsWith("javascript:")) { continue }
                if ($candidate -match '^https?://' -or $candidate.StartsWith("//")) {
                    Enqueue $candidate
                    continue
                }
                if ($candidate.StartsWith("/_next/image")) {
                    $q = $candidate
                    if ($q.Contains("?")) {
                        $qs = [System.Web.HttpUtility]::ParseQueryString(($q.Split("?", 2)[1] -replace '&amp;', '&'))
                        $orig = $qs["url"]
                        if ($orig) { Enqueue ($Base + $orig) }
                    }
                    continue
                }
                if ($candidate.StartsWith("/")) {
                    Enqueue ($Base + $candidate.Split("?")[0])
                }
            }
        }
    }
}

function Rewrite-NextImages([string]$html) {
    return [regex]::Replace($html, '/_next/image\?url=([^"\s,]+)', {
        param($m)
        $enc = $m.Groups[1].Value -replace '&amp;.*$', '' -replace '&w=.*$', ''
        return [uri]::UnescapeDataString($enc)
    })
}

function Fill-Faq([string]$html) {
    foreach ($title in $Faq.Keys) {
        $escaped = [regex]::Escape($title)
        $pattern = '(<div class="faq_block[^"]*">\s*<div class="faq_title">\s*<h3>' + $escaped + '</h3>[\s\S]*?</div>)(\s*)(</div>)'
        if ($html -notmatch $pattern) { continue }
        if ($html -match ('<h3>' + $escaped + '</h3>[\s\S]{0,400}<div class="faq_text')) { continue }
        $answer = $Faq[$title]
        $html = [regex]::Replace($html, $pattern, {
            param($m)
            return $m.Groups[1].Value + "`n                        <div class=`"faq_text`">$answer</div>" + $m.Groups[2].Value + $m.Groups[3].Value
        }, 1)
    }
    return $html
}

function Strip-RemoteRuntime([string]$html) {
    $html = [regex]::Replace($html, '<link rel="preload"[^>]+googletagmanager[^>]*>\s*', '', 'IgnoreCase')
    $html = [regex]::Replace($html, '<script[^>]+src="[^"]*(?:_next/|googletagmanager|gtag/|clarity|vercel|esputnik)[^"]*"[^>]*>\s*</script>\s*', '', 'IgnoreCase')
    $html = [regex]::Replace($html, '<script>\s*self\.__next_f[\s\S]*?</script>\s*', '', 'IgnoreCase')
    $html = [regex]::Replace($html, '<script src="/_next/static/chunks/webpack[^"]*"></script>\s*', '', 'IgnoreCase')
    if ($html -notmatch 'src="/js/fork.js"') {
        $html = $html -replace '</body>', "        <script src=`"/js/fork.js`" defer></script>`r`n    </body>"
    }
    return $html
}

function Pretty-Links([string]$html) {
    foreach ($page in $Pages) {
        if ($page -eq "/") { continue }
        $html = $html -replace ('href="' + [regex]::Escape($page) + '"'), ('href="' + $page + '/"')
    }
    return $html
}

function Process-Html([string]$html) {
    $html = Rewrite-NextImages $html
    $html = Fill-Faq $html
    $html = Strip-RemoteRuntime $html
    $html = Pretty-Links $html
    return $html
}

function Copy-CachedImages {
    $source = Join-Path $Root "_next\image\images"
    if (-not (Test-Path $source)) { return }
    Get-ChildItem -Path $source -Recurse -File | ForEach-Object {
        $rel = $_.FullName.Substring($source.Length).TrimStart('\')
        $dest = Join-Path (Join-Path $Root "images") $rel
        $dir = Split-Path $dest -Parent
        if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
        if (-not (Test-Path $dest)) { Copy-Item $_.FullName $dest }
    }
}

@(
    $Pages +
    @(
        "/favicon.ico", "/robots.txt",
        "/documents/Whitepaper-Nexchain.pdf", "/documents/Litepaper-Nexchain.pdf",
        "/images/logo.png", "/images/logo.svg", "/images/favicon.ico",
        "/images/404-ufo.svg", "/images/plus.svg", "/images/minus.svg",
        "/images/w-arrow.svg", "/images/b-arrow.svg", "/images/ArrowUpRight.svg",
        "/images/CaretDown.svg", "/images/menu-compact.svg", "/images/menu-cross.svg",
        "/images/left-arrow.svg", "/images/right-arrow.svg",
        "/images/footer-logo.svg", "/images/footer_x.svg", "/images/footer_telegram.svg",
        "/images/footer_facebook.svg", "/images/footer_instagram.svg",
        "/images/footer_medium.svg", "/images/footer_coinmarketcap.svg",
        "/images/footer_linkedin.svg", "/images/footer_blog.svg",
        "/images/tokenomics/illustration.svg",
        "/images/landing/certik.svg", "/images/landing/solid-proof.svg",
        "/images/landing-redesign/feature-ai-network.png",
        "/images/landing-redesign/feature-faster.png",
        "/images/landing-redesign/feature-builders.png",
        "/images/landing-redesign/feature-onchain.png",
        "/images/landing-redesign/feature-growth.png",
        "/images/landing-redesign/feature-crosschain.png",
        "/images/landing-redesign/community-avatars.png",
        "/images/landing-redesign/final-cta-bg.png",
        "/images/landing-redesign/bonus-window-bg.png",
        "/images/featured/featured-6.png", "/images/featured/featured-7.png",
        "/images/featured/featured-8.png", "/images/featured/featured-9.png",
        "/images/featured/featured-10.png", "/images/featured/featured-12.png",
        "/images/featured/featured-13.png",
        "/images/roadmap/CircleGrey.svg", "/images/roadmap/CircleDashed.svg",
        "/images/roadmap/CheckCircle-black.svg", "/images/roadmap/check.svg",
        "/images/powered/eth.svg", "/images/powered/blockscout.svg",
        "/images/powered/relay.svg", "/images/powered/celestia.svg",
        "/images/powered/arbitrum.svg", "/images/powered/caldera.svg",
        "/images/blog/magnifier.svg",
        "/_next/static/media/e4af272ccee01ff0-s.p.woff2",
        "/_next/static/media/ba9851c3c22cd980-s.woff2",
        "/_next/static/media/21350d82a1f187e9-s.woff2",
        "/_next/static/media/c5fe6dc8356a8c31-s.woff2",
        "/_next/static/media/19cfc7226ec3afaa-s.woff2",
        "/_next/static/media/df0a9ae256c0569c-s.woff2",
        "/_next/static/media/8e9860b6e62d6359-s.woff2",
        "/_next/static/css/6a4f4945fb169447.css",
        "/_next/static/css/ef46db3751d8e999.css"
    )
) | ForEach-Object { Enqueue ($Base + $_) }

$cssDir = Join-Path $Root "_next\static\css"
if (Test-Path $cssDir) {
    Get-ChildItem $cssDir -Filter "*.css" | ForEach-Object {
        Enqueue ($Base + "/_next/static/css/" + $_.Name)
        Extract-Urls ([IO.File]::ReadAllText($_.FullName))
    }
}

Copy-CachedImages
Write-Host "Mirroring $Base into $Root"
Write-Host "Seeded $($queue.Count) URLs"

while ($queue.Count -gt 0) {
    $path = $queue.Dequeue()
    $url = $Base + $path
    $dest = Local-File $path
    $dir = Split-Path $dest -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

    $skipDownload = $false
    if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 0) -and -not (Is-PagePath $path)) {
        $skipDownload = $true
        $ext = [IO.Path]::GetExtension($dest).ToLowerInvariant()
        if ($ext -in @(".css", ".js", ".svg", ".xml", ".txt")) {
            Extract-Urls ([IO.File]::ReadAllText($dest))
        }
        $ok++
    }

    if (-not $skipDownload) {
        $tmp = "$dest.download"
        $args = @(
            "-fsSL", "--retry", "3", "--retry-delay", "1",
            "-A", $UserAgent,
            "-H", "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "-o", $tmp, $url
        )
        & curl.exe @args
        if ($LASTEXITCODE -ne 0 -or -not (Test-Path $tmp) -or ((Get-Item $tmp).Length -eq 0)) {
            if (Test-Path $tmp) { Remove-Item $tmp -Force }
            $fail.Add($path) | Out-Null
            Write-Host "FAIL $path"
            continue
        }

        $bytes = [IO.File]::ReadAllBytes($tmp)
        $isHtml = $false
        if ((Is-PagePath $path) -or ([IO.Path]::GetExtension($dest).ToLowerInvariant() -eq ".html")) {
            $text = [Text.Encoding]::UTF8.GetString($bytes)
            if ($text.TrimStart().StartsWith("0:{") -or ($text -notmatch '(?i)<html')) {
                Remove-Item $tmp -Force
                $fail.Add($path) | Out-Null
                Write-Host "SKIP RSC $path"
                continue
            }
            $text = Process-Html $text
            [IO.File]::WriteAllText($dest, $text)
            $alias = Join-Path $Root (($path.TrimStart("/")) + ".html")
            if ($path -ne "/" -and (Is-PagePath $path) -and ($path -notmatch '\.html?$')) {
                [IO.File]::WriteAllText($alias, $text)
            }
            Extract-Urls $text
            if ($path -eq "/blog" -or $path.StartsWith("/blog/")) {
                [regex]::Matches($text, '/blog/([a-z0-9-]+)') | ForEach-Object {
                    Enqueue ($Base + "/blog/" + $_.Groups[1].Value)
                    Enqueue ($Base + "/images/blog/" + $_.Groups[1].Value + ".png")
                }
            }
            $isHtml = $true
        }

        if (-not $isHtml) {
            Move-Item -Force $tmp $dest
            $ext = [IO.Path]::GetExtension($dest).ToLowerInvariant()
            if ($ext -in @(".css", ".js", ".svg", ".xml", ".txt", "")) {
                Extract-Urls ([IO.File]::ReadAllText($dest))
            }
        } elseif (Test-Path $tmp) {
            Remove-Item $tmp -Force
        }

        $ok++
        Write-Host ("OK  {0,-60} {1,8:N0} bytes" -f $path, (Get-Item $dest).Length)
    }
}

Get-ChildItem -Path $Root -Recurse -Filter "*.html" | ForEach-Object {
    if ($_.FullName -match '\\tools\\' -or $_.Name -like "roadmap (*") { return }
    $html = [IO.File]::ReadAllText($_.FullName)
    if ($html -notmatch '(?i)<html') { return }
    [IO.File]::WriteAllText($_.FullName, (Process-Html $html))
}

Copy-CachedImages
Write-Host ""
Write-Host "Downloaded $ok files. Failed: $($fail.Count)"
if ($fail.Count -gt 0) {
    $fail | ForEach-Object { Write-Host "  $_" }
}
Write-Host "Done."
