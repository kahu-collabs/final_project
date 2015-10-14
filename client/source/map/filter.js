var update = require("./update-filter")
var renderFilter = require("./render-filter")
var each = require("lodash.foreach")

module.exports = function(map, layer) {
  var filters = document.getElementById("filters");
  var typesObj = {}
  var features = layer.getGeoJSON();
  var checkboxes = []
  filters.innerHTML = "";

  features.forEach(function(feature) {
    typesObj[feature.properties.title] = true
  })

  each(typesObj, function(key, type) {
    var checkbox = renderFilter(type)
    checkboxes.push(checkbox)
  })

  each(typesObj, function(key, type) {
    var checkbox = document.getElementById(type)
    checkbox.addEventListener("change", update(layer, checkboxes))
  })
}
