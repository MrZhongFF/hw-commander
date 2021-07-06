const fs = require('fs')

async function csv(msg) {
  const {parse} = require('csv')

//   const input = `
// "key_1","key_2"
// "value 1","value 2"
// `
  const input = fs.readFileSync('ecdict.csv', 'utf-8')

  const records = parse(input, {
    columns: true,
    skip_empty_lines: true,
  }, (e, output) => {
    if (e) {
      console.error(e)
      return
    }
    console.log(output)
    const part = output.slice(0, 1000)
    fs.writeFileSync('./output.json', JSON.stringify(part, null, 2))
  })
}

module.exports = {
  desc: 'just a csv',
  func: csv,
}
