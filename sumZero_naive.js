// sorted array of integers
// find the first pair where the sume is 0
// return an arry that includes both values or undefined if nonexistent

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3, 3]
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-8, -7, -5, -2, 0, 1, 2, 3, 4, 5, 6]));

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}
