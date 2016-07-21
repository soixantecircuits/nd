# {{ name }}

> {{ description }}

[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
# -t (or --target=) option is optionnal and override the default webpack target (https://webpack.github.io/docs/configuration.html#target)
npm start [-- -t {target}] # or `npm run dev`

# launch electron and open a window at localhost:8080
# you must have run the `npm run dev` command in an other terminal window
npm run electron

# build for production with minifications and package the app.
npm run build
{{#electron}}
npm run build:darwin
npm run build:linux
npm run build:win32
npm run build:all # All platforms, all architectures
npm run build:no-package # Standalone build
{{/electron}}
# Note: use the -t (or --target=) option to override the default webpack target (https://webpack.github.io/docs/configuration.html#target). For example `npm run build -- -t web`.

{{#electron}}
# package a portable binary for a specific platform from the available build.
npm run package # package for you current platform
npm run package:darwin
npm run package:linux
npm run package:win32
npm run package:all # All platforms, all architectures
```
{{/electron}}

For detailed explanation on how things work, checkout the [guide](http://soixantecircuits.github.io/nd/).

:wq
