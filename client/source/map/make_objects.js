var clone = require('lodash.clone')
// make_objects can be re-written and is more readable as a 'typeMap'
var typeMap = require('./type-map')
var crimePrototype = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
  },
  "properties": {}
}

module.exports = function(rawData) {
  return rawData.map(function(item) {
    // if your function returns use a .map rather than creating an array then pushing into it.
    var type = typeMap[item.category_type] || { title: "Other", marker_colour: "#fe6367" }
    var coords = item.location.split(",")
    var crimeObj = clone(crimePrototype)
    crimeObj.geometry.coordinates = [
      +coords[0],
      +coords[1]
    ]
    crimeObj.properties.id = item.id
    crimeObj.properties.title = item.title
    crimeObj.properties.description = item.description
    crimeObj.properties["marker-color"] = item.marker_colour

    return crimeObj
  })

}
