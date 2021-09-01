const fs = require('fs')
/*
const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday'
}
const json = JSON.stringify(book)

fs.writeFileSync('./playground/1-json.json', json)

const dataBuffer = fs.readFileSync('1-json.json')
const jsonData = dataBuffer.toString()
const data = JSON.parse(jsonData)
console.log(data.author)
*/

const buffer = fs.readFileSync('1-json.json')
const bufferToString = buffer.toString()
const json = JSON.parse(bufferToString)

json.name = 'Gabriel'
json.age = 27.5

const stringified = JSON.stringify(json)
fs.writeFileSync('1-json.json', stringified)
