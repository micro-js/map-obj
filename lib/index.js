/**
 * Imports
 */

var forEach = require('foreach')

/**
 * Object map utility
 */

function omap (obj, fn, ctx) {
  var result = {}

  forEach(obj, function (val, key) {
    result[key] = fn.call(ctx, val, key)
  })

  return result
}

/**
 * Exports
 */

module.exports = omap
