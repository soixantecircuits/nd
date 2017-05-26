Neodymium
=========

Introduction - What is nd?
--------------------------

Neodymiumn (or nd for short) is a `vue-cli` framework for a `webpack` app. The aim of nd is to simplify making a webpack application: in theory, all you have to do is provide it with a few custom attributes (project name, description), and let it take care of the boilerplate code for you.

In practice, you may need to look at the boilerplate code at some point to understand how your project is built.

This tutorial will take you through the process installing, developping and running a basic grocery list app with nd.

It will be a simple one-page application, with a list of grocery item. Each item will be made of a checkbox, and a line of text which will be crossed out when the box is checked. Below all items, there will be a text input zone a button to add more items.

The final app should look like this:

_[TODO - INSERT SCREENSHOT]_

### [TODO] Major dependencies

* npm 3+
* nd is installed with vue-cli
* nd projects are built with webpack
* nd projects are based on vue

Major dependencies


Install
-------

First off, you need vue-cli to install nd:

    $ npm install -g vue-cli

vue-cli is a command line tool for installing project templates. You can use it to download and configure a new project with:

[TODO - how to configure it?]

    $ vue init soixantecircuits/nd my-grocery-list

Install dependencies in your `node_modules` folder:

    $ cd my-grocery-list
    $ npm install

Your project is now installed; for now, it only has a showcase app, with some links and a counter component. You can display it with:

    $ npm run dev

_[TODO - INSERT SCREENSHOT]_


Making the app
--------------

### The nd pipeline

First, we need to understand what goes on under the hood, when the previous screen is displayed. What goes from typing `npm run dev` to displaying "Hello nd"? [TODO]

Well, the pipeline is somewhat convoluted, but it goes like this:

* First, `npm run dev` reads the `package.json` objects, looks for the `scripts.dev` string, and runs it, which runs `node build/dev-server.js`

* `dev-server.js` is a complex file; but the gist of it is, it runs a webpack server and an electron client; the server sends `index.html` and `src/main.js` to the client

* `src/main.js` replaces the HTML element with id "app" in `index.html` with the components `src/components/App.vue`

* `src/components/App.vue` is an indirection, which displays the component returned by `src/lib/router.js`; usually this is the Root component in `src/Root.vue`

If you didn't understand everything, don't worry. You only need to remember that the effective entry point of your app is `src/Root.vue`; and indeed, if you open it, you can see the HTML code for the content of the default showcase app, inside the `<template>` tags.

### Writing the app

For starters, open `src/Root.vue` and replace the contents of the `<template>` section with the following code (or, alternatively, your own):

    <div id="app">
      <h1>Groceries</h1>
      <div id="grocery-list">
        <p class="grocery-item" v-for="item_name of items">
          {{ item_name }}
        </p>
      </div>
      <input text />
      <button>Add item</button>
    </div>

Then, replace the contents of the `<script>` section with the following code:

    export default {
      data() { return {
        ["Bread", "Butter", "Milk"]
      }}
    }

This code is classic vue code; it uses the MVC model [TODO]

Run `npm run dev` again; your app should now look like this:

_[TODO - INSERT SCREENSHOT]_

### Add component

Most apps are made of several components, to allow developpers to compartimentalize and reuse code.:

_[TODO - INSERT SCREENSHOT]_

We will create a `GroceryItem` component, which will be include a line of text, and a checkbox that crosses the text out when it's clicked.

Create a new file in the component folder:

    $ cd src/components
    $ touch GroceryItem.vue

And paste the following code into it:

[TODO]

To include this component in Root.vue, replace the `{{ item_name }}` line with:

    <grocery-item :name="item_name" />

Run `npm run dev` again; your app should look like this at last:

_[TODO - INSERT SCREENSHOT]_


Build and test
--------------

The nd template includes multiple scripts in `package.json`;

To check that your project respects the standard-settings norm, you can run eslint on your files with:

    npm run lint

To build your project into an executable binary file, run:

    npm run build

This will create a build in the `releases` folder. Unlike `dev`

TODO - Activer devtools avec build
