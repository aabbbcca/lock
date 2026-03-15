$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$dataPath = Join-Path $root 'product\product-data.js'
$productRoot = Join-Path $root 'product'
$sitemapPath = Join-Path $root 'sitemap.xml'
$robotsPath = Join-Path $root 'robots.txt'

$raw = Get-Content -Path $dataPath -Raw -Encoding UTF8
$pattern = "'(?<id>[^']+)':\s*\{[\s\S]*?title:\s*'(?<title>[^']+)'"
$matches = [regex]::Matches($raw, $pattern)

if ($matches.Count -eq 0) {
    throw 'No products found in product-data.js'
}

$sitemapLines = New-Object System.Collections.Generic.List[string]
$null = $sitemapLines.Add('<?xml version="1.0" encoding="UTF-8"?>')
$null = $sitemapLines.Add('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
$null = $sitemapLines.Add('  <url>')
$null = $sitemapLines.Add('    <loc>https://xiao-li-locksmith.com/</loc>')
$null = $sitemapLines.Add('  </url>')

foreach ($match in $matches) {
    $id = $match.Groups['id'].Value
    $title = $match.Groups['title'].Value
    $description = "$title product page with LINE quote, install tips, and installation examples."
    $canonical = "https://xiao-li-locksmith.com/product/$id"
    $dir = Join-Path $productRoot $id
    $filePath = Join-Path $dir 'index.html'

    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }

    $templateLines = @(
        '<!DOCTYPE html>',
        '<html lang="zh-TW">',
        '<head>',
        '    <meta charset="UTF-8">',
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '    <title>__TITLE__ | Xiao Li Locksmith</title>',
        '    <meta name="description" content="__DESCRIPTION__">',
        '    <meta name="robots" content="index,follow">',
        '    <link rel="canonical" href="__CANONICAL__">',
        '    <meta property="og:type" content="product">',
        '    <meta property="og:title" content="__TITLE__ | Xiao Li Locksmith">',
        '    <meta property="og:description" content="__DESCRIPTION__">',
        '    <meta property="og:url" content="__CANONICAL__">',
        '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">',
        '    <link rel="stylesheet" href="/product/page.css">',
        '</head>',
        '<body>',
        '    <div id="product-page-root"></div>',
        '    <script>window.PRODUCT_ID = ''__ID__'';</script>',
        '    <script src="/product/product-data.js"></script>',
        '    <script src="/product/page.js"></script>',
        '</body>',
        '</html>'
    )

    $template = [string]::Join([Environment]::NewLine, $templateLines)
    $html = $template.Replace('__TITLE__', $title).Replace('__DESCRIPTION__', $description).Replace('__CANONICAL__', $canonical).Replace('__ID__', $id)
    Set-Content -Path $filePath -Value $html -Encoding UTF8

    $null = $sitemapLines.Add('  <url>')
    $null = $sitemapLines.Add("    <loc>$canonical</loc>")
    $null = $sitemapLines.Add('  </url>')
}

$null = $sitemapLines.Add('</urlset>')
Set-Content -Path $sitemapPath -Value $sitemapLines -Encoding UTF8

$robotsLines = @(
    'User-agent: *',
    'Allow: /',
    '',
    'Sitemap: https://xiao-li-locksmith.com/sitemap.xml'
)
Set-Content -Path $robotsPath -Value $robotsLines -Encoding UTF8
