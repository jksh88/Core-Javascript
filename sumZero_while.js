console.log(sumZero_while([-3, -2, -1, 0, 1, 2, 3])); //[-3, 3]
console.log(sumZero_while([-2, 0, 1, 3]));
console.log(sumZero_while([1, 2, 3]));
console.log(sumZero_while([-8, -7, -5, -2, 0, 1, 2, 3, 4, 5, 6]));

function sumZero_while(arr, p1 = 0, p2 = arr.length - 1) {
  while (p1 < p2) {
    if (arr[p1] + arr[p2] === 0) {
      return [arr[p1], arr[p2]];
    } else if (arr[p1] + arr[p2] > 0) {
      p2--;
    } else {
      p1++;
    }
    continue;
  }
  return undefined;
}
