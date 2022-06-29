// ==== Fizz Buzz

function fizzBuzz(n) {
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

// === WeekDay and getText

function weekdayText(weekdays) {
  return function getText(index) {
    if (index > weekdays.length) {
      return 'Error: Invalid weekday number'
    }
    return weekdays[index]
  }
}


// console.log(weekdayText(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']))


class SiegeState {
  constructor() {
    this.canMove = false
    this.damage = 20
  }
}

class TankState {
  constructor() {
    this.canMove = true
    this.damage = 5
  }
}

class Tank {
  constructor() {
    this.state = new TankState
  }

  get canMove() {
    return this.state.canMove
  }
  get damage() {
    return this.state.damage
  }
}

const test = new Tank()

console.log(test)