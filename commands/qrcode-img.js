const QRCode = require('qrcode')

function main(msg) {
  // base64
  // QRCode.toDataURL('I am a pony!', function (err, url) {
  //   console.log(url)
  // })

  // QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
  //   console.log(url)
  // })

  QRCode.toFile('./out.png', 'just a test')
}

module.exports = {
  desc: 'just a main',
  func: main,
}
