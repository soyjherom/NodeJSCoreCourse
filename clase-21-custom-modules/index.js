//Right way to do it
const { greet, prop1 }  = require('./modulos/myModule')

greet()
console.log(prop1)

// Old way to do it
const myEntireModule = require('./modulos/myModule')
console.log(myEntireModule.prop1)
console.log(myEntireModule.greet())