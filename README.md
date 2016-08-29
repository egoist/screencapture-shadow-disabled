# screencapture-shadow-disabled 

[![NPM version](https://img.shields.io/npm/v/screencapture-shadow-disabled.svg?style=flat-square)](https://npmjs.com/package/screencapture-shadow-disabled) [![NPM downloads](https://img.shields.io/npm/dm/screencapture-shadow-disabled.svg?style=flat-square)](https://npmjs.com/package/screencapture-shadow-disabled) [![Build Status](https://img.shields.io/circleci/project/egoist/screencapture-shadow-disabled/master.svg?style=flat-square)](https://circleci.com/gh/egoist/screencapture-shadow-disabled)

The shadow of screencapture on macOS can be disabled, and you may want to know whether it's disabled currently.

## Install

```bash
$ npm install --save screencapture-shadow-disabled
```

## Usage

```js
const check = require('screencapture-shadow-disabled')

check((err, disabled) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(disabled) //=> false
})
```

## Related

- [toggle-screencapture-shadow](https://github.com/egoist/toggle-screencapture-shadow)
- [toggle-screencapture-shadow-cli](https://github.com/egoist/toggle-screencapture-shadow-cli)

## License

MIT © [EGOIST](https://github.com/egoist)
