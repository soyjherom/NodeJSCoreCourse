//How to reserve memory spaces

const buffer = Buffer.alloc(1);

console.log(buffer)

const buffer1 = Buffer.from([1,2,3])

console.log(buffer1)

const buffer2 = Buffer.from('Hello')

console.log(buffer2)
console.log(buffer2.toString())

const abc = Buffer.alloc(26)
console.log(abc)
for(let i = 0; i < 26; i++){
  abc[i] = i + 97
}

console.log(abc.toString())

abc.map(i=>console.log(
  String.fromCharCode(
    parseInt(i.toString()))
    .toUpperCase()
  )
)
