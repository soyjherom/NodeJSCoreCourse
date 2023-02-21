const fs = require('fs')

const stream = require('stream')
const Transform = stream.Transform;

class MyUpperCase extends Transform{
  Transform.call(this)
}

MyUpperCase.prototype._transform = (chunk, codif, cb) => {
  chunkUpperCase = chunk.toString().toUpperCase()
  this.push(chunkUpperCase)
  cb()
}

const upperCase = new MyUpperCase()

const readableStream = fs.createReadStream(__dirname+'/input.txt')
readableStream.setEncoding('UTF8')
readableStream
  .pipe(upperCase)
  .pipe(process.stdout)