function luc(word, prevCount = 0, k = word.length - 1) {
  let count = 0;
  arr = [];
  for (let i = word.length - 1; i >= 0; i--) {
    if (!arr.includes(word[i])) {
      arr.push(word[i]);
      count++;
    } else {
      k--;
    }
  }

  let curCount = count > prevCount ? count : prevCount;
  if (k < 0) {
    return word.slice(-1 * curCount, -1);
  }
  console.log(curCount, k);
  return luc(word, curCount, k);
}

console.log(luc('hellothere'));
