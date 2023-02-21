const anotherFunction = () => {
  itCrashes()
  console.log('Processing...')
}

const itCrashes = () => {
  return 3 + z
}

// The async functions should handle errors internally since they
// occurs in a separated thread
const itCrashesAsync = () => {
  setImmediate(()=>{
    try{
      return itCrashes()
    }catch(e) {
      console.error(`Async function error: ${e.message}`)
    }
  },1000)
}

try{
  // anotherFunction()
  itCrashesAsync()
}catch(e){
  console.error("Something went wrong!")
}

console.log('End of the thread')
