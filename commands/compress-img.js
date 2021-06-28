const images = require('images')
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const gm = require('gm')

async function getSize(uri) {
  return new Promise((resolve, reject) => {
    gm(uri).size((err, size) => {
      if (err) {
        reject(err)
      } else {
        resolve(size)
      }
    })
  })
}

/**
 * 将图片压缩成 1080 宽或高的尺寸，降低体积
 * @param {*} msg
 */
async function main(msg) {
  const cwd = process.cwd()
  const imgs = glob.sync('**/*.{jpg,jpeg,png}', {
    cwd,
  })
  // const imgs = ['2.png', '3.png', '4.png']
  for (let i = 0; i < imgs.length; i++) {
    const imgPath = path.join(cwd, imgs[i])
    // const out = path.join(cwd, `s-${imgs[i]}`)
    const out = imgPath
    await handleOne(imgPath, out)
  }
  async function handleOne(input, out) {
    out = out || input
    const { width, height } = await getSize(input)
    // if (width <= 1080 & height <= 1080) {
    //   console.log('ignore:', input)
    //   return
    // }
    console.log('handle:', input);
    
    let newWidth
    let newHeight
    if (width >= height) {
      newWidth = 1080
      newHeight = null
    } else {
      newWidth = null
      newHeight = 1080
    }
    return new Promise((resolve, reject) => {
      // gm('img.png').resize(width) //保持宽高比
      // gm('img.png').resize(null, height) //保持宽高比
      // gm('img.png').resize(width, height, '!') //参数'!'用于忽略宽高比
      gm(input)
        .resize(newWidth, newHeight)
        // .resize(702, 258, '!')
        .write(out, (err) => {
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
  desc: 'handle image',
  func: main,
}
