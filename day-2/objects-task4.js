var salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

var total = 0;
for (var key in salaries) {
  total += salaries[key];
}

console.log(total);
