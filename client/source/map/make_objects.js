var getCrime = require('./getCrimeObject')

module.exports = function(rawData) {
  var geoJson = []
  for(i = 0; i < rawData.length; i++){
    var item = rawData[i]
    var id = item.id
    var type = item.category_types_id
    if(type == 1){
      var title = "Joker Gassing",
        img = "assets/joker_pin.png"
      } else if(type == 2){
        var title = "Mugging",
          img = "assets/batpin.png"
      } else if(type == 3){
        var title = "Home invasion",
          img = "assets/home_invasion.png"
      } else {
        var title = "Car Theft",
          img = "assets/car_thieft.png"
      }

    x = (item.category_types_id) - 1

    var crime = getCrime(item.id, title, img, item.location, item.description)
    geoJson.push(crime)
  }
  return geoJson
}