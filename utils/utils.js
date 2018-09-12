const os = require('os')
const qrTerminal = require('qrcode-terminal')

// 获取ip地址
function getIPv4IPAddress() {
  const ifaces = os.networkInterfaces()
  let result

  for (const prop in ifaces) {
    if (Object.prototype.hasOwnProperty.call(ifaces, prop)) {
      const iface = ifaces[prop]

      iface.every((eachAlias, j, all) => {
        if (eachAlias.family === 'IPv4' && !eachAlias.internal && eachAlias.address !== '127.0.0.1') {
          result = eachAlias
          return false
        }
        return true
      })

      if (result !== void 0) {
        break
      }
    }
  }

  return result && result.address
}

// 在终端生成二维码
function outputQRCodeOnTerminal (text) {
  console.info(``)
  console.info(`生成HTTP服务器的二维码: ${text}`)
  qrTerminal.generate(text, { small: true })
}

module.exports = {
  getIPv4IPAddress,
  outputQRCodeOnTerminal,
}