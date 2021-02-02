const gm = require('gm')

// 生成指定尺寸的图片
function sizeImg(msg) {
  const input = '/Users/versace/Desktop/2488534296462098432.jpg'
  const output = '/Users/versace/Desktop/342x162.jpg'
  gm(input)
    .resize(342, 162, '!')
    .quality(50)
    .write(output, (e) => {
      if (e) {
        console.error(e)
      } else {
        console.log('done')
      }
    })
}

module.exports = {
  desc: 'just a sizeImg',
  func: sizeImg,
}
