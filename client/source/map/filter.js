module.exports = function (map, layer) {

  var filters = document.getElementById('filters');
  filters.innerHTML = "";

  var typesObj = {}, types = [];
  var features = layer.getGeoJSON();
  for (var i = 0; i < features.length; i++) {
    typesObj[features[i].properties['title']] = true;
  }
  for (var k in typesObj) types.push(k);


  var checkboxes = [];

  for (var i = 0; i < types.length; i++) {

    var item = filters.appendChild(document.createElement('div'));
    var checkbox = item.appendChild(document.createElement('input'));
    var label = item.appendChild(document.createElement('label'));
    checkbox.type = 'checkbox';
    checkbox.id = types[i];
    checkbox.checked = true;
    label.innerHTML = types[i];
    label.setAttribute('for', types[i]);
    checkbox.addEventListener('change', update);
    checkboxes.push(checkbox);
  }


  function update() {
    var enabled = {};

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) enabled[checkboxes[i].id] = true;
    }
    layer.setFilter(function(feature) {

      return (feature.properties['title'] in enabled);
    });
  }
// });



}
