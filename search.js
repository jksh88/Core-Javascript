function search(array, num) {
  sortedArr = array.sort((a, b) => a - b);
  console.log(sortedArr);
}

console.log(search([12, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 51, 6], 6));
console.log(search([1, 2, 33, 4, 5, 6], 11));
