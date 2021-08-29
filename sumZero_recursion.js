console.log(sumZero_recursion([-3, -2, -1, 0, 1, 2, 3])); //[-3, 3]
console.log(sumZero_recursion([-2, 0, 1, 3]));
console.log(sumZero_recursion([1, 2, 3]));
console.log(sumZero_recursion([-8, -7, -5, -2, 0, 1, 2, 3, 4, 5, 6]));

function sumZero_recursion(arr, p1 = 0, p2 = arr.length - 1) {
  let a = arr[p1];
  let b = arr[p2];
  debugger;
  if (a > 0 || b < 0) {
    return undefined;
  } else if (p1 === p2) {
    return undefined;
  } else if (a + b === 0) {
    return [a, b];
  } else if (Math.abs(a) < Math.abs(b)) {
    p2--;
  } else if (Math.abs(a) > Math.abs(b)) {
    p1++;
  }
  return sumZero_recursion(arr, p1, p2);
}

sumZero_recursion([-8, -7, -5, -2, 0, 1, 2, 3, 4, 5, 6]);
