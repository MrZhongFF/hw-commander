const fs = require('fs')

// 列出 mac 的自启动脚本配置（plist）
function plist(msg) {
  const paths = [
    '/Library/LaunchDaemons',
    '/Library/LaunchAgents',
    '/Users/versace/Library/LaunchAgents',
    '/System/Library/LaunchDaemons',
    '/System/Library/LaunchAgents',
  ]

  for(let i=0; i<paths.length; i++) {
    const item = paths[i]
    const files = fs.readdirSync(item)
    // console.log('files', files)
    files.forEach((file) => {
      if (file.includes('soft')) {
        console.log('hit', item + '/' + file )
      }
    })
  }
}

module.exports = {
  desc: 'just a plist',
  func: plist,
}
