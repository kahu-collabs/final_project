var test = require('tape')
var renderFilter = require('../source/map/render-filter')

var fakeType = 'test-type'



test('render-filter renders a checkbox with a label', function(t) {

  renderFilter(fakeType, 'body')


  t.end()
})
