var update = require('./update-filter')
var renderFilter = require('./render-filter')
var each = require('lodash.foreach')

//this does 4 things
// 1. clears the filters
// 2. gets the crime types from the map
// 3. calls a render filter function for each type
// 4. (separately) adds an event listener to each checkbox



module.exports = function (map, layer) {

  // 1. clears the filters
  var filters = document.getElementById('filters');
  filters.innerHTML = "";

  var typesObj = {}, types = [];
  var features = layer.getGeoJSON();
  var checkboxes = []

  // 2. gets the crime types from the map
  features.forEach(function(feature){
    typesObj[feature.properties.title] = true
  })

  // 3. calls a render filter function for each type
  each(typesObj, function (key, type) {
    var checkbox = renderFilter(type)
    checkboxes.push(checkbox)

  })

  // 4. (separately) adds an event listener to each checkbox
  each(typesObj, function (key, type) {
    var checkbox = document.getElementById(type)
    //each checkbox shouldn't need all checkboxes
    //hint [extension]: use a closure
    //event-listener could be added as the element is rendered (combine with renderFilter)
    checkbox.addEventListener('change', update(layer, checkboxes))
  })


}
