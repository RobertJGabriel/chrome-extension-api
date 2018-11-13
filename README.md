# chrome-extension-api [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> An API for getting webstore information on a chrome extension by the id. Get amoutn of users.

## Installation

```sh
$ npm install --save chrome-extension-api
```

## Usage

```js
const chromeExtensionApi = require('chrome-extension-api');

chromeExtensionApi.get('ahmapmilbkfamljbpgphfndeemhnajme');
/*
  {
    message: 'success',
    userCount: '9,450', String
    extra: {object}
  }
*/
```

### Success

```js
  {
    message: 'success',
    userCount: '9,450',
    extra: {object}
  }
```

### Not Found

```js
  {
    message: 'success',
    userCount: '0',
    extra: 'no chrome extension found'
  }
```

### Error

```js
  {
    message: 'error',
    userCount: '0',
    extra: object
  }
```


## License

Apache-2.0 © [Robert James Gabriel](https://www.robertgabriel.ninja)


[npm-image]: https://badge.fury.io/js/chrome-extension-api.svg
[npm-url]: https://npmjs.org/package/chrome-extension-api
[travis-image]: https://travis-ci.org/RobertJGabriel/chrome-extension-api.svg?branch=master
[travis-url]: https://travis-ci.org/RobertJGabriel/chrome-extension-api
[daviddm-image]: https://david-dm.org/RobertJGabriel/chrome-extension-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/RobertJGabriel/chrome-extension-api
[coveralls-image]: https://coveralls.io/repos/RobertJGabriel/chrome-extension-api/badge.svg
[coveralls-url]: https://coveralls.io/r/RobertJGabriel/chrome-extension-api
