var test = require('tape')
var Mean = require('./index')

var values = [1, 3, 5, NaN, 'Bob', '6', 8]

test('Simple test with NaN and Strings', (_) => {
  var mean = Mean()
  values.forEach(v => { mean(v) })
  console.log(mean())
  _.equal(mean(), 4.6)
  _.end()
})

test('1 million numbers (0,1000000), int: 1', (_) => {
  var mean = Mean()
  for (var i = 0; i <= 1000000; i++) {
    mean(i)
  }
  console.log(mean())
  _.equal(mean(), 500000)
  _.end()
})

test('1 million numbers (0,100000), int: 0.1, err < 0.1', (_) => {
  var mean = Mean()
  for (var i = 0; i <= 100000; i += 0.1) {
    mean(i)
  }
  console.log(mean())
  _.true(mean() - 50000 < 0.1, 'Floating point cumulative error is quite high when N is big')
  _.end()
})

test('1 million numbers (100000, 0), int: 0.1, err < 0.1', (_) => {
  var mean = Mean()
  for (var i = 100000; i >= 0; i -= 0.1) {
    mean(i)
  }
  console.log(mean())
  _.true(mean() - 50000 < 0.1, 'Floating point cumulative error is quite high when N is big')
  _.end()
})
