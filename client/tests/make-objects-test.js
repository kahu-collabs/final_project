var test = require('tape')
var make_objects = require('../source/map/make_objects')

var expected = [
  {
    "type":"Feature",
    "geometry":{
      "type":"Point",
      "coordinates":[174.778747558594,-41.2932854608162]
    },
    "properties":{
      "id":1,
      "date":"2015-10-15",
      "title":"Vandalism or criminal damage",
      "description":"nothing",
      "marker-color":"#0ea7b5"
    }
  }
]


var fakeData = [{
  category_type: "2",
  created_at: "2015-10-12T03:14:06.248Z",
  date: "2015-10-15",
  description: "nothing",
  happened_before: false,
  id: 1,
  lat: -41.2932854608162,
  lng: 174.778747558594,
  suburb_id: 0,
  updated_at: "2015-10-12T03:14:06.248Z",
  user_id: 1
}]


test('make_objects makes the valid objects', function(t) {

  var actual = make_objects(fakeData)
  t.pass(JSON.stringify(actual))
  t.deepEqual(expected[0], actual[0], 'the expected is the same as the actual!')
  t.end()


})
