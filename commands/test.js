function test(msg) {
  console.log('test:', msg)
  const crypto = require('crypto')
  console.log(crypto.getHashes())

  const md5 = crypto.createHash('md5')

  // update 中输入要计算的原始值
  const result = md5.update('a').digest()

  // 输出：0cc175b9c0f1b6a831c399e269772661
  console.log(result.toString('hex'))

  console.log('aa', typeof Init8Array)
}

module.exports = {
  desc: 'just a test',
  func: test,
}
