var printUserReports = require('./handlebars_content')
require('handlebars');

function pinData(data) {
	printUserReports(data)
}

module.exports = function() {
  $.get("http://localhost:3000/api/v1/user_reports", pinData)
}

