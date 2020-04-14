# gatsby-plugin-preconnect

Quickly add a `<link rel="preconnect" crossorigin>` tag for every specified domain.

[![Build Status](https://travis-ci.com/NoriSte/gatsby-plugin-preconnect.svg?branch=master)](https://travis-ci.com/NoriSte/gatsby-plugin-preconnect)
[![Build Status](https://img.shields.io/badge/build%20cron-weekly-44cc11.svg)](https://travis-ci.com/NoriSte/gatsby-plugin-preconnect)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Open Source
Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) ![npm](https://img.shields.io/npm/dw/gatsby-plugin-preconnect?color=CB3836)

## Install

`npm install --save gatsby-plugin-preconnect`

## What this plugin does

It simply adds a `<link rel="preconnect" href="https://example.com" crossorigin>` to the page (see the
[
Resource Prioritization - Preconnect
guide](https://developers.google.com/web/fundamentals/performance/resource-prioritization?utm_source=lighthouse&utm_medium=unknown#preconnect)).

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-preconnect',
    options: {
      domains: ['https://foo.com', 'https://bar.com'],
    },
  },
]
```

`crossOrigin` is set to `true` by default but it can be customized, below all the available options

```js
plugins: [
  {
    resolve: 'gatsby-plugin-preconnect',
    options: {
      domains: [
        'https://foo.com',
        'https://bar.com',
        { domain: 'https://enablecors.com', crossOrigin: true },
        { domain: 'https://disablecors.com', crossOrigin: false },
        { domain: 'https://corswithanonymous.com', crossOrigin: 'anonymous' },
        { domain: 'https://corswithcreds.com', crossOrigin: 'use-credentials' },
      ],
    },
  },
]
```

All the available values for `crossOrigin` are listed below, every other value makes the plugin throw an error

| Value               | Equivalent value      |
| ------------------- | --------------------- |
| `undefined`         | "anonymous"           |
| `true`              | "anonymous"           |
| `"anonymous"`       | "anonymous"           |
| `"use-credentials"` | "use-credentials"     |
| `false`             | (attribute not added) |

## Contributing

PR or issues are welcome 👋

#### Notes

- if you want to work on the plugin sources, remember that you need to `npm run build` on the root
  then, in every test project, you need to run `npm run plugin:link` to locally use it

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
    <tr>
        <td align="center">
            <a href="https://twitter.com/NoriSte"><img src="https://avatars0.githubusercontent.com/u/173663?v=4" width="100px;" alt="Stefano Magni" />
                <br /><sub><b>Stefano Magni</b></sub></a>
            <br /><a href="https://github.com/NoriSte/gatsby-plugin-preconnect/commits?author=NoriSte" title="Code">💻</a> <a href="https://github.com/NoriSte/gatsby-plugin-preconnect/commits?author=NoriSte" title="Documentation">📖</a> <a href="#review-dugagjin" title="Reviewed Pull Requests">👀</a></td>
        <td align="center">
            <a href="https://dugagjin.lashi.engineer"><img src="https://avatars2.githubusercontent.com/u/16219574?v=4" width="100px;" alt="Dugagjin Lashi" />
                <br /><sub><b>Dugagjin Lashi</b></sub></a>
            <br /><a href="https://github.com/NoriSte/gatsby-plugin-preconnect/commits?author=dugagjin" title="Code">💻</a></td>
            <td align="center"><a href="https://github.com/adonig"><img src="https://avatars2.githubusercontent.com/u/900404?v=4" width="100px;" alt=""/><br /><sub><b>Andreas Donig</b></sub></a><br /><a href="#ideas-adonig" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
