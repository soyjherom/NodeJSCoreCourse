const { spawn } = require('child_process')

const asyncProcess = spawn('node',[`${__dirname}/secondThread.js`])

asyncProcess.stdout.on('data', (output)=>
  console.log(output.toString()))

console.log(__dirname)

let i = 0
setInterval(()=>{
  console.log(i)
  i ++
}, 1000)