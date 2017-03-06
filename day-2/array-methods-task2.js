var john = { name: "John", surname: "Smith", id: 1 }
var pete = {name: "Pete", surname: "Hunt", id: 2}
var mary = {name: "Mary", surname: "Key", id: 3}

var users = [john, pete, mary]

var usersMapped = users.map(user => ({
  fullName: user.name + ' ' + user.surname,
  // fullName: `${user.name} ${user.surname}`,
  id: user.id
}))

console.log(usersMapped);
