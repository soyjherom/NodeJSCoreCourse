const firstFunction = async (firstCallback, secondCallback, thirdCallback) => {
  setTimeout(() => {
    console.log('First execution')
    firstCallback(secondCallback, thirdCallback)
  }, 3000)
}

const secondFunction = (firstCallback, secondCallback) => {
  setTimeout(()=>{
    console.log('Second execution')
    firstCallback(secondCallback)
  }, 4000)
}

const thirdFunction = (callbackFunction) => {
  setTimeout(()=>{
    console.log('Third execution')
    callbackFunction()
  }, 1000)
}

console.log('Start')
firstFunction(secondFunction, thirdFunction, ()=>{console.log('End')})