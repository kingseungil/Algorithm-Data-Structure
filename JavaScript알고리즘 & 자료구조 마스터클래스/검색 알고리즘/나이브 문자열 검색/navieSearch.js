function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        console.log("break!");
        break;
      }
      if (j === short.length - 1) {
        console.log("Found one!");
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
