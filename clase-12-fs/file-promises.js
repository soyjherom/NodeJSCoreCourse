const fs = require('fs')

const write = (path, content, cb) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (e) => {
      if(e) reject(e)
      else resolve(cb('file has been created successfully'))
    })
  })
}

const read = (path, cb) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (e, d)=>{
      if(e) reject(e)
      else resolve(cb(d.toString()))
    })
  })
}

const remove = (path, cb) => {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (e)=>{
      if(e) reject(e)
      else resolve(cb('File has been removed successfully'));
    })
  })
}

const fileName = __dirname + 'promiseFile.txt'
const content = 'This is a content file.'
const cons = (message) => console.log(message)

write(fileName, content, cons)
  .then(read(fileName, cons))
  .then(remove(fileName, cons))
  .catch((e)=>console.error(e))