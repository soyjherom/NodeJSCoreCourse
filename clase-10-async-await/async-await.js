const hello = async (name) => {
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
      // reject(`${name} hubo un error`)
      resolve()
    }, 1000)
  })
}

const bye = (name) => {
  return new Promise((resolve, reject)=>{setTimeout(() =>{
    console.log(`Adios ${name}`)
    resolve()
  }, 1000)})
}

const main = async() => {
  console.log('Starting the process...')
  await hello('Carlos')
  await speak()
  await bye('Carlos')
  console.log('Finishing the process')
}

main()