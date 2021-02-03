const Koa = require('koa')
const staticKoa = require('koa-static')
const range = require('koa-range')
const proxy = require('koa-proxies')
const utils = require('../utils/utils')

/**
 * 开启静态文件服务器，允许配置代理
 */
module.exports = {
  desc: 'server',
  func () {
    const app = new Koa()
    app.on('error', (err) => {
      console.log('server error', err)
    })
    app.use(
      proxy('/backend', {
        target: 'http://zy-admin-web-zhenxuanziyan.apps.dev.ht.paas.cmic.cn/',
        changeOrigin: true,
        logs: true,
        events: {
          error(e) {
            console.log(e)
          },
        },
      })
    )

    const staticPath = process.cwd()

    app.use(range)

    app.use(staticKoa(staticPath))

    app.use(async (ctx) => {
      // ctx.body = 'hello world'
      ctx.status = 401
      // ctx.throw('error msg')
      ctx.body = {
        code: 1,
      }
    })

    const port = 8008
    app.listen(port, () => {
      const ip = utils.getIPv4IPAddress()
      const url = `http://${ip}:${port}`
      utils.outputQRCodeOnTerminal(url)
    })
  },
}
