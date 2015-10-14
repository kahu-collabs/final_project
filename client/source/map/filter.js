var update = require('./update-filter')
var renderFilter = require('./render-filter')
var each = require('lodash.foreach')

module.exports = function (map, layer) {

  var filters = document.getElementById('filters');
  filters.innerHTML = "";

  var typesObj = {}, types = [];
  var features = layer.getGeoJSON();
  var checkboxes = []

  features.forEach(function(feature){
    typesObj[feature.properties.title] = true
  })

  each(typesObj, function (key, type) {
    var checkbox = renderFilter(type, '#filters')
    checkboxes.push(checkbox)

  })

  each(typesObj, function (key, type) {
    var checkbox = document.getElementById(type)
    checkbox.addEventListener('change', update(layer, checkboxes))
  })


}
