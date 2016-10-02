var fs = require('fs')
module.exports = function (directory, filter, callback) {
  var stack = new Error().stack

  if (stack.split('\n').length === 4) {
    throw new Error('hi')
  }

  fs.readdir(directory, function (error, list) {
    if (error) {
      return callback(error)
    }
    callback(null, list)
  })
}
