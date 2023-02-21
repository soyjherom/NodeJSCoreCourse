const http = require('http')

const port = 3015

http.createServer((request, response)=>{
  console.log(`New request: ${request.url}`)
  response.writeHead(201,{'Content-Type':'http'})
  switch(request.url){
    case '/hello':
      response.write('<div><h2>Hello world!</h2></div>')
      break
    default:
      response.write('<div><h1>Welcome to Home</h1></div>')
  }
  response.end()
}).listen(port)

console.log(`Basic Node.JS HTTP server listening on ${port}`)