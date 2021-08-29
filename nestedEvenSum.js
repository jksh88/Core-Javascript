function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      sum += nestedEvenSum(obj[key]);
    } else {
      continue;
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 4,
    otherObj: {
      superInner: 4,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 8, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
