const { exec } = require('child_process')

module.exports = () =>
  new Promise((resolve, reject) => {
    exec(
      'defaults read com.apple.screencapture disable-shadow',
      (err, stdout) => {
        if (err) {
          if (
            err.message &&
            err.message.includes(
              'The domain/default pair of (com.apple.screencapture, disable-shadow) does not exist'
            )
          ) {
            return resolve(false)
          }
          return reject(err)
        }
        resolve(Boolean(Number(stdout)))
      }
    )
  })
