module.exports = function () {
  var n = 0
  var mean = 0
  return function (x) {
    if (!isNaN(x)) {
      if (typeof x !== 'number') {
        x = parseFloat(x)
      }
      n += 1
      mean = mean + (x - mean) / n
    }
    return mean
  }
}
