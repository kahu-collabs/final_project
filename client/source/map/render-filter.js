var update = require('./update-filter')

module.exports = function(type, selector){
  var parent = document.querySelector(selector)

  var item = parent.appendChild(document.createElement('div'));
  var checkbox = item.appendChild(document.createElement('input'));
  var label = item.appendChild(document.createElement('label'));
  checkbox.type = 'checkbox';
  checkbox.id = type;
  checkbox.checked = true;
  label.innerHTML = type;
  label.setAttribute('for', type);
  return checkbox
}
