'use strict'
const disabled = require('./')

disabled((err, isDisabled) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(isDisabled)
})
