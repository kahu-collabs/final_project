require('handlebars');

var makeObjects = require('./source/map/make_objects')
var filter = require('./source/map/filter')
var dat_nearby = require('./source/slidebar/show_within')


L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';
var map = L.mapbox.map(document.getElementById('map'), 'mapbox.streets')
  .addControl(L.mapbox.geocoderControl('mapbox.places'))
  .setView([-41.29, 174.78], 13);
var myLayer = L.mapbox.featureLayer().addTo(map);
var lat = 0
var lng = 0


map.on('click', function(e) {
  lat = e.latlng.lat
  lng = e.latlng.lng
  $("#submit").show()
});



function drop_pin_view_events(){}

function dat_get(){
	$.get( "api/v1/reports", function( data ) {
		  $( ".result" ).html( data );
		  var renderObjects = makeObjects(data)
		  render(renderObjects);
      filter(map, myLayer)
	});
}

function render(data){
  myLayer.on('layeradd', function(e){
    var marker = e.layer,
        feature = marker.feature;

    var popupContent = '<p>' + feature.properties.date +'<p>' + feature.properties.description + '</p>';

        marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 320
    });
  })
  myLayer.setGeoJSON(data);
}

function submitCrime(input){


  $.ajax({
    type: "POST",
    url: "api/v1/reports",
    data: input,
    success: dat_get(),
    dataType: "json"
  });
}


$(document).ready(function(){
    dat_get()

})

$('#reportform').submit(function(event){
  event.preventDefault();
  console.log("submitting")
	var to_db = {category_type: parseInt(event.target[0].value), description: event.target[1].value, date: event.target[2].value, suburb_id: parseInt(event.target[3].value), happened_before: event.target[6].checked, lat: lat, lng: lng };
  console.log(to_db)
  submitCrime(to_db);
	dat_get();
})

$('#viewform').submit(function(event){
  event.preventDefault();
  radius = event.target[0].value
  console.log(radius, lat, lng)
  dat_nearby(radius, lat, lng)
})





