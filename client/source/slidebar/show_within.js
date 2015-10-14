var renderIt = require('./handlebars_content')
var getType = require('./../map/get_title')
var renderVis = require('./../vis/vis')
var usersOwn = require('./main_menu')
require('handlebars');


module.exports = function(radius, lat, lng) {
  $.get( "api/v1/nearby", {within: radius, origin: [lat, lng]}, function( data ) {
    $( ".results" ).html( data );
    renderIt(data)
  });
}

function bar_ready() {
  $('#viewform').hide()
  $('#reportform').hide()
  $("#reportsubmit").hide()
  $("#viewsubmit").hide()
  $('#communityposts').hide()
  usersOwn()
}

bar_ready()




function sessionCheck() {
  return $.get("api/v1/session_check")
}

function sideBarMenu(loggedIn) {
  $('#fb-login').hide()
  $("#report-button").click(function() {
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

  $("#view-button").click(function() {
    $('#reportform').hide()
    $('#viewform').show()
    $("#viewsubmit").hide()
    $('#communityposts').hide()
  })

  $("#community-posts-button").click(function() {
    $('#communityposts').show()
    $('#viewform').hide()
    $('#reportform').hide()
  })
}

$(document).ready(function() {
  sessionCheck()
  .then(function(data){
    return data.logged_in
  })
  .then(sideBarMenu)
})

$("#vis-button").click(function() {
  $("#vis").html('')
  $("#vis").show()
  $("#vis-button").hide
  renderVis()
})





