require('handlebars');
var render_it = require('./handlebars_content')
var get_type = require('./../map/get_title')
<<<<<<< HEAD
var render_vis = require('./../vis/vis')
=======
var users_own = require('./main_menu')
>>>>>>> d5e6f3042b6c3e1c73e0ba7c65df792753e53666

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
<<<<<<< HEAD
  // $("#map-button").hide()
=======
  $('#communityposts').hide()

  users_own()
>>>>>>> d5e6f3042b6c3e1c73e0ba7c65df792753e53666
}

bar_ready()

function make_reports(data){

  console.log(data)
  render_it(data)

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

}

$(document).ready(function(){
  sessionCheck()
  .then(function(data){
    return data.logged_in
    })
  .then(sideBarMenu)
})


  $("#vis-button").click(function(){
    $("#vis").html('')
    $("#map").hide()
    $("#vis").show()
    $("#vis-button").hide
    render_vis()
  })

  $("#map-button").click(function(){
    console.log("map")
    $("#vis").hide()
    $("#map").show()
    $("#map-button").hide
  })

