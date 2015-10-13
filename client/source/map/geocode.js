module.exports=function(lat, lng){
  var obj = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat +"," + lng
  $.get(obj, successFunction, "json")
}





function successFunction(data) {
  var sub = data["results"][0]["address_components"][2]["short_name"]
  return sub_ids[sub]
}

var sub_ids = {"Aro Valley": 1 ,
 "Berhampore": 2 ,
 "Breaker Bay": 3 ,
 "Brooklyn": 4 ,
 "Churton Park": 5 ,
 "Crofton Downs": 6 ,
 "Glenside": 7 ,
 "Grenada North": 8 ,
 "Happy Valley": 9 ,
 "Hataitai": 10 ,
 "Horokiwi": 11 ,
 "Houghton Bay": 12 ,
 "Island Bay": 13 ,
 "Johnsonville": 14 ,
 "Kaiwharawhara": 15 ,
 "Kelburn": 16 ,
 "Khandallah":17 ,
 "Kilbirnie": 18 ,
 "Linden": 19 ,
 "Lyall Bay": 20 ,
 "Makara": 21 ,
 "Miramar": 22 ,
 "Mornington": 23 ,
 "Mount Cook": 24 ,
 "Mount Victoria": 25 ,
 "Newlands": 26 ,
 "Ngaio": 27 ,
 "Ngauranga": 28 ,
 "Ohariu": 29 ,
 "Oriental Bay": 30 ,
 "Owhiro Bay": 31 ,
 "Paparangi": 32 ,
 "Redwood": 33 ,
 "Rongotai": 34 ,
 "Roseneath": 35 ,
 "Seatoun": 36 ,
 "Shelly Bay": 37 ,
 "Strathmore Park": 38 ,
 "Tawa": 39 ,
 "Te Aro": 40 ,
 "Vogeltown": 41 ,
 "Wadestown": 42 ,
 "Wellington Central": 43 ,
 "Wilton": 44 ,
 "Worser Bay": 45 }
