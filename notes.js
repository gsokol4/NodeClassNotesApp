const fs = require('fs')

function getNotes () {
  return 'your notes ...'
}

const addNotes = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title
  })
  if (duplicateNotes.length === 0) {
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

function removeNotes (title) {
  console.log('the title: ' + title + '- has been removed successfully')
}

const saveNotes = function (notes) {
  const jsonData = JSON.stringify(notes)
  fs.writeFileSync('notes.json', jsonData)
}

const loadNotes = function (params) {
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
  removeNotes: removeNotes
}
