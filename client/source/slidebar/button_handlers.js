var render_vis = require('./../vis/vis')
var ajax = require('./../ajax')

  $("#view-button").click(function(){
    $('#reportform').hide()
    $('#viewform').show()
    $("#viewsubmit").hide()
    $('#communityposts').hide()
    $('.report-cards').show()
  })

  $("#community-posts-button").click(function(){
    $('#communityposts').show()
    $('#viewform').hide()
    $('#reportform').hide()
    $('.report-cards').hide()
  })

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

  $('suburbsubmit').submit(function(e){
    ajax.getPosts(event.target[0].value)
    // still getting something odd here!
  })
