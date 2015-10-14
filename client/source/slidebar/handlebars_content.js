require('handlebars');

var makeObjectsToRender = require("./../map/make_objects")

module.exports = function(dataIn) {
  var objects = makeObjectsToRender(dataIn)
  var theTemplateScript = $("#example-template").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var context = {these: objects}
  var theCompiledHtml = theTemplate(context);
  $("#sidr").append(theCompiledHtml);
}

