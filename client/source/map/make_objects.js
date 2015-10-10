var getCrime = require('./getCrimeObject')

module.exports = function(rawData) {
  var geoJson = []
  for(i = 0; i < rawData.length; i++){
    var item = rawData[i]
    var id = item.id
    var type = item.category_type
    if(type == 1){
      var title = "Assault/harassment"
      marker_colour = "#6bd2db"
      } else if(type == 2){
        var title = "Vandalism or criminal damage",
        marker_colour = "#0ea7b5"
      } else if(type == 3){
        var title = "Car theft",
          marker_colour = "#0c457d"
      } else if(type == 4){
        var title = "Car break-in",
          marker_colour = "#ffbe4f"
      } else if(type == 5){
        var title = "House burglary",
          marker_colour = "#e8702a"
      } else {
        var title = "Other",
          marker_colour = "#fe6367"
      }

    x = (item.category_type) - 1

    var crime = getCrime(item.id, title, marker_colour, item.location, item.description)
    geoJson.push(crime)
    console.log(crime)
  }
  return geoJson
}
