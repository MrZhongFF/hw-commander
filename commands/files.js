const fs = require('fs')
const path = require('path')

function getFiles(dir) {
    dir = dir || './'
    const pwd = process.cwd()
    let files = fs.readdirSync(path.join(pwd, dir))
    let out = []
    let reg = /[\.cpp|\.h]$/
    files.forEach((item, i) => {
        if (reg.test(item)) {
            out.push(`${dir}${item}`)
        }
    })
    fs.writeFileSync(path.join(pwd, './out.js'), JSON.stringify(out, null, 4))
    console.log('done', out)
}

module.exports = {
    desc: 'get c++ files',
    func: getFiles,
}