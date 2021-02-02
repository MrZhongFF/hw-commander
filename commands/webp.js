const webp = require('webp-converter')
const glob = require('glob')
const path = require('path')

// 将 webp 图片转换成 jpg
async function convert(msg) {
  const input = path.resolve(msg)
  const obj = path.parse(input)
  console.log(obj)
  const output = path.format({
    root: obj.root,
    dir: obj.dir,
    name: obj.name,
    ext: '.png'
  })
  await webp.dwebp(input, output, "-o").then((res) => {
    // TODO 如何区分转换失败？？
    console.log('ok', res, res.status)
  }).catch((e) => {
    console.log('fail', e, pic)
  })
}

module.exports = {
  desc: 'convert webp',
  func: convert
}