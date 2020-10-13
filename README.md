# rollup-plugin-workbox-build-replace

[![Published on npm](https://img.shields.io/npm/v/rollup-plugin-workbox-build-replace.svg)](https://www.npmjs.com/package/rollup-plugin-workbox-build-replace)

Rollup plugin to apply workbox-build in replace mode

## Usage
This package provides a rollup plugin that generates a list of assets to precache, and inject it into your sourcecode.

### `replaceManifest`

Import the `replaceManifest` plugin from `rollup-plugin-workbox-build-replace`, and add it to your `plugins` array in your `rollup.config.js`. The plugin takes a workbox config object.

You can find a detailed list of supported properties for the workbox config object [here](https://developers.google.com/web/tools/workbox/modules/workbox-build#getManifest).

```js
const { replaceManifest } = require('rollup-plugin-workbox-build-replace');
 
module.exports {
  input: 'main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    replaceManifest({globDirectory: 'demo/dist/'})
  ],
};
```

You can also `require` your `workbox-config.js` file and pass it to the plugin.

```js
const { generateSW } = require('rollup-plugin-workbox-build-replace');

const workboxConfig = require('./workbox-config.js')

module.exports {
  // ...
  plugins: [
    replaceManifest(workboxConfig)
  ],
};
```