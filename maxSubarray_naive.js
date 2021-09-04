//calculate the max sum of n consecutive elements in the array

console.log(maxSubarraySum_naive([1, 2, 5, 2, 8, 1, 5], 2)); //
console.log(maxSubarraySum_naive([1, 2, 5, 2, 8, 1, 5], 4)); //
console.log(maxSubarraySum_naive([4, 2, 1, 6], 1)); //
console.log(maxSubarraySum_naive([4, 2, 1, 6, 2], 4)); //
console.log(maxSubarraySum_naive([], 4)); //

function maxSubarraySum_naive(arr, num) {
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
