// console.log(maxSubarraySum_recursion([1, 2, 5, 2, 8, 1, 5], 4)); //17
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
// console.log(maxSubarraySum([], 4)); //null
// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //

function maxSubarraySum_recursion(
  arr,
  num,
  j = 0,
  i = arr.length - 1 - j,
  sum = 0
) {
  debugger;
  let tempSum = sum;
  for (let k = i; k > i - num; k--) {
    tempSum += arr[k];
    // console.log(tempSum);
  }
  // console.log(tempSum);
  sum = Math.max(tempSum, sum);
  j++;
  // console.log(sum);
  console.log('j:' + j);
  console.log('num:' + num);
  if (j > num) {
    return sum;
  }

  maxSubarraySum_recursion(
    arr.slice(arr.length - 1 - num - j, arr.length - j),
    num,
    sum
  );
}
maxSubarraySum_recursion([1, 2, 5, 2, 8, 1, 5], 4);
// console.log(maxSubarraySum_recursion([1, 2, 5, 2, 8, 1, 5], 4)); //17
