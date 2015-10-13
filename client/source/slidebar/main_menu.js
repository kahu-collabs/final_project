require('handlebars');
var printUserReports = require('./handlebars_content')

module.exports = function(){
  $.get("http://localhost:3000/api/v1/user_reports", pinData)
}

function pinData(data){
  for (var i = 0; i < data.length; i++) {
  var category = data[i]["category_type"]
  var date = data[i]["date"]
  var description = data[i]["description"]
  printUserReports(data)
  // console.log(userReports)
  // console.log(category)
  // console.log(date)
  // console.log(description)
  // console.log(data[i]["user_id"])
  }
}

// $(document).ready(function(){
//   crimesForPin()
// })

