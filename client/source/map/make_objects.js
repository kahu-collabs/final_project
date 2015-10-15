var clone = require("lodash.clone")
var typeMap = require("./type-map")
var crimePrototype = {
  "type": "Feature",
  "geometry": {
    "type": "Point"
  },
  "properties": {}
}

module.exports = function(rawData) {
  return rawData.map(function(item) {
    var category = parseInt(item.category_type, 10)
    var type = typeMap[category]
    var crimeObj = clone(crimePrototype, true)
    crimeObj.geometry.coordinates = [
      item.lng,
      item.lat
    ]
    crimeObj.properties.id = item.id
    crimeObj.properties.date = item.date
    crimeObj.properties.title = type.title
    crimeObj.properties.description = item.description
    crimeObj.properties["marker-color"] = type.marker_colour
    crimeObj.properties["marker-size"] = "small"
    return crimeObj
  })
}


