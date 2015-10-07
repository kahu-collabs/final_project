console.log('test')
var React = require('react')  //main
console.log('test')
var BatmapModal = require('./source/batmap-modal')
console.log('test')
React.render(<BatmapModal />, document.querySelector('#batmap-modal'))


L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';
var map = L.mapbox.map(document.getElementById('map'), 'mapbox.streets')
    .setView([-41.29, 174.78], 13);

var latlng = []

var click = document.getElementById('click')
map.on('click', function(e) {
	latlng = [e.latlng.lng, e.latlng.lat]
	console.log(latlng)
	$.featherlight($('#example'));
	});



$('#example').submit(function(event){
	event.preventDefault();
	var type = testType(event.target[0].value);


	var to_db = {category_type: type, description: event.target[1].value, happened_before: event.target[2].checked, location: latlng.join() };

	submitCrime(to_db);


})


function testType(type){
	if (type == "Joker Gassing"){
		return 1
	}
	else if (type == "Mugging"){
		return 2
	}
	else if (type == "Home Invasion"){
		return 3
	}
	else {return 4}
}

function submitCrime(input){
	var data = input.location

	$.ajax({
	  type: "POST",
	  url: "api/v1/reports",
	  data: input,
	  success: dropPin(data),
	  dataType: "json"
	});

	// $post(
	// 	url: "./api/v1/reports",
	// 	data: input,
	// 	success: dropPin(data),
	// 	)
}



function dropPin(coord){
	var y = L.mapbox.featureLayer({
	    // this feature is in the GeoJSON format: see geojson.org
	    // for the full specification
	    // need to make this object relate to the object in the db somehow???
	    type: 'Feature',
	    geometry: {
	        type: 'Point',
	        // coordinates here are in longitude, latitude order because
	        // x, y is the standard for GeoJSON and many formats
	        coordinates: latlng
	    },
	    properties: {
	        title: 'asdf',
	        description: 'asdf',
	        'marker-size': 'large',
	        'marker-color': '#BE9A6B',
	        'marker-symbol': 'cafe'
	    }
	}).addTo(map);
	console.log(y)

}