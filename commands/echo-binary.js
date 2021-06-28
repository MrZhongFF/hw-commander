const path = require('path')
const fs = require('fs')

function main(msg) {
  const input = path.join(process.cwd(), msg)
  const buffer = fs.readFileSync(input)
  const str = buffer.toString('hex')
  console.log(str.slice(0, 200))
}

module.exports = {
  desc: 'just a main',
  func: main,
}
