# Build Commands

All build commands are executed via [NPM Scripts](https://docs.npmjs.com/misc/scripts).

### `npm start [-- -t "{target}"]`

> Starts a Node.js local development server. See [API Proxying During Development](proxy.md) for more details. In Electron enabled apps, will also launch Electron at this address. The `npm run dev` works the same (`start` is an alias).

- Webpack + `vue-loader` for single file Vue components.
- State preserving hot-reload
- State preserving compilation error overlay
- Lint-on-save with ESLint
- `-t` (or `--target=`) modifier is optionnal and override the default [webpack target](https://webpack.github.io/docs/configuration.html#target). This can allow you to develop in a browser with the Electron option enabled, or the opposite.
- Source maps.
- Autorun the `npm run electron` command.

### `npm run electron [-- -s "{path to settings}"]`

> Starts Electron and open a window at your local dev server.

- Adds some developper friendly features when working in a dev environment:
  - Auto opens the devtools.
- `-s` is optionnal and loads the settings given over the default settings.

### `npm run build [-- -t "{target}"]`

> Build assets for production. In Electron enabled apps, will also package the app. See [Configure you build](build-config.md) and [Electron support](electron.md) for more details.

- Running only `npm run build` will build for the current platform. However, you can also run:
  - `npm run build:darwin`
  - `npm run build:linux`
  - `npm run build:win32`
  - `npm run build:all` *All platforms, all architectures*
  - `npm run build:no-package` *Standalone build*
- JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
- HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
- CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
- All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
- If you pick [Electron support](electron.md), build will be setup to work over `file://` and have access to [electron built-in modules](https://github.com/webpack/webpack/blob/3d5dc1a7bf8c7e44acb89d3f0c4b357df6a0ac0a/lib/WebpackOptionsApply.js#L122).
- `-t` (or `--target=`) modifier is optionnal and override the default [webpack target](https://webpack.github.io/docs/configuration.html#target)
- Also see [deployment notes](build-config.md).

### `npm run package`

> Package your app for distribution with [electron-packager](https://github.com/electron-userland/electron-packager). You'll need to have a bundle into the `dist/` folder.

- Running only `npm run package` will package for the current platform. However, you can also run:
  - `npm run package:darwin`
  - `npm run package:linux`
  - `npm run package:win32`
  - `npm run package:all` *All platforms, all architectures*
- Portable version of your app (NodeJS and WebKit embedded).
- Package for Windows/OS X/Linux.
- Remove all `devDependencies` from the packaged binary, reducing final size a lot.
- Does not include development-only files and folders, saving even more space and protecting your app sources.
- See [Electron support](electron.md)
