$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot

$Faq = [ordered]@{
    "What is Nexchain?" = "Nexchain is an AI-native Layer 1 blockchain designed to combine fast execution, low fees, AI-powered network intelligence, and a more transparent user experience."
    "What makes Nexchain different?" = "Nexchain focuses on AI-native execution at the network level, practical builder tooling, cross-chain connectivity, and early presale access for the NEX token."
    "What is the current NEX price?" = "The current NEX presale price is `$0.16 during the active entry window."
    "How much has Nexchain raised?" = "The campaign summary on this page shows more than `$17M raised from 10,814 investors."
    "Is Nexchain audited?" = "CertiK and SolidProof audit references cover the NEX token smart contract, not the network or the AI layer."
    "What is NEX used for?" = "NEX is designed to power network usage, AI-related activity, staking, governance, and ecosystem incentives."
    "Can I lose money?" = "Yes. Crypto assets and presales involve risk, including loss of capital. Review the official terms and your local eligibility before participating."
    "Who can participate?" = "Participation depends on the official terms and local eligibility. Review the project terms before joining the presale."
}

Get-ChildItem -Path $Root -Recurse -Filter "*.html" | ForEach-Object {
    if ($_.Name -like "roadmap (*") { return }
    $html = [IO.File]::ReadAllText($_.FullName)
    if ($html -notmatch '(?i)<html') { return }

    $html = [regex]::Replace($html, '<link[^>]+rel="preload"[^>]+as="script"[^>]*>', '')
    $html = [regex]::Replace($html, '<script>\s*\(self\.__next_f[\s\S]*?</script>', '')
    $html = [regex]::Replace($html, '<script>\s*self\.__next_f[\s\S]*?</script>', '')

    foreach ($title in $Faq.Keys) {
        $escaped = [regex]::Escape($title)
        if ($html -match ("<h3>$escaped</h3>[\s\S]{0,500}<div class=`"faq_text`"")) { continue }
        $answer = $Faq[$title]
        $pattern = "(<div class=`"faq_block[^`"]*`">\s*<div class=`"faq_title`">\s*<h3>$escaped</h3>[\s\S]*?</button>\s*</div>)\s*(</div>)"
        $html = [regex]::Replace($html, $pattern, "`$1<div class=`"faq_text`">$answer</div>`$2")
    }

    if ($html -notmatch 'src="/js/fork.js"') {
        $html = $html -replace '</body>', "<script src=`"/js/fork.js`" defer></script></body>"
    }

    [IO.File]::WriteAllText($_.FullName, $html)
    Write-Host "Finalized $($_.FullName.Substring($Root.Length))"
}
