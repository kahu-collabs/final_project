require('handlebars');

var make_objects_to_render = require("./../map/make_objects")



module.exports = function (data_in) {

  console.log("data_in", data_in)

  var objects = make_objects_to_render(data_in)
  // Grab the template script
  var theTemplateScript = $("#example-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // This is the default context, which is passed to the template
  var context = {these: objects}
  console.log("context", context)

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $("#sidr").append(theCompiledHtml);
}
