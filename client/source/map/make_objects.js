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
  // console.log(rawData)
  return rawData.map(function(item) {
    // console.log(item)
    // if your function returns use a .map rather than creating an array then pushing into it.
    var category = parseInt(item.category_type)
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
    // console.log(crimeObj)
    return crimeObj
  })
}


