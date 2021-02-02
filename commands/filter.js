// 23:37

const glob = require('glob')
const fse = require('fs-extra')
const path = require('path')

const cwd = process.cwd()

function isDir(dir) {
  const stat = fse.statSync(dir)
  return stat.isDirectory()
}

// 删除非 jpg 文件
function removeOtherFile(dir) {
  const files = glob.sync('!(**.jpg)', {
    cwd: dir,
  })
  files.forEach((item) => {
    const full = path.join(dir, item)
    if (!isDir(full)) {
      console.log('full', full)
      fse.removeSync(full)
    }
  })
}

function task(cwd) {
  const dirs = fse.readdirSync(cwd)
  dirs.forEach((item) => {
    if (item === 'node_modules') {
      return
    }
    const full = path.join(cwd, item)
    if (isDir(full)) {
      removeOtherFile(full)

      task(full)
    }
  })
}

function main(dir) {
  task(cwd)
}

module.exports = {
  desc: 'remove none jpg',
  func: main,
}
