const program = require('commander')
const commands = require('./commands')

program.version(require('./package').version).usage('<command> [options]')

Object.keys(commands).forEach((key) => {
  const one = commands[key]
  program
    .command(`${key} [arg]`)
    .description(one.desc || '')
    .action((arg) => {
      return one.func(arg)
    })
})

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
