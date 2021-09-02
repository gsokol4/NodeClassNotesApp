const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')
const { describe, demandOption } = require('yargs')

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
  handler (argv) { return notes.addNotes(argv.title, argv.body) }
})
yargs.command({
  command: 'remove',
  describe: 'removes a note from the list',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv) { return notes.removeNotes(argv.title) }
})
yargs.command({
  command: 'list',
  describe: 'list all notes stored in the file',
  handler () { return notes.listNotes() }
})
yargs.command({
  command: 'read',
  describe: 'reads the saved notes to the user',
  builder: {
    title: {
      describe: 'title of the note to read',
      demandOption: true,
      type: 'string'
    }
  },
  handler () { return notes.readNotes()}
})

yargs.parse()
