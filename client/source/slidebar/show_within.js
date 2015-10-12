require('handlebars');
var render_it = require('./handlebars_content')

module.exports = function (radius, lat, lng){
  $.get( "api/v1/nearby",  {within: radius, origin: [lat, lng]}, function( data ) {
      $( ".results" ).html( data );
  make_reports(data)
  });
}

function bar_ready(){
  $('#viewform').hide()
  $('#reportform').hide()
  $("#reportsubmit").hide()
  $("#viewsubmit").hide()
}

bar_ready()

function make_reports(data){
  console.log(data)
  render_it(data)
}


var get_type = {
  1:"Assault/harrassment",
  2:"Vandalism or criminal damage",
  3:"Car theft",
  4:"Car break-in",
  5:"House burglary",
  6:"Other"
}


$("#report-button").click(function(){
  $('#viewform').hide()
  $('#reportform').show()
  $("#reportsubmit").hide()
})

$("#view-button").click(function(){
  $('#reportform').hide()
  $('#viewform').show()
  $("#viewsubmit").hide()
})


