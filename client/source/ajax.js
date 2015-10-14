var makeObjects = require('./map/make_objects')
var render = require('./map/render')
var filter = require('./map/filter')


function dat_get(map, myLayer) {
  $.get( "api/v1/reports", function( data ) {
    var renderObjects = makeObjects(data)
    $( ".result" ).html( data );
    render.renderPins(renderObjects, myLayer);
    filter(map, myLayer)
  });
}

function submitCrime(input, map, myLayer) {
  $.ajax({
    type: "POST",
    url: "api/v1/reports",
    data: input,
    success: dat_get(map, myLayer),
    dataType: "json"
  });
}

function submitPost(input) {
  $.ajax({
    type: "POST",
    url: "api/v1/messages",
    data: input,
    success: console.log('posted message'),
    dataType: "json"
  });
}

function getPosts(id) {
  var url = "api/v1/messages?suburb_id=" + id.toString()
  $.get( url, function( data ) {
    $('#posts').html(render.renderPosts(data))
  });
}

module.exports = {
  dat_get: dat_get,
  submitCrime: submitCrime,
  submitPost: submitPost,
  getPosts: getPosts
}
