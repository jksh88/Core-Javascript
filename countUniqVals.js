console.log(countUniqVals([1, 1, 1, 1, 1, 2]));
console.log(countUniqVals([1, 2, 3, 4, 4, 7]));
console.log(countUniqVals([]));
console.log(countUniqVals([-2, -1, -1, 0, 1]));

function countUniqVals(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    !obj[arr[i]] ? (obj[arr[i]] = 1) : obj[arr[i]]++;
  }
  return Object.keys(obj).length;
}
