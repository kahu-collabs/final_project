require('handlebars');
var render_it = require('./handlebars_content')
var get_type = require('./../map/get_title')

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
  $('#communityposts').hide()
}

bar_ready()

function make_reports(data){

  console.log(data)
  render_it(data)
}





$("#report-button").click(function(){
  $('#viewform').hide()
  $('#reportform').show()
  $("#reportsubmit").hide()
  $('#communityposts').hide()
})

$("#view-button").click(function(){
  $('#reportform').hide()
  $('#viewform').show()
  $("#viewsubmit").hide()
  $('#communityposts').hide()
})

$("#community-posts-button").click(function(){
  $('#communityposts').show()
  $('#viewform').hide()
  $('#reportform').hide()
})


