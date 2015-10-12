require('handlebars');

module.exports = function (objects) {
  // Grab the template script
  var theTemplateScript = $("#example-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // This is the default context, which is passed to the template
  var context = {these: objects}

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $("#sidr").append(theCompiledHtml);
}
