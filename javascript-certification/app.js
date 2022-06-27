// ==== Fizz Buzz

function fizzBuzz(n) {
  // Write your code here
  // for (let i = 1; i < n; i++) {
  //   if (i % 5 === 0 && i % 3 === 0) {
  //     return i
  //   } else if (i % 5 === 0 && i % 3 !== 0) {
  //     return 'Buzz'
  //   } else if (i % 3 === 0 && i % 5 !== 0) {
  //     return 'Fizz'
  //   }
  // }
  for (let i = 1; i <= n; i++) {
    if (i % 5 > 0 && i % 3 > 0) {
      // console.log(i)
    }
    else if (i % 5 === 0 && i % 3 === 0) {
      // console.log('FizzBuzz')
    } else if (i % 5 === 0 && i % 3 !== 0) {
      // console.log('Buzz')
    } else if (i % 3 === 0 && i % 5 !== 0) {
      // console.log('Fizz')
    }
  }
}
fizzBuzz(15)

// === strip Property

function stripProperty(obj, prop) {
  // write your code here
  // console.log('obj:', obj)
  // console.log('prop:', prop)
  // console.log(obj[prop])
  for (let props in obj) {
    if (props === prop) {
      delete obj[props]
    }
  }

  return obj
}

// console.log(stripProperty({ foo: 2, bar: 3, baz: 3 }, 'foo'))

function weekdayText(weekdays) {
  return function getText(index) {
    if (index > weekdays.length) {
      return 'Error: Invalid weekday number'
    }
    return weekdays[index]
  }
}


console.log(weekdayText(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']))