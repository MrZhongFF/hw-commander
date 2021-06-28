const qrCode = require('qrcode-reader')
const Jimp = require('jimp')
const path = require('path')
const fs = require('fs')

async function deQrcode(msg) {
  const input = path.resolve(process.cwd(), msg)
  const buffer = fs.readFileSync(input)
  Jimp.read(buffer, function (err, image) {
    if (err) {
      console.error(err)
      return
    }
    // Creating an instance of qrcode-reader module
    let qrcode = new qrCode()
    qrcode.callback = function (err, value) {
      if (err) {
        console.error(err)
      }
      // Printing the decrypted value
      console.log(value.result)
    }
    // Decoding the QR code
    qrcode.decode(image.bitmap)
  })
}

module.exports = {
  desc: '解析二维码图片',
  func: deQrcode,
}
