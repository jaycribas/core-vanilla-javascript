var john = {name: 'John', age: 25}
var pete = {name: 'Pete', age: 30}
var mary = {name: 'Mary', age: 28}

var arr = [john, pete, mary]

function sortByName(arr) {
  // arr.sort(compareFunction)
  arr.sort((a, b) => a.name > b.name)
}

sortByName(arr)

console.log(arr)
console.log(arr[1].name)
