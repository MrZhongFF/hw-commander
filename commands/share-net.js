const cp = require('child_process')

function share(msg) {
  cp.exec('sudo pfctl -e -f /etc/pf.conf')
}

module.exports = {
  desc: 'share net work',
  func: share,
}
