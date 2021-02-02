const qrTerminal = require('qrcode-terminal')

function qrcode(msg) {
  qrTerminal.generate(msg, { small: true })
}

module.exports = {
  desc: 'just a qrcode',
  func: qrcode,
}
