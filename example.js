'use strict'
const disabled = require('.')

disabled()
  .then(isDisabled => {
    console.log(isDisabled)
  })
  .catch(err => {
    console.log(err)
  })
