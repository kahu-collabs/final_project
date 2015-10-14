var printUserReports = require('./handlebars_content')
require('handlebars');

function pinData(data) {
	printUserReports(data)
}


module.exports = function() {
  $.get("http://localhost:3000/api/v1/user_reports", pinData)

}

function renderPosts(data) {
  postsHtml = ''
  rev_data = data.reverse()
  rev_data.map(function(post) {
    postsHtml += '<div class="post">Created at:'+post.created_at+' by '+post.user_id+'<br><p>'+post.body+'</p></div>'
  })
  return postsHtml
}
