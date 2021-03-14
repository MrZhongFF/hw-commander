const path = require('path')
const glob = require('glob')
const cp = require('child_process')
const fse = require('fs-extra')

async function main() {
  const avis = glob.sync('*.avi')
  avis.forEach((item) => {
    const input = path.resolve(item)
    const name = path.basename(input)
    let output = name.replace(/\.avi$/, '.mp4')
    output = path.join('/Users/versace/Downloads/小飞手录像', output)
    console.log('handling:', input)
    if (fse.existsSync(output)) {
      console.log('exist:', input)
    } else {
      try {
        cp.execSync(`ffmpeg -i "${input}" -vf scale=480:270 "${output}"`)
      } catch (e) {
        console.log('error!!!!!', e)
      }
    }
    console.log('done:', input)
  })
}

module.exports = {
  desc: '.avi to .mp4',
  func: main,
}
