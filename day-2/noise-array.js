var noiseArray = ['honk']
// Using a native array method...
noiseArray.unshift('snap')
noiseArray.push('crash')
console.log(noiseArray)

// Using Bracket Notation...
noiseArray[3] = 'meow!'
console.log(noiseArray)

// Inspect the noiseArray
console.log(noiseArray.length)
console.log(noiseArray[noiseArray.length - 1])

var animal = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: noiseArray
}

console.log(animal.noises)
