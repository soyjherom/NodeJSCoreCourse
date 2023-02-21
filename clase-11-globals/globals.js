let i = 0
let interval = setInterval(()=>{
  console.log(i)
  if(i===3) clearInterval(interval)
  i++
},1000)

setImmediate(()=>{
  console.log('Hello')
})

globalThis.globalVar='myVar'
console.log(globalVar)