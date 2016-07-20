# Electron support

Nd template allows you to generate a project with everything you need to develop and build an [Electron](http://electron.atom.io/) app. This doc will only cover nd specific topics and assumes you have basic Electron knowledge. If you whish to learn more about Electron, please check out their [documentation](http://electron.atom.io/docs/).

*
**Note**: If you want to be able to use your app into a browser, please read about the `--target` flag in the [commands](commands.md) section.*

### Main file

Electron needs an entry point to know how to run your app. This is the file stated in the `main` property of your `package.json`. By default, it will be `electron/main.js`.

### Development and debug

When using in development, you start Electron with:

```bash
$ npm run electron
```

If you have checked the `package.json`, you've seen that what it does is simply launch:

```bash
$ export NODE_ENV="dev"; ./node_modules/.bin/electron .
```

The main process now has a `process.env['NODE_ENV']` property equals to `'dev'` that we can use to start Electron on your local dev server, open the devtools , load the dev bundle that uses source maps, hot reload, linting, etc...

### Using the `file://` protocol

This is the main breaking point between electron and browser bundles (“bundle" as in "webpack, the flexible module bundler"). When you package and distribute your app, you create a package containing Electron binary and your bundled source code. It means that:

- you need to provide the renderer process a way to access your app files,
- you need to provide webpack a way to bundle you module and your assets, and make sure the path is still valid.

With that in mind, you have two solutions: making your sources accessible through `http://` or `file://`. Nd comes with the **`file://`** option for portability and simplicity. It simply takes some adjustements to the `webpack` config, by referencing the bundled files with their absolute path for example.

Since nd comes with [`vue-router`](http://router.vuejs.org/en/index.html), you also have to keep in mind that you **cannot** enable the `history` [option](http://router.vuejs.org/en/options.html). That is because your app URLs would look like `file:///path/to/your/app/index.html/my-route/`, which makes no sense in UNIX filesystem architecture.

### Building and packaging your app

*See [`commands`](commands.md).*

Simply run:

```bash
$ npm run build
```

command to bundle your app into an optimized production-ready SPA. Output will resides in the `dist` folder.

Nd provides you a way to quickly and easily package your app into a Windows, OS X or Linux portable binary with:

```bash
$ npm run package
```

Running this command without any further parameter will package your app for your current platform. Nevertheless, you can specify any platform from any OS by adding the `-- -p {platform}` flag to this command. Simply type `linux`, `darwin` (OS X), `win` or `all` in place of the `{platform}` placeholder.

Architecture is `x64`, but if your project is targetted at `ia32` architecture, or even both, you can modify the `build/package-electron.js` file (see [here](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#arch) for API details).

No `devDependencies` will be copied into the packaged binary, but all standard `dependencies` will, except `electron-prebuilt`, `electron-packager` and all `node_modules/.bin` executables. `releases` and `.git` folders will also be ignored, as well as development-only files and folders (`build/`, `src`, `test`, ...)

In production environment (that is if `NODE_ENV` is not set to `dev`), Electron will look into the `dist/` folder to run your app. Make sure to run the `build` command before 😉.
