var john = {name: "John", age: 25}
var pete = {name: "Pete", age: 30}
var mary = {name: "Mary", age: 28};

var users = [john, pete, mary]

var names = users.map(user => user.name)

console.log(names)
