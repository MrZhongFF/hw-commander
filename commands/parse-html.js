const path = require('path')
const glob = require('glob')
const cp = require('child_process')
const fse = require('fs-extra')
const cheerio = require('cheerio')

async function main(input) {
  const content = fse.readFileSync(path.resolve(input), 'utf8')
  const $ = cheerio.load(content)
  console.log()
  const list = $('ul li a')
  const out = []
  list.forEach((i, ele) => {
    out.push({
      title: '',
      href: '',
    })
  })
}

module.exports = {
  desc: 'parse html',
  func: main,
}
