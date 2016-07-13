# Electron support

Nd template allows you to generate a project with everything you need to develop and build an [Electron](http://electron.atom.io/) app. This doc will only cover nd specific topics and assumes you have basic Electron knowledge. If you whish to learn more about Electron, please check out their [documentation](http://electron.atom.io/docs/).

*
**Note**: For numerous reasons, choosing this option ~~can~~ will break browser compatibility.
*

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
