function getMax(arr) {
  var maxSum = 0;

  for (var i = 0; i < arr.length; i++) {
    var testSum = 0;
    for (var j = i; j < arr.length; j++) {
      testSum += arr[j];
      maxSum = Math.max(maxSum, testSum);
    }
  }
  return maxSum;
}

console.log(getMax([-1, 2, 3, -9]));       // 5
console.log(getMax([-1, 2, 3, -9]));       // 5
console.log(getMax([-1, 2, 3, -9, 11]));   // 11
console.log(getMax([-2, -1, 1, 2]));       // 3
console.log(getMax([100, -9, 2, -3, 5]));  // 100
console.log(getMax([1, 2, 3]));            // 6
console.log(getMax([-1, -2, -3]));         // 0
