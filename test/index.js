/**
 * Imports
 */

var omap = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var obj = {a: 1}

  t.equal(omap(obj, add1).a, 2)
  t.equal(obj.a, 1)
  t.end()
})

/**
 * Helpers
 */

function add1 (n) {
  return n + 1
}
