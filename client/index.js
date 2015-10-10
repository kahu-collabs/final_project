var makeObjects = require('./source/map/make_objects')
var filter = require('./source/map/filter')


L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';
var map = L.mapbox.map(document.getElementById('map'), 'mapbox.streets')
  .addControl(L.mapbox.geocoderControl('mapbox.places'))
  .setView([-41.29, 174.78], 13);
var myLayer = L.mapbox.featureLayer().addTo(map);
var latlng = []


map.on('click', function(e) {
  latlng = [e.latlng.lng, e.latlng.lat]
  $.featherlight($('#example'));
});

function dat_get(){
	$.get( "api/v1/reports", function( data ) {
		  $( ".result" ).html( data );
		  var renderObjects = makeObjects(data)
		  render(renderObjects);
      filter(map, myLayer)
	});
}

function render(data){
  myLayer.setGeoJSON(data);
}

function submitCrime(input){
  console.log("thing")
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

$('#example').submit(function(event){
	event.preventDefault();
	var to_db = {category_type: parseInt(event.target[0].value), description: event.target[1].value, date: event.target[2].value, suburb_id: parseInt(event.target[3].value), happened_before: event.target[6].checked, location: latlng.join() };
  console.log(to_db)
  submitCrime(to_db);
	dat_get();
})

