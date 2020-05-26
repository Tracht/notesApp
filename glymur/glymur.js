function describe(description, callback) {
  console.log(description)
  callback()
}

function it(description, callback) {
  console.log('        ' + description)
  callback()
}

function expect(callback) {
  result = new Result()
  if (typeof callback === "function") {
    result.assertion = callback()
  } else {
    result.assertion = callback
  }
  return result
}

function Result() {
  this.assertion = undefined
}

Result.prototype.toEqual = function(expectation) {
  if(this.assertion === expectation) {
    console.log('passed')
  } else {
    console.log('FAILED')
    console.log(`Expected ${this.assertion} to equal ${expectation}`)
    console.log(`But equals ${this.assertion}`)
  }
}

Result.prototype.toBe = function(expectation) {
  if(typeof this.assertion !== 'boolean' || typeof expectation !== 'boolean') {
    console.log('toBe matcher can only be used with booleans')
  } else {
    if(this.assertion === expectation) {
      console.log('passed')
    } else {
      console.log('FAILED')
      console.log(`Expected ${this.assertion} to be ${expectation}`)
      console.log(`But it was ${this.assertion}`)
    }
  }
}