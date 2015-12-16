/**
 * Modules
 */

var forEach = require('@f/foreach')

/**
 * Expose mapObj
 */

module.exports = map['default'] = map


/**
 * Map obj
 * @param  {Function} fn  map
 * @param  {Object}   obj object over which to map
 * @param  {Object}   ctx context used to map call
 * @return {Object}
 */

function map (fn, obj) {
  var result = {}
  var self = this

  forEach(function (val, key) {
    result[key] = fn.call(self, val, key)
  }, obj)

  return result
}
