const bcrypt = require('bcrypt')

const rounds = 5
const password = 'Admin1234!'

console.log(password)

bcrypt.hash(password, rounds, (err, hash)=>{
  if(!err) console.log(hash)
  else console.error(err)
  // To Validate if the password corresponds to the hash
  bcrypt.compare(password, hash, (err, res)=>{
    if(!err) console.log(res)
    else console.error(err)
  })
})
