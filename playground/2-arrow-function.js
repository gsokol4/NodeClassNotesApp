/*
const square = function (num) {
  return num * num
}
*/
/*
const square = (x) => {
  return x * x
}
*/

// console.log(square(9))

const event = {
  name: 'Birthday Party',
  guests: ['gabriel', 'parvin', 'bika'],
  guestList () {
    console.log('guest list for ' + this.name)
    this.guests.forEach((guest) => console.log(`${guest} is attending this ${this.name}`))
  }
}

event.guestList()
