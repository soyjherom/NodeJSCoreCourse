const os = require('os')

console.log(os.arch())
console.log(os.platform())
console.log(os.cpus())
console.log(os.constants) // Errors and system signals
console.log(os.freemem())

const SIZE = 1024
const kb = (bytes) => { return bytes / SIZE }
const mb = (kbytes) => { return kb(kbytes) / SIZE }
const gb = (mbytes) => { return mb(mbytes) / SIZE }

const sizeInBytes = os.freemem()
console.log(`Free memory in Megabytes ${mb(sizeInBytes)}`)
console.log(`Total Memory of the system in GigaBytes: ${gb(os.totalmem())}`)

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.networkInterfaces())