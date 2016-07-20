# Build Commands

All build commands are executed via [NPM Scripts](https://docs.npmjs.com/misc/scripts).

### `npm run dev [-- -t "{target}"]`

> Starts a Node.js local development server. See [API Proxying During Development](proxy.md) for more details.

- Webpack + `vue-loader` for single file Vue components.
- State preserving hot-reload
- State preserving compilation error overlay
- Lint-on-save with ESLint
- `-t` (or `--target=`) modifier is optionnal and override the default [webpack target](https://webpack.github.io/docs/configuration.html#target). This can allow you to develop in a browser with the Electron option enabled, or the opposite.
- Source maps

### `npm run electron`

> Starts Electron and open a window at your local dev server.

- Adds some developper friendly features when working in a dev environment:
  - Auto opens the devtools.

### `npm run build [-- -t "{target}"]`

> Build assets for production. See [Configure you build](build-config.md) and [Electron support](electron.md) for more details.

- JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
- HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
- CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
- All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
- If you pick [Electron support](electron.md), build will be setup to work over `file://` and have access to [electron built-in modules](https://github.com/webpack/webpack/blob/3d5dc1a7bf8c7e44acb89d3f0c4b357df6a0ac0a/lib/WebpackOptionsApply.js#L122).
- `-t` (or `--target=`) modifier is optionnal and override the default [webpack target](https://webpack.github.io/docs/configuration.html#target)
- Also see [deployment notes](build-config.md).

### `npm run package [-- -p {platform}]`

> Package your app for distribution with [electron-packager](https://github.com/electron-userland/electron-packager).

- `-- -p {platform}` flag is optionnal and will determine the destination platform. Default is your current.
  - `linux` for Linux.
  - `darwin` for OS X.
  - `win` for Windows.
  - `all` for the three.
- Portable version of your app (NodeJS and WebKit embedded).
- Package for Windows/OS X/Linux.
- Remove all `devDependencies` from the packaged binary, reducing final size a lot.
- Does not include development-only files and folders, saving even more space and protecting your app sources.
- See [Electron support](electron.md)

### `npm run unit`

> Run unit tests in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html). See [Unit Testing](unit.md) for more details.

- Supports ES2015 in test files.
- Supports all webpack loaders.
- Easy [mock injection](http://vuejs.github.io/vue-loader/workflow/testing-with-mocks.html).

### `npm run e2e`

> Run end-to-end tests with [Nightwatch](http://nightwatchjs.org/). See [End-to-end Testing](e2e.md) for more details.

- Run tests in multiple browsers in parallel.
- Works with one command out of the box:
  - Selenium and chromedriver dependencies automatically handled.
  - Automatically spawns the Selenium server.
