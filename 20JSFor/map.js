// const numbers=[10,21,234,23]

// let result= numbers.map((a)=>
// {
//     return a*10
// })
// console.log(result)
let b=0
let arr=[2,4,6,8]
 
arr.forEach((a)=>{
     b=b+a   
})
// console.log(b)

let result=arr.reduce((prev,a)=>
{
    console.log(`prev = ${prev}`)
    console.log(`a = ${a}`)
    return prev+a
},0) //This 0 implies the first value of prev

console.log(result)
