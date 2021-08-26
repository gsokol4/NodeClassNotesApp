const fs = require('fs')

function getNotes () {
  return 'your notes ...'
}

const addNotes = function (title, body) {
  const notes = loadNotes()
  console.log(notes)
}

const loadNotes = function (params) {
  try {
    const dataBuffer = fs.readFileSync('notes.js')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (e) {
    return []
  }
  
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes
}
