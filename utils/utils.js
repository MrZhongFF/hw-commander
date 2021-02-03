const os = require('os')
const qrTerminal = require('qrcode-terminal')

// 获取ip地址
function getIPv4IPAddress() {
  const ifaces = os.networkInterfaces()
  let result

  const arr = Object.entries(ifaces)
  arr.every(([, iface]) => {
    iface.every((eachAlias) => {
      if (
        eachAlias.family === 'IPv4' &&
        !eachAlias.internal &&
        eachAlias.address !== '127.0.0.1'
      ) {
        result = eachAlias
        return false
      }
      return true
    })

    if (result !== undefined) {
      return false
    }
    return true
  })

  return result && result.address
}

// 在终端生成二维码
function outputQRCodeOnTerminal(text) {
  console.info('')
  console.info(`生成HTTP服务器的二维码: ${text}`)
  qrTerminal.generate(text, { small: true })
}

module.exports = {
  getIPv4IPAddress,
  outputQRCodeOnTerminal,
}
