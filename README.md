# gatsby-plugin-preconnect

Quickly add a `<link rel="preconnect">` tag for every specified domain.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.com/NoriSte/gatsby-plugin-preconnect.svg?branch=master)](https://travis-ci.com/NoriSte/gatsby-plugin-preconnect)
[![Open Source
Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

## Install

`npm install --save gatsby-plugin-preconnect`

## What this plugin does

It simply adds a `<link rel="preconnect" href="https://example.com">` to the page.

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-preconnect",
    options: {
      domains: [
        "https://foo.com",
        "https://bar.com"
      ]
    }
  }
]
```

## Contributing

PR or issues are welcome 👋

#### Notes

- if you want to work on the plugin sources, remember that you need to `npm run build` on the root
  then, in every test project, you need to run `npm run plugin:link` to locally use it

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/NoriSte"><img src="https://avatars0.githubusercontent.com/u/173663?v=4" width="100px;" alt="Stefano Magni"/><br /><sub><b>Stefano Magni</b></sub></a><br /><a href="https://github.com/NoriSte/gatsby-plugin-preconnect/commits?author=NoriSte" title="Code">💻</a> <a href="https://github.com/NoriSte/gatsby-plugin-preconnect/commits?author=NoriSte" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
