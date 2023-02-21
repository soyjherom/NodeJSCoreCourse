// To execute tasks in the background seeing what is happening with
// them we can use spawn

const { spawn } = require('child_process')

const process = spawn('ls',['-halt'])

console.log(process.pid)
console.log(process.connected)

process.stdout.on('data', (info)=>{console.log(info.toString())})

