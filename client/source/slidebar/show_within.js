require('handlebars');
var render_it = require('./handlebars_content')
var get_type = require('./../map/get_title')
var users_own = require('./main_menu')


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

  users_own()

}

bar_ready()

// function make_reports(data){ // not being called? but not sure
//   render_it(data)
// }

function sessionCheck(){
    return $.get("api/v1/session_check")
  }

function sideBarMenu(loggedIn){
  $('#fb-login').hide()
  $("#report-button").click(function(){
    if (loggedIn) {
      $('#reportform').show()
      $('#fb-login').hide()
    } else {
      $('#reportform').hide()
      $('#fb-login').show()
    }

    $('#viewform').hide()
    $("#reportsubmit").hide()
    $('#communityposts').hide()
    $('#example-template').hide()
  })

}

$(document).ready(function(){
  sessionCheck()
  .then(function(data){
    return data.logged_in
    })
  .then(sideBarMenu)
})



