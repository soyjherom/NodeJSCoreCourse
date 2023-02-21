process.on('uncaughtException',(err, origin)=>{
  console.warn(`An uncaught exception happened!`)
  console.error(err)
  console.info(origin)
})

process.on('uncaughtRejection')

process.on('beforeExit', ()=>{console.log('Process is about to end')})

// Breaks the event loop connection
process.on('exit',()=>{console.log('Process finished')})