const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'your notes ...'
}

const readNotes = (title) => {
  const notes = loadNotes()
  const match = notes.find((note) => note.title === title)
  if (typeof (match) === 'undefined') {
    console.log('no match found')
  } else {
    console.log('\n', '\n', chalk.blue(match.title))
    console.log(match.body, '\n', '\n')
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blue.bold('+++++++++++notes++++++++++++', '\n', '______________________________', '\n'))
  notes.forEach(note => {
    console.log(chalk.blue.bold(note.title))
    console.log(note.body, '\n', '_____________________________________', '\n')
  })
}

const addNotes = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)
  if (!duplicateNote) {
    notes.push(
      {
        title: title,
        body: body
      }
    )

    saveNotes(notes)
    console.log('new note added')
  } else {
    console.log('note title has already been taken')
  }
}

const removeNotes = (title) => {
  const notes = loadNotes()
  const checkTitle = notes.filter((note) => {
    return note.title !== title
  })
  if (checkTitle.length < notes.length) {
    saveNotes(checkTitle)
    console.log(chalk.bgGreen('the title: ' + title + ' - has been removed successfully'))
  } else {
    console.log(chalk.bgRed('no title found with this name. it may have already been removed else check spelling'))
  }
}

const saveNotes = (notes) => {
  const jsonData = JSON.stringify(notes)
  fs.writeFileSync('notes.json', jsonData)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
}
