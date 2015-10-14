require('handlebars');
require('./source/slidebar/button_handlers')

var render_it = require('./source/slidebar/handlebars_content')
var makeObjects = require('./source/map/make_objects')
var filter = require('./source/map/filter')
var dat_nearby = require('./source/slidebar/show_within')
var suburb = require('./source/map/geocode')
var ajax = require('./source/ajax')
var users_own = require('./source/slidebar/main_menu')


L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';


var map = L.mapbox.map(document.getElementById('map'), 'mapbox.streets')
  .addControl(L.mapbox.geocoderControl('mapbox.places'))
  .setView([-41.29, 174.78], 13);
var myLayer = L.mapbox.featureLayer().addTo(map)
var lat = 0
var lng = 0

var user_marker = L.marker([lat, lng]).addTo(map)
console.log(user_marker);



map.on('click', function(e) {
  lat = e.latlng.lat
  lng = e.latlng.lng
  user_marker.setLatLng(e.latlng)
  $(".submit_button").show()
});

$(document).ready(function() {
  ajax.dat_get(map, myLayer)
})

$('#reportform').submit(function(event) {
  event.preventDefault();
  var to_db = {category_type: parseInt(event.target[0].value), description: event.target[1].value, date: event.target[2].value, suburb_id: parseInt(event.target[3].value), happened_before: event.target[4].checked, lat: lat, lng: lng };
  ajax.submitCrime(to_db, map, myLayer);
	ajax.dat_get(map, myLayer);
  $('#reportform').hide()
  user_marker.setLatLng([0,0])
  users_own()
})

$('#viewform').submit(function(event){
  event.preventDefault();
  radius = event.target[0].value
  dat_nearby(radius, lat, lng)
})

$('#communityposts').submit(function(event){
  event.preventDefault()
  var to_db = {suburb_id: parseInt(event.target[0].value, 10), body: event.target[1].value}
  ajax.submitPost(to_db)
  event.target[1].value = ''
  ajax.getPosts(event.target[0].value)
})
