const glob = require('glob')
const path = require('path')
const gm = require('gm')
/**
 * 根据图片 exif 信息，旋转图片
 * @param {*} msg 
 */
async function rotate(msg) {
  const cwd = process.cwd()
  const pics = glob.sync('**/*.{jpg,jpeg}', {
    cwd
  })
  // console.log('pics', pics)
  // pics.forEach((item) => {

  // })
  for (let i = 0; i<pics.length; i++) {
    const pic = pics[i]
    const input = path.join(cwd, pic)
    const or = await getOrientation(input)
    if (typeof or !== 'undefined') {
      // https://www.cnblogs.com/whlives/p/4554424.html
      if (parseInt(or) !== 1) {
        await autoOrient(input)
        console.log(input)
      }
    }
    console.log('done:', i)
  }
  function getOrientation(input) {
    return new Promise((resolve, reject) => {
      gm(input).identify('%[EXIF:*]', (e, format) => {
        if (e) {
          reject(e)
        } else {
          const reg = /Orientation=(\d)/
          const res = reg.exec(format)
          if (res) {
            resolve(res[1])
          } else {
            resolve()
          }
        }
      })
    })
  }

  function autoOrient(input) {
    return new Promise((resolve, reject) => {
      const ext = path.extname(input)
      const name = path.basename(input)
      const dir = path.dirname(input)
      const outName = name.replace(ext, '') + '-rotated' + ext
      const output = path.resolve(dir, outName)
      gm(input)
        .autoOrient()
        .quality(80)
        .write(input, function (err) {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        })
    })
  }

}

module.exports = {
  desc: 'rotate webp',
  func: rotate
}