var each = require('lodash.foreach')

module.exports = function(){


  var data = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]

 arr.forEach(function(item){
  data[item.type][item.day] += 1
  })

return data

}


    var arr = [];
    for (var i = 0; i < 100; i++) {
        arr.push({
            type: Math.floor(Math.random()*6),
            day: Math.floor(Math.random()*7),
            suburb: Math.floor(Math.random()*45)+1
        });
      }

    for (var i = 0; i < 20; i++) {
        arr.push({
            type: Math.floor(Math.random()*6),
            day: 4,
            suburb: Math.floor(Math.random()*45)+1
        });
      }

    for (var i = 0; i < 20; i++) {
        arr.push({
            type: Math.floor(Math.random()*6),
            day: 5,
            suburb: Math.floor(Math.random()*45)+1
        });
      }
