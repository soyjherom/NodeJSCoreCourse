const hello = (name) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() =>{
      console.log(`Hello, ${name}`)
      resolve(name)
    },1500)
  })
}

const speak = (name) => {
  return new Promise((resolve, reject)=>{setTimeout(() =>{
      console.log(`Bla Bla Bla Bla Bla...`)
      reject(`${name} hubo un error`)
    }, 1000)
  })
}

const bye = (name) => {
  return new Promise((resolve, reject)=>{setTimeout(() =>{
    console.log(`Adios ${name}`)
    resolve()
  }, 1000)})
}

console.log('Starting the process...')
hello('Carlos')
  .then(speak)
  .then(speak)
  .then(speak)
  .then(speak)
  .then(bye)
  .then(()=>{console.log('Finishing the process')})
  .catch(e=>console.error(e))