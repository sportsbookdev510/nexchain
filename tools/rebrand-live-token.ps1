$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
$BuyUrl = "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0x918f03d7727aad7b68f9048dabdd7c1bfbf4a959"

$replacements = @(
    @{ From = 'href="https://nexchain.live"'; To = 'href="' + $BuyUrl + '"' },
    @{ From = "Join Presale"; To = "Buy `$NEX" },
    @{ From = "Nexchain AI Layer 1 Blockchain: Top Crypto Presale"; To = "Nexchain AI Layer 1 Blockchain" },
    @{ From = "NEX token presale, price, and listings. Buy NEX coin on top crypto exchanges."; To = "NEX token price and listings. Buy `$NEX on Uniswap." },
    @{ From = "CURRENT ENTRY WINDOW. `$0.16 ENTRY PRICE."; To = "NEX is live. Buy `$NEX on Uniswap." },
    @{ From = "https://schema.org/PreOrder"; To = "https://schema.org/InStock" },
    @{ From = "and the presale."; To = "and the `$NEX token." },
    @{ From = "Current Entry"; To = "Live Price" },
    @{ From = "`$0.16 ENTRY WINDOW"; To = "LIVE ON UNISWAP" },
    @{ From = "<strong>`$17M+</strong> raised"; To = "<strong>Uniswap</strong> listing" },
    @{ From = "<strong>10,814</strong> investors"; To = "<strong>Live</strong> token" },
    @{ From = "The <!-- -->`$0.16</span> Window Won&#x27;t Last"; To = "Buy `$NEX</span> on Uniswap" },
    @{ From = "Join Nexchain at the current presale price before the next scheduled stage."; To = "NEX is a live token. Swap ETH for `$NEX on Uniswap." },
    @{ From = "Every Stage Brings <span>A Higher Price</span>"; To = "Trade `$NEX <span>on Uniswap</span>" },
    @{ From = "The current <!-- -->`$0.16<!-- --> entry window is available for a limited time before the next scheduled increase."; To = "NEX is live and trading. Buy `$NEX on Uniswap with ETH." },
    @{ From = "NEX token allocation and unlock schedule"; To = "NEX allocation and circulating supply" },
    @{ From = "Public Sale"; To = "Circulation" },
    @{ From = ">At TGE<"; To = ">Unlocked<" },
    @{ From = "Published 5 October"; To = "Live on Uniswap" },
    @{ From = "<h3>Token Launch</h3><ul><li>Network goes live</li><li>Token Generation Event and public availability</li><li>Staking and on-chain governance enabled</li><li>Builder programs and broader ecosystem growth</li></ul>"; To = "<h3>Token Live</h3><ul><li>NEX is live and publicly tradable</li><li>`$NEX available on Uniswap</li><li>Staking and on-chain governance enabled</li><li>Builder programs and broader ecosystem growth</li></ul>" },
    @{ From = '<article class="roadmap_block in-progress">'; To = '<article class="roadmap_block completed">' },
    @{ From = "<span>Q3<!-- --> <!-- -->2026</span><b>In Progress</b>"; To = "<span>Q3<!-- --> <!-- -->2026</span><b>Completed</b>" },
    @{ From = "What is the current NEX price?"; To = "Where can I buy NEX?" },
    @{ From = "The current NEX presale price is `$0.16 during the active entry window."; To = "`$NEX is a live token. Buy it on Uniswap by swapping ETH." },
    @{ From = "How much has Nexchain raised?"; To = "Is NEX live?" },
    @{ From = "The campaign summary on this page shows more than `$17M raised from 10,814 investors."; To = "Yes. NEX is a normal live token. You can buy `$NEX on Uniswap." },
    @{ From = "Nexchain focuses on AI-native execution at the network level, practical builder tooling, cross-chain connectivity, and early presale access for the NEX token."; To = "Nexchain focuses on AI-native execution at the network level, practical builder tooling, and cross-chain connectivity, with `$NEX as the live network token." },
    @{ From = "Crypto assets and presales involve risk, including loss of capital. Review the official terms and your local eligibility before participating."; To = "Crypto assets involve risk, including loss of capital. Review the official terms and your local eligibility before buying `$NEX." },
    @{ From = "Who can participate?"; To = "Who can buy NEX?" },
    @{ From = "Participation depends on the official terms and local eligibility. Review the project terms before joining the presale."; To = "Anyone with a compatible wallet can buy `$NEX on Uniswap, subject to local laws and Uniswap availability." },
    @{ From = ">Investors<"; To = ">Holders<" },
    @{ From = "early supporter access opened to the community"; To = "community access opened around the live token" },
    @{ From = "Early supporter access opened to the community"; To = "Community access opened around the live token" },
    @{ From = "participate in our tokens presale and be among the first people to test the NEX coin"; To = "buy `$NEX on Uniswap and use it across the Nexchain ecosystem" },
    @{ From = "the process of coin purchasing through the crypto token presale"; To = "buying `$NEX on Uniswap" },
    @{ From = "Why Join the Nexchain Crypto Presale Now?"; To = "Why buy `$NEX now?" },
    @{ From = "Participation in the presale provides early technical access to network features and allows users to engage with the ecosystem during its development phase."; To = "Buying `$NEX gives access to network utility, staking, governance, and the broader Nexchain ecosystem." },
    @{ From = "The minimum investment required is `$20, which grants access to participate in the cryptocurrency pre-sale. The current weekly entry price is fixed at 1 NEX = `$0.16."; To = "`$NEX is a live token. Buy it on Uniswap at the current market price." },
    @{ From = "When will NEX tokens be listed on exchanges?"; To = "Where does NEX trade?" },
    @{ From = "Nexchain is moving toward the final stretch of presale and product launch. Listing details will be announced through official project updates."; To = "`$NEX is live and can be bought on Uniswap." },
    @{ From = "The listing is scheduled after the Nexchain presale is complete, targeting a total raise of `$50M. According to our roadmap, TGE with listings on Tier-1 / Tier-2 CEXs is planned for Q3 2026, along with the Mainnet v1 launch."; To = "`$NEX is already live. Buy it on Uniswap. Further exchange listings may follow as the ecosystem grows." },
    @{ From = "What is the minimum investment amount?"; To = "How do I buy NEX?" },
    @{ From = "participate in Nexchain crypto presales today"; To = "buy `$NEX on Uniswap today" },
    @{ From = "Participate in the NexChain (NEX) Presale."; To = "Buy `$NEX on Uniswap." },
    @{ From = "Nexchain crypto presale"; To = "Nexchain `$NEX token" },
    @{ From = "Nexchain Crypto Presale"; To = "Nexchain `$NEX Token" },
    @{ From = "crypto token presale"; To = "`$NEX token" },
    @{ From = "tokens presale"; To = "`$NEX token" },
    @{ From = "the presale"; To = "the live token" },
    @{ From = "the pre-sale"; To = "the live token" },
    @{ From = "pre-sale"; To = "live token" },
    @{ From = "presale price"; To = "market price" }
)

$generic = @(
    @{ From = "Presale"; To = "Token" },
    @{ From = "presale"; To = "token" }
)

$files = Get-ChildItem -Path $Root -Recurse -Filter "*.html" | Where-Object { $_.Name -notlike "roadmap (*" }
$changed = 0
foreach ($file in $files) {
    $html = [IO.File]::ReadAllText($file.FullName)
    $updated = $html
    foreach ($pair in $replacements) {
        $updated = $updated.Replace($pair.From, $pair.To)
    }
    $isBlogArticle = $file.FullName -match '[\\/]blog[\\/].+'
    if (-not $isBlogArticle) {
        foreach ($pair in $generic) {
            $updated = $updated.Replace($pair.From, $pair.To)
        }
    }
    if ($updated -ne $html) {
        [IO.File]::WriteAllText($file.FullName, $updated)
        $changed++
    }
}

Write-Host "Updated $changed HTML files"
Write-Host "Join Presale left: $((Select-String -Path $files.FullName -Pattern 'Join Presale' -SimpleMatch | Measure-Object).Count)"
Write-Host "nexchain.live left: $((Select-String -Path $files.FullName -Pattern 'nexchain.live' -SimpleMatch | Measure-Object).Count)"
Write-Host "Buy NEX count: $((Select-String -Path $files.FullName -Pattern 'Buy `$NEX' -SimpleMatch | Measure-Object).Count)"
