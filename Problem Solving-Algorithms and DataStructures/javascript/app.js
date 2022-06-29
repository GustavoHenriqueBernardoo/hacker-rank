console.log('works')

function compareTriplets(a, b) {
  // Write your code here
  let resultA = 0
  let resultB = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      continue
    }
    if (a[i] > b[i]) {
      resultA++
    } else {
      resultB++
    }
  }
  let INTEGER_ARRAY = [resultA, resultB]
  return INTEGER_ARRAY
}

console.log(compareTriplets([5, 2, 3], [4, 1, 2]))