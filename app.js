const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')
const { describe } = require('yargs')

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'adds a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'

    },
    body: {
      describe: 'body of note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title)
  }
})
yargs.command({
  command: 'remove',
  describe: 'removes a note from the list',
  handler: function (params) {
    console.log('removed a note')
  }
})
yargs.command({
  command: 'list',
  describe: 'list all notes stored in the file',
  handler: function (params) {
    console.log('show list')
  }
})
yargs.command({
  command: 'read',
  describe: 'reads the saved notes to the user',
  handler: function (params) {
    console.log(chalk.blue('reading text to user'))
  }
})

yargs.parse()
