const path = require('path')
const glob = require('glob')
const cp = require('child_process')
const fse = require('fs-extra')
const crypto = require('crypto')

async function main() {
  const secret = 's'.repeat(32)
  const file = '/Users/versace/hillswind/abc123.md'
  const content = fse.readFileSync(file, 'utf8')
  // const size = 10 * 10000
  const size = 16
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    secret,
    Buffer.alloc(size, 0)
  )
  cipher.update(content, 'utf8')
  // 加密后的结果：e2a927165757acc609a89c093d8e3af5

  const data = cipher.final('hex')
  console.log(data)
  fse.writeFileSync(file + '-en', data)

  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    secret,
    Buffer.alloc(size, 0)
  )
  decipher.setAutoPadding(false) // !!! 添加这行代码
  decipher.update(data, 'hex')
  console.log(decipher.final('utf8')) // 解密后
}

module.exports = {
  desc: 'encrypt & decrypt',
  func: main,
}
