const fs = require('fs')
const path = require('path')

function rename() {
  const cwd = process.cwd()
  const dirs = fs.readdirSync(cwd)
  console.log(dirs)
  dirs.forEach((item) => {
    if (item.indexOf('.') == 0 || item == 'out') {
      return
    }
    parseOneFolder(item)
  })

  function parseOneFolder(item) {
    let innerPath = path.join(cwd, item)
    let dirs = fs.readdirSync(innerPath)
    dirs.forEach((dir) => {
      if (dir.indexOf('.') === 0) {
        return
      }
      let files = fs.readdirSync(path.join(cwd, item, dir))
      files.forEach((file) => {
        let outName = `${item}-${dir}-${file}`
        let outPath = path.join(cwd, 'out', outName)
        fs.writeFileSync(outPath, fs.readFileSync(path.join(cwd, item, dir, file)))
      })
    })
  }
}

module.exports = {
  desc: 'rename files',
  func: rename,
}