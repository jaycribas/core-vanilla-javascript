var animals = []

var animal = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['snap', 'honk', 'crash', 'meow']
}
animals.push(animal)

var quackers = {
  username: 'OtherDaffy',
  tagline: 'Yay?!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
}

animals.push(quackers)

var bird = {
  username: 'Chirp',
  tagline: 'Meh..',
  noises: ['tweet', 'meep', 'blah']
}

var pig = {
  username: 'Henry',
  tagline: 'Me want fooooooood',
  noises: ['cough', 'lalala', 'oooooooooo']
}

animals.push(bird, pig)
console.log(animals.length)
