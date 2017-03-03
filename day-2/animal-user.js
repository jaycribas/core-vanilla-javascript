function AnimalTestUser(username){
  var animal = {
    username
  }
  if (arguments.length > 1){
    animal.otherArgs = Array.from(arguments)
    animal.otherArgs.shift()
  }
  return animal
}

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3])

function AnimalCreator(username, species, tagline, noises){
  this.username = username
  this.species = species
  this.tagline = tagline
  this.noises = noises
  this.friends = []
}

var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew'])

function addFriend (animal, friend) {
  animal.friends.push(friend.username)
}

var cow = new AnimalCreator('Moo', 'cow', 'Hey I\'m a cow!', ['mooooooo', 'moo', 'mooooooOOOoooOOO'])
var llama = new AnimalCreator('Zeny', 'llama', 'Hey... you', ['spit', 'weeeee', 'snarf'])

addFriend(sheep, cow)
addFriend(sheep, llama)
addFriend(cow, llama)
addFriend(cow, sheep)
addFriend(llama, sheep)
addFriend(llama, cow)

var myFarm = []

myFarm.push(sheep, cow, llama)

function addMatchesArray(radFarm){
  for (i = 0; i < radFarm.length ; i++){
    var currentAnimal = radFarm[i]
    currentAnimal.matches = []
  }
}

addMatchesArray(myFarm)

function giveMatches(animalPool){
  for (i = 0; i < animalPool.length; i++){
    var currentAnimal = animalPool[i]
    currentAnimal.matches = currentAnimal.friends[0]  //tried to get this to randomize, didn't work, will try again later
  }
}

giveMatches(myFarm)
console.log(myFarm)
