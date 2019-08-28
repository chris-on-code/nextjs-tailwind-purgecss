# Using Next.js v9+ with Tailwind v1+ and PurgeCSS

- Next.js is amazing
- Tailwind is cool

PurgeCSS allows us to remove any unused Tailwind classes to keep our bundles _tiny_.

## The Overall Strategy

1. Tell Next.js to use PostCSS
2. PostCSS will process Tailwind and PurgeCSS

## How to Add Tailwind and PurgeCSS to Next.js

1. Install Tailwind: `yarn add tailwind autoprefixer`
2. Install PurgeCSS: `yarn add @zeit/next-css next-purgecss`
3. Configure Next.js on how to use CSS files + PurgeCSS: `next.config.js`
4. Install Tailwind PurgeCSS packages: `yarn add @fullhuman/postcss-purgecss`
5. Configure PurgeCSS: `postcss.config.js`
6. Create and import `main.css` file
7. `yarn dev`!!!
