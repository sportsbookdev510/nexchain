param(
    [string]$Bind = "127.0.0.1",
    [int]$Port = 5503
)

$Root = $PSScriptRoot
$mime = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".webp" = "image/webp"
    ".ico"  = "image/x-icon"
    ".woff2"= "font/woff2"
    ".woff" = "font/woff"
    ".pdf"  = "application/pdf"
    ".txt"  = "text/plain; charset=utf-8"
    ".xml"  = "application/xml"
}

function Resolve-LocalPath([string]$urlPath) {
    $clean = [Uri]::UnescapeDataString(($urlPath.Split("?")[0]).Split("#")[0])
    if ([string]::IsNullOrWhiteSpace($clean) -or $clean -eq "/") {
        return (Join-Path $Root "index.html")
    }
    $rel = $clean.TrimStart("/").Replace("/", [IO.Path]::DirectorySeparatorChar)
    $direct = Join-Path $Root $rel
    if (Test-Path $direct -PathType Leaf) { return $direct }
    $asDir = Join-Path $direct "index.html"
    if (Test-Path $asDir) { return $asDir }
    $asHtml = "$direct.html"
    if (Test-Path $asHtml) { return $asHtml }
    return $null
}

function Get-RequestPath([System.Net.Sockets.TcpClient]$client) {
    $stream = $client.GetStream()
    $stream.ReadTimeout = 5000
    $buffer = New-Object byte[] 8192
    $read = $stream.Read($buffer, 0, $buffer.Length)
    if ($read -le 0) { return $null }
    $text = [Text.Encoding]::ASCII.GetString($buffer, 0, $read)
    $first = ($text -split "`r`n")[0]
    if ($first -match '^[A-Z]+ (\S+)') { return $Matches[1] }
    return "/"
}

function Write-Response([System.Net.Sockets.NetworkStream]$stream, [int]$status, [string]$contentType, [byte[]]$body) {
    $reason = if ($status -eq 200) { "OK" } else { "Not Found" }
    $header = "HTTP/1.1 $status $reason`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
    $headBytes = [Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($headBytes, 0, $headBytes.Length)
    if ($body.Length -gt 0) { $stream.Write($body, 0, $body.Length) }
    $stream.Flush()
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse($Bind), $Port)
$listener.Start()
Write-Host "Nexchain fork running at http://${Bind}:${Port}/"

try {
    while ($true) {
        $client = $listener.AcceptTcpClient()
        try {
            $path = Get-RequestPath $client
            $stream = $client.GetStream()
            $file = Resolve-LocalPath $path
            if (-not $file) {
                Write-Response $stream 404 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Not found"))
            } else {
                $ext = [IO.Path]::GetExtension($file).ToLowerInvariant()
                $type = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }
                Write-Response $stream 200 $type ([IO.File]::ReadAllBytes($file))
            }
        } catch {
            # ignore broken connections
        } finally {
            $client.Close()
        }
    }
} finally {
    $listener.Stop()
}
