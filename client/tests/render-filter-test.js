var test = require('tape')
var renderFilter = require('../source/map/render-filter')

var expected = "Vandalism or criminal damage"

var fakeData = 'Vandalism or criminal damage'

test('render filter returns expected out put ', function(t) {

  renderFilter(fakeData, 'body')

  var actual = document.querySelector('div > input').id

  t.equal(expected, actual, 'Pass!')
  t.end()

})