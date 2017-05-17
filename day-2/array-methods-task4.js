var john = { name: 'John', age: 25 }
var pete = {name: 'Pete', age: 30}
var mary = {name: 'Mary', age: 29}

var arr = [john, pete, mary]

function getAverageAge(arr) {
//       arr.reduce(function(total, currentValue), initialValue)
  return arr.reduce((sum, user) => sum + user.age, 0) / arr.length
}

console.log(getAverageAge(arr))
