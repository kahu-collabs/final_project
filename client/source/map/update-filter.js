module.exports = function(layer, checkboxes) {
  return function() {
    var enabled = {};

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) enabled[checkboxes[i].id] = true;
    }

    layer.setFilter(function(feature) {
      return (feature.properties.title in enabled);
    });
  }
}
