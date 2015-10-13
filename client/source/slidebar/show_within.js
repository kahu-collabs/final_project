require('handlebars');
var render_it = require('./handlebars_content')
var get_type = require('./../map/get_title')

var render_vis = require('./../vis/vis')

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

//when is this called? in document.ready? index.js?
bar_ready()

function make_reports(data){
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


//keep document ready calls in index.js
$(document).ready(function(){

  //PROMISES !!!
  sessionCheck()
  .then(function(data){
    return data.logged_in
    })
  .then(sideBarMenu)
})

//keep event handlers in own file
  $("#vis-button").click(function(){
    $("#vis").html('')
    $("#map").hide()
    $("#vis").show()
    $("#vis-button").hide
    render_vis()
  })

  $("#map-button").click(function(){
    $("#vis").hide()
    $("#map").show()
    $("#map-button").hide
  })
