'use strict'
const exec = require('child_process').exec

module.exports = function (cb) {
  exec('defaults read com.apple.screencapture disable-shadow', (err, stdout, stderr) => {
    if (typeof cb === 'function') {
      cb(err || stderr, Boolean(Number(stdout)))
    }
  })
}

