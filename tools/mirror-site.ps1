$ErrorActionPreference = "Stop"

$Base = "https://nexchain.ai"
$Root = Split-Path -Parent $PSScriptRoot
$UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"

$queue = [System.Collections.Generic.Queue[string]]::new()
$seen = [System.Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
$ok = 0
$fail = New-Object System.Collections.Generic.List[string]

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
    if ($path -eq "/" ) { return (Join-Path $Root "index.html") }
    $rel = $path.TrimStart("/").Replace("/", [IO.Path]::DirectorySeparatorChar)
    if (Is-PagePath $path -and $path -notmatch '\.(html?|xml|txt)$') {
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

function Extract-Urls([string]$text, [string]$fromPath) {
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
                    continue
                }
            }
        }
    }
}

Add-Type -AssemblyName System.Web

@(
    "/", "/tokenomics", "/roadmap", "/ecosystem", "/builders", "/blog",
    "/referrals", "/career", "/contact-us", "/terms-conditions",
    "/cookie-policy", "/privacy-policy", "/favicon.ico", "/robots.txt",
    "/documents/Whitepaper-Nexchain.pdf", "/documents/Litepaper-Nexchain.pdf",
    "/images/logo.png", "/images/logo.svg", "/images/favicon.ico",
    "/images/404-ufo.svg", "/images/plus.svg", "/images/minus.svg",
    "/images/w-arrow.svg", "/images/b-arrow.svg",
    "/images/tokenomics/illustration.svg",
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
    "/images/roadmap/CircleGrey.svg",
    "/_next/static/chunks/polyfills-42372ed130431b0a.js",
    "/_next/static/css/6a4f4945fb169447.css",
    "/_next/static/css/ef46db3751d8e999.css",
    "/_next/static/media/e4af272ccee01ff0-s.p.woff2",
    "/_next/static/media/ba9851c3c22cd980-s.woff2",
    "/_next/static/media/21350d82a1f187e9-s.woff2",
    "/_next/static/media/c5fe6dc8356a8c31-s.woff2",
    "/_next/static/media/19cfc7226ec3afaa-s.woff2",
    "/_next/static/media/df0a9ae256c0569c-s.woff2",
    "/_next/static/media/8e9860b6e62d6359-s.woff2"
) | ForEach-Object { Enqueue ($Base + $_) }

1..20 | ForEach-Object { Enqueue "$Base/blog?page=$_" }

Write-Host "Mirroring $Base into $Root"
Write-Host "Seeded $($queue.Count) URLs"

while ($queue.Count -gt 0) {
    $path = $queue.Dequeue()
    $url = $Base + $path
    $dest = Local-File $path
    $dir = Split-Path $dest -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

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

    Move-Item -Force $tmp $dest
    $ok++
    Write-Host ("OK  {0,-60} {1,8:N0} bytes" -f $path, (Get-Item $dest).Length)

    $ext = [IO.Path]::GetExtension($dest).ToLowerInvariant()
    if ($ext -in @(".html", ".css", ".js", ".xml", ".txt", ".svg", "")) {
        $text = [IO.File]::ReadAllText($dest)
        Extract-Urls $text $path
        if ($ext -eq ".html" -or $path -eq "/" -or (Is-PagePath $path -and $ext -eq ".html")) {
            Extract-Urls $text $path
        }
    }

    if ($path -eq "/blog" -or $path -like "/blog*") {
        $html = [IO.File]::ReadAllText($dest)
        [regex]::Matches($html, '/blog/([a-z0-9-]+)') | ForEach-Object {
            Enqueue ($Base + "/blog/" + $_.Groups[1].Value)
            Enqueue ($Base + "/images/blog/" + $_.Groups[1].Value + ".png")
        }
    }
}

Write-Host ""
Write-Host "Downloaded $ok files. Failed: $($fail.Count)"
if ($fail.Count -gt 0) {
    $fail | ForEach-Object { Write-Host "  $_" }
}

function Rewrite-HtmlFile([string]$file) {
    $html = [IO.File]::ReadAllText($file)
    $rewritten = [regex]::Replace($html, '/_next/image\?url=([^"\s,]+)', {
        param($m)
        $enc = $m.Groups[1].Value -replace '&amp;.*$', '' -replace '&w=.*$', ''
        return [uri]::UnescapeDataString($enc)
    })
    if ($rewritten -ne $html) {
        [IO.File]::WriteAllText($file, $rewritten)
    }
}

Get-ChildItem -Path $Root -Recurse -Filter "index.html" | ForEach-Object { Rewrite-HtmlFile $_.FullName }
if (Test-Path (Join-Path $Root "index.html")) { Rewrite-HtmlFile (Join-Path $Root "index.html") }

Write-Host "Rewrote Next.js image optimizer URLs to local /images paths."
Write-Host "Done."
