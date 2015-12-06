/**
 * Modules
 */

var foreach = require('@micro-js/foreach')

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

function map (fn, obj, ctx) {
  var result = {}

  foreach(function (val, key) {
    result[key] = fn.call(ctx, val, key)
  }, obj)

  return result
}
