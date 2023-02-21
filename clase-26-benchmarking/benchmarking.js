let sum = 0
console.time('counter')
for(let i = 0; i< 1000000000; i++){
  sum += i
}
console.timeEnd('counter')
console.log(sum)

const myAsyncCalc = () => {
  return new Promise((res, rej) => {
    try{
      setTimeout(()=>{
        res('Finished')
      },3000)
    }catch(e){
      rej(e)
    }
  })
}
//This is how you take the time of an async function
console.time('asynctime')
myAsyncCalc()
  .then(()=>console.timeEnd('asynctime'))