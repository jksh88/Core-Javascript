function search(array, number) {
  sortedArr = array.sort((a, b) => a - b);
  console.log(sortedArr);
}

console.log(search([12, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 51, 6], 6));
console.log(search([1, 2, 33, 4, 5, 6], 11));

function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor((min + max) / 2);
  if (num < arr[mid]) {
    max = mid - 1;
  } else if (num > arr[mid]) {
    min = mid + 1;
  }
  return mid;
}

console.log(binarySearch([12, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([1, 2, 3, 4, 51, 6], 6));
console.log(binarySearch([1, 2, 33, 4, 5, 6], 11));
