const program = require('commander')
const chalk = require('chalk')
const commands = require('./commands')

program.version(require('./package').version).usage('<command> [options]')

for (const key in commands) {
  const one = commands[key]
  program
    .command(`${key} [arg]`)
    .description(one.desc || '')
    .action((arg, cmd) => {
      one.func(arg)
    })
}

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
