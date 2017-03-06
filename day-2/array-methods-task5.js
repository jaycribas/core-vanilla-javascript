function unique(arr){
  return arr.filter( (word, i, a) => a.indexOf(word) == i).length
}

var strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-0']

console.log(unique(strings))
