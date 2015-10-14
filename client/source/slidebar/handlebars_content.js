var makeObjectsToRender = require("./../map/make_objects")
require('handlebars');



module.exports = function (data_in) {
  var object = makeObjectsToRender (data_in)
  var reverseObject = object.reverse()
  var theTemplateScript = $("#example-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var context = {these: reverseObject}
  var theCompiledHtml = theTemplate(context);
  $("#reports").empty()
  $("#reports").append(theCompiledHtml);
}

