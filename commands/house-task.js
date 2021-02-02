const cp = require('child_process')

function test(msg) {
  cp.execSync(
    'cd /Users/versace/dev/house-renting/house-assets/server && scp -r root@hillswind.top:/var/www/douyin-catch/current/house-assets ./ && ssh root@hillswind.top "rm -r /var/www/douyin-catch/current/house-assets" && hw rotate-img'
  )
}

module.exports = {
  desc: 'just a test',
  func: test,
}
