const glob = require('glob')
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const os = require('os')

/**
 * 是否可以删除。
 * 路径为非目录，且不是图片文件路径时，删除
 * 图片大小小于一定尺寸，删除
 * @param {String} input 输入路径
 */
function shouldRemove(input) {
  const stat = fs.statSync(input)
  if (stat.isDirectory()) {
    return false
  }
  const ext = path.extname(input).slice(1)
  // 基于后缀判断是否是图片
  const exts = ['jpg', 'jpeg', 'png', 'gif']
  // 非图片，删除
  if (!exts.includes(ext)) {
    return true
  }
  // 单位：字节
  if (stat.size < 1024 * 10) {
    return true
  }
  return false
}

/**
 * 移除非图片文件
 * @param {*} msg
 */
async function main(msg) {
  let cwd = process.cwd()
  if (msg) {
    cwd = path.resolve(msg)
  }
  const files = glob.sync('**/*', {
    cwd,
  })
  const recyclePath = path.resolve(os.tmpdir(), path.basename(cwd))
  console.log('move to:', os.tmpdir())
  fse.ensureDirSync(recyclePath)
  files.forEach((item) => {
    const full = path.resolve(cwd, item)
    const newPath = path.resolve(recyclePath, item)
    if (shouldRemove(full)) {
      console.log('rm', full)
      // fs.unlinkSync(full)
      fse.moveSync(full, newPath, { overwrite: true })
    }
  })

}

module.exports = {
  desc: 'remove none-img file',
  func: main,
}
