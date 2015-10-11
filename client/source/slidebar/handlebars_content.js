module.exports = function print_content(){
  $('#sidr').append(template(context));
}

var source   = $("#entry-template").html();
var template = Handlebars.compile(source);
var context = {title: "My New Post", body: "yo"};
var html    = template(context);








