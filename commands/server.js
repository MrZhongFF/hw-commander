const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const utils = require('../utils/utils')
const range = require('koa-range')

module.exports = {
  desc: 'server',
  func: function() {

    const app = new Koa()

    const staticPath = process.cwd()

    app.use(range)

    app.use(static(staticPath))


    app.use( async ( ctx ) => {
      // ctx.body = 'hello world'
      ctx.status = 401
      // ctx.throw('error msg')
      ctx.body = {
        code:1
      }
    })

    const port = 8099
    app.listen(port, () => {
      let ip = utils.getIPv4IPAddress()
      let url = `http://${ip}:${port}`
      utils.outputQRCodeOnTerminal(url)
    })
  }
}