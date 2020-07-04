# Using Next.js v9+ with Tailwind v1+ and PurgeCSS

- Next.js is amazing
- Tailwind is cool

PurgeCSS allows us to remove any unused Tailwind classes to keep our bundles _tiny_.

> Change your CSS from 90kb to 3kb!

- [See this in action on CodeSandbox](https://codesandbox.io/s/github/sevilayha/nextjs-tailwind-purgecss)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/sevilayha/nextjs-tailwind-purgecss)

## Why Make This?

Created this example because all the other examples I found were outdated or not the simplest solutions. This is as simple as we can get it for now. Tailwind may be updated in the future to integrate PurgeCSS. We should update this if that ever happens.

## The Overall Strategy

1. Tell Next.js to use PostCSS
2. PostCSS will process Tailwind and PurgeCSS

## TLDR: How to Add Tailwind and PurgeCSS to Next.js

1. Configure Next.js on how to use CSS files + PurgeCSS: `next.config.js`
2. Install Tailwind: `yarn add tailwindcss autoprefixer --dev`
3. Install Tailwind PurgeCSS package: `yarn add @fullhuman/postcss-purgecss --dev`
4. Configure PurgeCSS through PostCSS: `postcss.config.js`
5. Create and import `main.css` file
6. `yarn dev`!!!

This will only use PurgeCSS in production.

## Configure PostCSS (postcss.config.js)

PostCSS is where we will process Tailwind, Autoprefixer, and PurgeCSS. This is pulled directly from the Tailwind docs on how to use Tailwind + PurgeCSS with PostCSS: [https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss](https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss)

```javascript
// postcss.config.js

const purgecss = ['@fullhuman/postcss-purgecss', {
  // Specify the paths to all of the template files in your project
  content: ['./pages/**/*.js', './components/**/*.js'],

  // make sure css reset isnt removed on html and body
  whitelist: ['html', 'body'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}];

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
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
    'tailwindcss',
    'autoprefixer',
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
