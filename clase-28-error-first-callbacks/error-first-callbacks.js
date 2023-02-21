const myAsyncFx = () => {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      try{
        // const a = 1 + b
        res('Hello World')
      }catch(e){
        rej(`An error happened! ${e.message}`)
      }
    },1000)
  })
}

myAsyncFx()
  .catch(message=>console.error(message))
  .then(message=>console.log(message))