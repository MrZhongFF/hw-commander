const images = require('images')
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const { ExifImage } = require('exif')

const dir = '/Users/versace/Downloads/house-imgs'

function getExif(src) {
  new ExifImage(
    {
      image: src,
    },
    (error, exifData) => {
      if (error) console.log(`Error: ${error.message}`)
      else console.log(exifData) // Do something with your data!
    }
  )
}

async function main(msg) {
  const src = path.join(dir, '1.jpeg')
  getExif(src)
  return
  const imgs = glob.sync('*.jpeg', {
    cwd: dir,
  })
  console.log('imgs', imgs)
  for (let i = 0; i < imgs.length; i++) {
    console.log('doing', i)
    const img = imgs[i]
    const input = path.join(dir, img)
    const output = path.join(dir, `small-${img}`)
    images(input).size(1080).save(output, {
      quality: 50,
    })
  }
}

module.exports = {
  desc: 'handle image',
  func: main,
}
