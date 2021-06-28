const fs = require('fs')
const path = require('path')
const cp = require('child_process')

function walk(dir) {
  const all = fs.readdirSync(dir)
  all.forEach((one) => {
    const full = path.join(dir, one)
    if (one === 'node_modules') {
      console.log('get', full)
      cp.execSync(`rm -r "${full}"`)
      return
    }
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      walk(full)
    }
  })
}

// 列出所有 node_modules, 并删除
function main(msg) {
  const cwd = process.cwd()
  walk(cwd)

}

module.exports = {
  desc: 'just a main',
  func: main,
}
