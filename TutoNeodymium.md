Neodymium
=========

Introduction - What is nd?
--------------------------

Neodymiumn (or nd for short) is a `vue-cli` framework for a `webpack` app. The aim of nd is to simplify making a webpack application: in theory, all you have to do is provide nd with a few custom attributes (project name, description), and let it take care of the boilerplate code for you.

In practice, you may need to look at the boilerplate code at some point to understand how your project is built.

This tutorial will take you through the process of installing, developping and running a basic grocery list app with nd.

It will be a simple one-page application, with a list of grocery items. Each item will be made of a checkbox, and a line of text which will be crossed out when the box is checked. Below all items, there will be a text input zone and a button to add more items.

The final app should look like this:

![Screenshot - Final version](https://github.com/soixantecircuits/nd/blob/tuto/docs/FinalScreenshot.png)

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

    $ vue init soixantecircuits/nd my-grocery-list

Vue-init asks you to name the project, add a description, etc; for now you can leave these options to their default values. The most important question is whether or not you want electron support; leave it to "yes".

Next, install dependencies in your `node_modules` folder:

    $ cd my-grocery-list
    $ npm install

Your project is now installed; for now, it only has a showcase app, with some links and a counter component. You can display it with:

    $ npm run dev

![Screenshot - Default app](https://github.com/soixantecircuits/nd/blob/tuto/docs/WelcomeScreenshot.png)


Making the app
--------------

### The nd pipeline

First, we need to understand what goes on under the hood, when the previous screen is displayed. What goes from typing `npm run dev` to displaying "Welcome to neodymium"?

Well, the pipeline is somewhat convoluted, but it goes like this:

* First, `npm run dev` reads the `package.json` objects, looks for the `scripts.dev` string, and runs it, which runs `node build/dev-server.js`

* `dev-server.js` is a complex file; but the gist of it is, it runs a webpack server and an electron client; the server sends `index.html` and `src/main.js` to the client

* `src/main.js` replaces the HTML element with id "app" in `index.html` with the components `src/components/App.vue`

* `src/components/App.vue` is an indirection, which displays the component returned by `src/lib/router.js`; usually this is the Root component in `src/Root.vue`

If you didn't understand everything, don't worry. You only need to remember that the effective entry point of your app is `src/Root.vue`; and indeed, if you open it, you can see the HTML code for the content of the default showcase app, inside the `<template>` tags.

If you don't understand what a `.vue` file is, single-file component [TODO]

### Writing the app

For starters, open `src/Root.vue` and replace the contents of the `<template>` section with the following code (or, alternatively, your own):

```
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
```

Then, replace the contents of the `<script>` section with the following code:

```
'use strict'

export default {
  data() { return {
    items: ["Bread", "Butter", "Milk"],
    next_item: ""
  }},
  methods: {
    add_item() {
      if (this.next_item) {
        this.items.push(this.next_item)
        this.next_item = "";
      }
    }
  }
}
```

This is the standard vue model: data and operations on data are written in the `<script>` section, and the information needed to dibe
Run `npm run dev` again; your app should now look like this:

![Screenshot - First version](https://github.com/soixantecircuits/nd/blob/tuto/docs/IntermediaryScreenshot.png)

### Add component

Most apps are made of several components, to allow developpers to compartimentalize and reuse code.

We will create a `GroceryItem` component, which will include a line of text, and a checkbox that crosses the text out when it's clicked.

Create a new file in the component folder:

    $ cd src/components
    $ touch GroceryItem.vue

And paste the following code into it:

```
<template>
  <div class="grocery-item" :class="{strike: checked}">
    <input type=checkbox v-model="checked"></input>
    {{ name }}
  </div>
</template>

<script>
'use strict'

export default {
  props: ["name"],
  data() { return {
    checked: false
  }}
}
</script>

<style>
  .strike {
    text-decoration: line-through;
  }
</style>
```

To include this component in Root.vue, replace the `{{ item_name }}` line with:

```
<grocery-item :name="item_name" />
```

and replace the beginning of your `<template>` section with:

```
'use strict'

import GroceryItem from './components/GroceryItem'

export default {
  components: {
    GroceryItem
  },

  data() { return {
  ...
```

Run `npm run dev` again; your app should look like this at last:

![Screenshot - Final version](https://github.com/soixantecircuits/nd/blob/tuto/docs/FinalScreenshot.png)


Build and test
--------------

The nd template includes multiple scripts in `package.json`;

To check that your project respects the standard-settings norm, you can run eslint on your files with:

    npm run lint

To build your project into an executable binary file, run:

    npm run build

This will create a build in the `releases` folder.
