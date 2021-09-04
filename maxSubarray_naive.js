//calculate the max sum of n consecutive elements in the array

let start = Date.now();

function maxSubarraySum_naive1(arr, num) {
  let max = 0;
  let i = 0;
  while (i < arr.length) {
    let sum = 0;
    for (let j = 0; j < num; j++) {
      sum += arr[i + j];
    }
    if (sum > max) max = sum;
    i++;
  }
  return max;
}

console.log(maxSubarraySum_naive1([1, 2, 5, 2, 8, 1, 5], 4)); //
console.log(maxSubarraySum_naive1([1, 2, 5, 2, 8, 1, 5], 2)); //
console.log(maxSubarraySum_naive1([4, 2, 1, 6], 1)); //
console.log(maxSubarraySum_naive1([4, 2, 1, 6, 2], 4)); //
console.log(maxSubarraySum_naive1([], 4)); //
console.log(maxSubarraySum_naive1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //

let end = Date.now();
let executionTime1 = end - start;
console.log(executionTime1);

let empie = Date.now();

function maxSubarraySum_naive2(arr, num) {
  let max = 0;
  let i = 0;
  while (i < arr.length - num + 1) {
    let sum = 0;
    for (let j = 0; j < num; j++) {
      sum += arr[i + j];
    }
    if (sum > max) max = sum;
    i++;
  }
  return max;
}

console.log(maxSubarraySum_naive2([1, 2, 5, 2, 8, 1, 5], 4)); //
console.log(maxSubarraySum_naive2([1, 2, 5, 2, 8, 1, 5], 2)); //
console.log(maxSubarraySum_naive2([4, 2, 1, 6], 1)); //
console.log(maxSubarraySum_naive2([4, 2, 1, 6, 2], 4)); //
console.log(maxSubarraySum_naive2([], 4)); //
console.log(maxSubarraySum_naive2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //

let fin = Date.now();
let executionTime2 = fin - empie;
console.log(executionTime2);

console.log(`execution time difference: ${executionTime2 - executionTime1} ms`);
