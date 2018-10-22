# jsincss

An event-driven virtual stylesheet manager

## About

Jsincss is a plugin that allows you to use JavaScript to template the creation of CSS stylesheets at runtime based on events happening in the browser. This allows you to use JavaScript to easily extend CSS to include new features.

This plugin is a JavaScript module that loads [JS-in-CSS stylesheets](https://responsive.style/theory/what-is-a-jic-stylesheet.html), manages the creation of `<style>` tags to output the processed stylesheets, and registers event listeners for reprocessing loaded stylesheets when changes occur in the browser.

## Downloading

You can download jsincss and add it to your codebase manually, or download it with npm:

```bash
npm install jsincss
```

Another option is linking to the module directly from a CDN like unpkg:

```html
<script type=module>
  import jsincss from 'https://unpkg.com/jsincss/index.vanilla.js'
</script>
```

## Importing

You can import the plugin into your own JavaScript modules in a couple of ways.

The first way is using the native [`import` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) in JavaScript. Here you can assign any name you want to the function you are importing, and you only need to provide a path to the plugin's `index.vanilla.js` file:

```js
import jsincss from './index.vanilla.js'
```

You can also use `require()` to load this plugin instead with a bundler like Webpack or Parcel:

```js
const jsincss = require('jsincss')
```

Once you have imported this plugin into your module, you can use the plugin as `jsincss()`

## Using JS-in-CSS Stylesheets

The main goal of this plugin is to let people using a JS-in-CSS workflow load [JIC stylesheets](https://responsive.style/theory/what-is-a-jic-stylesheet.html) inside of a JavaScript module.

The plugin has the following format:

```js
jsincss(stylesheet, selector, events)
```

- `stylesheet` is a JavaScript function that returns a CSS stylesheet as a string
- `selector` is string containing either `'window'` or a CSS selector 
- `events` is an array of events to add event listeners for, quoted as strings: (eg. `['load', resize']`)

The default `selector` is `window`, and the default list of `events` is `['load', 'resize', 'input', 'click', 'reprocess']`.

You can also create and listen for custom events with JavaScript using `new Event()` and `dispatchEvent()` for total control over when jsincss reprocesses styles.

## Example

This example uses the default `selector` and `events` list, and provides the stylesheet inline.

```js
<script type=module>
  import jsincss from 'https://unpkg.com/jsincss/index.vanilla.js'

  jsincss(event => `

    body::before {
      content: '${innerWidth} x ${innerHeight} on ${event.type}';
    }

  `)
</script>
```

It's also possible to write your stylesheets as a separate JavaScript module like this:

```js
export default event => `

  body::before {
    content: '${innerWidth} x ${innerHeight} on ${event.type}';
  }

`
```

And then import both the `jsincss` plugin and the stylesheet into your module and run them like this:

```js
import jsincss from 'https://unpkg.com/jsincss/index.vanilla.js'
import stylesheet from './path/to/stylesheet.js'

jsincss(stylesheet)
```

## Tools using jsincss

- [Qaffeine](https://github.com/tomhodgins/qaffeine)
- [Deqaf](https://github.com/tomhodgins/deqaf)

## Compatible JS-in-CSS Plugins

- [jsincss-ancestor-selector](https://github.com/tomhodgins/jsincss-ancestor-selector)
- [jsincss-aspect-ratio](https://github.com/tomhodgins/jsincss-aspect-ratio)
- [jsincss-auto-expand](https://github.com/tomhodgins/jsincss-auto-expand)
- [jsincss-closest-selector](https://github.com/tomhodgins/jsincss-closest-selector)
- [jsincss-compare-attribute](https://github.com/tomhodgins/jsincss-compare-attribute)
- [jsincss-custom-specificity](https://github.com/tomhodgins/jsincss-custom-specificity)
- [jsincss-days](https://github.com/tomhodgins/jsincss-days)
- [jsincss-elder-selector](https://github.com/tomhodgins/jsincss-elder-selector)
- [jsincss-element-query](https://github.com/tomhodgins/jsincss-element-query)
- [jsincss-element-units](https://github.com/tomhodgins/jsincss-element-units)
- [jsincss-first-selector](https://github.com/tomhodgins/jsincss-first-selector)
- [jsincss-frontend-variables](https://github.com/tomhodgins/jsincss-frontend-variables)
- [jsincss-has-selector](https://github.com/tomhodgins/jsincss-has-selector)
- [jsincss-last-selector](https://github.com/tomhodgins/jsincss-last-selector)
- [jsincss-overflow](https://github.com/tomhodgins/jsincss-overflow)
- [jsincss-parent-selector](https://github.com/tomhodgins/jsincss-parent-selector)
- [jsincss-previous-selector](https://github.com/tomhodgins/jsincss-previous-selector)
- [jsincss-protocol-sniffer](https://github.com/tomhodgins/jsincss-protocol-sniffer)
- [jsincss-regex-match](https://github.com/tomhodgins/jsincss-regex-match)
- [jsincss-scoped-eval](https://github.com/tomhodgins/jsincss-scoped-eval)
- [jsincss-string-match](https://github.com/tomhodgins/jsincss-string-match)
- [jsincss-tag-count](https://github.com/tomhodgins/jsincss-tag-count)
- [jsincss-viewport](https://github.com/tomhodgins/jsincss-viewport)
- [jsincss-xpath-selector](https://github.com/tomhodgins/jsincss-xpath-selector)
- [css-polyfill-patterns](https://github.com/tomhodgins/css-polyfill-patterns)