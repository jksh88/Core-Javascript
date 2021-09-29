const squareSum = (num) => {
  let processed = num
    .toString()
    .split('')
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
  // console.log(processed);
  return processed ** 2;
};

console.log(squareSum(11));
console.log(squareSum(2020));
