function renderPins(data, myLayer) {
  myLayer.on('layeradd', function(e) {
    var marker = e.layer,
      feature = marker.feature;

    var popupContent = '<p>' + feature.properties.date + '<p>' + feature.properties.description + '</p>';

    marker.bindPopup(popupContent, {
      closeButton: false,
      minWidth: 320
    });
  })
  myLayer.setGeoJSON(data);
}

function renderPosts(data) {
  var postsHtml = ''
  data.map(function(post) {
    postsHtml += '<div class="post">Created at:' + post.created_at + ' by ' + post.user_id + '<br><p>' + post.body + '</p></div>'
  })
  return postsHtml
}

module.exports = {
  renderPins: renderPins,
  renderPosts: renderPosts
}
