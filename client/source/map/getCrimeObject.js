var clone = require('lodash.clone')

var prototype = {
   "type": "Feature",
   "geometry": {
     "type": "Point",
   },
   "properties": {
    }
  }





module.exports = function(id, title, marker_colour, coord, desc) {
    var crimeObj = clone(prototype, true)



    var to_num = coord.split(",")
    var location = []
    location.push(+to_num[0])
    location.push(+to_num[1])


    crimeObj.geometry.coordinates = location
    crimeObj.properties.id = id
    crimeObj.properties.title = title
    crimeObj.properties.description = desc
    crimeObj.properties.fillColor = marker_colour
    return crimeObj
}

