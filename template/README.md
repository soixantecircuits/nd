# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# launch electron and open a window at localhost:8080
# you must have run the `npm run dev` command in an other terminal window
npm run electron

# build for production with minification.
{{#if electron}}
# build will be targeted at electron.
{{else}}
# build will be targeted at web browser.
{{/if}}
npm run build

# package a portable binary for a specific platform.
npm run package [-- -p {platform}]

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://soixantecircuits.github.io/nd/).
