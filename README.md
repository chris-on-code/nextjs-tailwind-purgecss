# Using Next.js v9+ with Tailwind v1+ and PurgeCSS

- Next.js is amazing
- Tailwind is cool

PurgeCSS allows us to remove any unused Tailwind classes to keep our bundles _tiny_.

> Change your CSS from 90kb to 3kb!

## The Overall Strategy

1. Tell Next.js to use PostCSS
2. PostCSS will process Tailwind and PurgeCSS

## How to Add Tailwind and PurgeCSS to Next.js

1. Install Tailwind: `yarn add tailwindcss autoprefixer --dev`
2. Install PurgeCSS: `yarn add @zeit/next-css --dev`
3. Configure Next.js on how to use CSS files + PurgeCSS: `next.config.js`
4. Install Tailwind PurgeCSS package: `yarn add @fullhuman/postcss-purgecss --dev`
5. Configure PurgeCSS: `postcss.config.js`
6. Create and import `main.css` file
7. `yarn dev`!!!

This will only PurgeCSS in production.

### next.config.js

```javascript
const withCss = require('@zeit/next-css');

module.exports = withCss();
```

### postcss.config.js

```javascript
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./pages/**/*.js', './components/**/*.js'],

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

### assets/styles/main.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
