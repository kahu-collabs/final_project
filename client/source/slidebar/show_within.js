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
  for (i = 0; i < data.length; i++) {
    var x = data[i]
    $("#sidr").html(
      "<h1>" + x.date + "</h1><p>" + get_type[x.category_type] + "</p><p>" + x.description + "</p>"
      )
  }
}


var get_type = {
  1:"Assault/harrassment",
  2:"Vandalism or criminal damage",
  3:"Car theft",
  4:"Car break-in",
  5:"House burglary",
  6:"Other"
}


function sessionCheck(){
    return $.get("api/v1/session_check")
  }

function sideBarMenu(loggedIn){
  $('#fb-login').hide()
  $("#report-button").click(function(){
    if (loggedIn) {
      $('#reportform').show()
      $('#fb-login').hide()

    } else{
      $('#reportform').hide()
      $('#fb-login').show()
    }

    $('#viewform').hide()  
    $("#reportsubmit").hide()
  })

  $("#view-button").click(function(){
    $('#reportform').hide()
    $('#viewform').show()
    $("#viewsubmit").hide()
  })
}

$(document).ready(function(){
  sessionCheck()
  .then(function(data){
    return data.logged_in
    })
  .then(sideBarMenu)
})  
