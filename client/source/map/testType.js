module.exports = function (type) {
  //replace with a Map as in make_objects

  if (type == "Assault/harassment"){
    return 1
  }
  else if (type == "Vandalism or criminal damage"){
    return 2
  }
  else if (type == "Car theft"){
    return 3
  }
  else if (type == "Car break-in"){
    return 4
  }
  else if (type == "House burglary"){
    return 5
  }
  else if (type == "Other"){
    return 6
  }
  else { return 7 }

}
