const fs = require('fs');

const read = (path, cb) => {
  fs.readFile(path, (err, data)=>{
    if(!err) console.log(data.toString())
    else console.error(err)
  });
}

read(__dirname + '/file.txt')

const write = (path, content, cb) => {
  fs.writeFile(path,  content, (err)=>{
    if(err) console.error(err)
    else console.log('File write operation success!')
  })
}

write(__dirname + '/file1.txt', 'A new file has been created!', console.log)

const remove = (path, cb) => {
  fs.unlink(path, (err)=>{
    if(err) console.error(err)
    else console.log('File has been removed')
  })
}

remove(__dirname + '/file1.txt', console.log)

