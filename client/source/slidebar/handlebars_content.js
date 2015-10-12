require('handlebars');

var make_objects_to_render = require("./../map/make_objects")



module.exports = function (data_in) {
  var objects = make_objects_to_render(data_in)
  var theTemplateScript = $("#example-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var context = {these: objects}
  console.log("context", context)
  var theCompiledHtml = theTemplate(context);
  $("#sidr").append(theCompiledHtml);
}

