#!/usr/bin/env bash
set -e

rm -rf dist

mkdir -p dist/html
mkdir -p dist/css
mkdir -p dist/js/modules
mkdir -p dist/imagens

for arquivo in html/*.html; do
    node node_modules/html-minifier-terser/cli.js "$arquivo" \
        --collapse-whitespace \
        --remove-comments \
        --remove-redundant-attributes \
        --remove-empty-attributes \
        -o "dist/$arquivo"
done

node node_modules/clean-css-cli/bin/cleancss \
    -o dist/css/style.css \
    css/style.css

node node_modules/terser/bin/terser js/main.js \
    -c -m \
    -o dist/js/main.js

for arquivo in js/modules/*.js; do
    node node_modules/terser/bin/terser "$arquivo" \
        -c -m \
        -o "dist/$arquivo"
done

cp imagens/nossa-ong-1200.jpg dist/imagens/
cp imagens/nossa-ong-1200.webp dist/imagens/
cp imagens/nossa-ong-640.webp dist/imagens/

cat > dist/index.html <<'HTML'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=html/index.html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nossa ONG</title>
</head>
<body>
    <p><a href="html/index.html">Acessar Nossa ONG</a></p>
</body>
</html>
HTML
