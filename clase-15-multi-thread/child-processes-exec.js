// This enable us to execute another sub processes sync or async that works 
// in the background while our current thread is working 

const { exec } = require('child_process')

exec('ls -halt', (err, stdout, stderr)=>{
  if(err) {
    console.error(err)
    return false
  }
  console.log(stdout)
})

const path = '/Users/jheromchacon/sd/platzi/JS-BackEnd-Route/curso-de-fundamentos-de-Node-js/clase-12/file-promises.js'
exec(`node ${path}`, (err, stdout, stderr)=>{
  if(err){
    console.error(err)
    return false
  }
  console.log(stdout)
})

exec(`node ${__dirname}/secondThread.js`, (err, stdout, stderr)=>{
  if(err){
    console.error(err)
    return false
  }
  console.log(stdout)
})

console.log(__dirname)

let i = 0
setInterval(()=>{
  console.log(i)
  i ++
}, 1000)