require('handlebars');

var make_objects_to_render = require("./../map/make_objects")

module.exports = function (data_in) {
  var object = make_objects_to_render(data_in)
  var reverseObject = object.reverse()
  var theTemplateScript = $("#example-template").html();
  console.log('template script', theTemplateScript)
  var theTemplate = Handlebars.compile(theTemplateScript);
  var context = {these: reverseObject}
  var theCompiledHtml = theTemplate(context);
  // console.log(data_in)
  // console.log(theCompiledHtml)
  $("#reports").empty()
  $("#reports").append(theCompiledHtml);
}

