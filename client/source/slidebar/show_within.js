require('handlebars');
var render_it = require('./handlebars_content')

module.exports = function (radius, lat, lng){
  $.get( "api/v1/nearby",  {within: radius, origin: [lat, lng]}, function( data ) {
      $( ".results" ).html( data );
  make_reports(data)
  });
}


function make_reports(data){
  for (i = 0; i < data.length; i++) {
    var x = data[i]
    $("#sidr").html(
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


var reportForm = '<label for="crime">What sort of incident are you reporting?</label>'
+  '<select name="incident" id="incident">'
+    '<option value="1">Assault/harrassment</option>'
+    '<option value="2">Vandalism or criminal damage</option>'
+    '<option value="3">Car theft</option>'
+    '<option value="4">Car break-in</option>'
+    '<option value="5">House burglary</option>'
+    '<option value="6">Other</option>'
+ '</select><br></br>'

+  '<label for="description">In your own words please explain what happened</label>'
+  '<input type="text-area" name="" id="description"><br></br>'

+ '<label for="date">On what date did the incident occur?</label>'
+ '<input type="date" name="" id="date"><br></br>'

+  '</select><br></br>'
+  '<label for="time">Select a time between these hours of when it happend</label>'
+  '<select name="time" id="time">'
+   ' <option value="time">1pm - 12pm</option>'
+  '</select>'
+  '<select name="time" id="time">'
+    '<option value="time">1pm - 12pm</option>'
+  '</select><br></br>'
+  '<input type="checkbox" name="" id="happened_before"> This has happened before<br></br>'
+ '<p>Click the map where you would like to drop your pin</p>'
+  '<input type="submit" value="Submit" id="submit">'

var viewForm = '<label for="description">View all incidents within a</label>'
+  '<input type="number" name="" id="radius">'
+  '<input type="submit" value="Submit" id="submit">'

$("#report-button").click(function(){
  $('#viewform').html('')
  $('#reportform').html(reportForm)
  $("#submit").hide()
})

$("#view-button").click(function(){
  $('#reportform').html('')
  $('#viewform').html(viewForm)
  $("#submit").hide()
})


