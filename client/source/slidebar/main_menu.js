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
  }
}



function renderPosts(data) {
  postsHtml = ''
  data.map(function(post) {
    postsHtml += '<div class="post">Created at:'+post.created_at+' by '+post.user_id+'<br><p>'+post.body+'</p></div>'
  })
  return postsHtml
}
