# Using Next.js v9+ with Tailwind v1+ and PurgeCSS

- Next.js is amazing
- Tailwind is cool

PurgeCSS allows us to remove any unused Tailwind classes to keep our bundles _tiny_.

> Change your CSS from 90kb to 3kb!

## The Overall Strategy

1. Tell Next.js to use PostCSS
2. PostCSS will process Tailwind and PurgeCSS

## TLDR: How to Add Tailwind and PurgeCSS to Next.js

1. Install PurgeCSS: `yarn add @zeit/next-css --dev`
2. Configure Next.js on how to use CSS files + PurgeCSS: `next.config.js`
3. Install Tailwind: `yarn add tailwindcss autoprefixer --dev`
4. Install Tailwind PurgeCSS package: `yarn add @fullhuman/postcss-purgecss --dev`
5. Configure PurgeCSS through PostCSS: `postcss.config.js`
6. Create and import `main.css` file
7. `yarn dev`!!!

This will only use PurgeCSS in production.

## Configure Next.js (next.config.js)

We are going to tell Next.js to process CSS files using [next-css](https://github.com/zeit/next-plugins/tree/master/packages/next-css).

By using this package, Next.js will be using PostCSS to handle processing CSS files. The next step will be to configure PostCSS.

```javascript
// next.config.js

const withCss = require('@zeit/next-css');

module.exports = withCss();
```

## Configure PostCSS (postcss.config.js)

PostCSS is where we will process Tailwind, Autoprefixer, and PurgeCSS. This is pulled directly from the Tailwind docs on how to use Tailwind + PurgeCSS with PostCSS: [https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss](https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss)

```javascript
// postcss.config.js

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./pages/**/*.js', './components/**/*.js'],

  // make sure css reset isnt removed on html and body
  whitelist: ['html', 'body'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
};
```

## Creating and Importing a Stylesheet

We are going to create a `css` file and import it into `index.js`

```css
/* assets/styles/main.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now we can import this file into the main page of our Next.js app: `index.js`

```javascript
// pages/index.js

import '../assets/styles/main.css';
```

## Trying it Out

This configuration only works in production mode because using PurgeCSS in development can slow down your build times.

To try this out, go into `postcss.config.js` and add `purgecss` directly to the plugins:

```javascript
// postcss.config.js

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss
    // ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
};
```

Now we can see the difference! Open Chrome DevTools in the Network tab in the CSS section

> 90kb vs 3kb!

### BEFORE PurgeCSS

![](https://i.imgur.com/k5HTo2W.png)

### AFTER PurgeCSS

![](https://i.imgur.com/DA9gYiZ.png)
