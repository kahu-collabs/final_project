var type_id = require('./type-map')
var each = require('lodash.foreach')




module.exports = function(type, layer, checkboxes){
var text_colour = ''
$.each(type_id, function(key, value){
  if(value.title == type){
    text_colour = value.marker_colour
  }
})
  var item = filters.appendChild(document.createElement("div"));
  var checkbox = item.appendChild(document.createElement("input"));
  var label = item.appendChild(document.createElement("label"));
  checkbox.type = "checkbox";
  checkbox.id = type;
  checkbox.checked = true;
  label.innerHTML = type;
  label.setAttribute("for", type);
  label.setAttribute("id", type)
  label.setAttribute("style", "color: " + text_colour + ";")
  return checkbox
}
