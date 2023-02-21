const myAsyncFunction = async () => {
  setTimeout(() => {
    console.log('Hello world!')
  }, 1000)
}
console.log('Start')
myAsyncFunction()
console.log('End')
