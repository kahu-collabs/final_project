var render_vis = require('./../vis/vis')
var ajax = require('./../ajax')

  $("#view-button").click(function(){
    $('#reportform').hide()
    $('#viewform').show()
    $("#viewsubmit").hide()
    $('#communityposts').hide()
    $("#reports").hide()
    $('.report-cards').show()
  })

  $("#community-posts-button").click(function(){
    $('#communityposts').show()
    $('#viewform').hide()
    $('#reportform').hide()
    $('#reports').hide()
  })

  $("#vis-button").click(function(){
    $("#vis").toggle( 'slow' )
  })

  $("#map-button").click(function(){
    $("#vis").hide()
    $("#map").show()
    $("#map-button").hide
  })

  $('#suburbsubmit').submit(function(e){
    ajax.getPosts(event.target[2].value)
    $("#reports").hide()
  })
