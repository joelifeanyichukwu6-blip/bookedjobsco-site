#!/bin/sh
# Bundle the demo (three.js + addons + app) into one file.
SP=/tmp/claude-0/-home-claude/2392b9dc-05c1-5ec1-be75-32e5c170cab3/scratchpad/t160
cd /home/claude/site/x3d && $SP/node_modules/.bin/esbuild app.js --bundle --format=esm --minify --target=es2020 \
  --alias:three=./vendor/three.module.js --alias:three/addons=./vendor/addons --outfile=app.bundle.js
$SP/node_modules/.bin/esbuild video.js --bundle --format=esm --minify --target=es2020 \
  --alias:three=./vendor/three.module.js --alias:three/addons=./vendor/addons --outfile=video.bundle.js
