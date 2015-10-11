module.exports = function dat_nearby(radius, lat, lng){
  $.get( "api/v1/nearby",  {within: radius, origin: [lat, lng]}, function( data ) {
      $( ".results" ).html( data );
  make_reports(data)
  });
}


function make_reports(data){
  for (i = 0; i < data.length; i++) {
    var x = data[i]
    $("#sidr").append(
      "<h1>" + x.date + "</h1><p>" + get_type[x.category_type] + "</p><p>" + x.description + "</p>"
      )
  }
}


var get_type = {
  1:"Assault/harrassment",
  2:"Vandalism or criminal damage",
  3:"Car theft",
  4:"Car break-in",
  5:"House burglary",
  6:"Other"
}
