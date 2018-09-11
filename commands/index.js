const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(path.join(__dirname, './'))
const output = {}
files.forEach((item) => {
  if (item !== 'index.js') {
    let name = item.split('.')[0]
    output[name] = require(path.join(__dirname, item))
  }
})

module.exports = output