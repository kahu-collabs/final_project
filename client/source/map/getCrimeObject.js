var clone = require('lodash.clone')

var prototype = {
   "type": "Feature",
   "geometry": {
     "type": "Point",
   },
   "properties": {
    "icon": {
     "iconSize": [50, 50],
     "iconAnchor": [25, 25],
     "popupAnchor": [0, -25],
     "className": "dot"
    }
  }
}





module.exports = function(id, title, iconURL, coord, desc) {
    var crimeObj = clone(prototype, true)



    var to_num = coord.split(",")
    var location = []
    location.push(+to_num[0])
    location.push(+to_num[1])


    crimeObj.geometry.coordinates = location
    crimeObj.properties.id = id
    crimeObj.properties.title = title
    crimeObj.properties.description = desc
    crimeObj.properties.icon.iconUrl = iconURL
    return crimeObj
}


