let arr=[10,20,30]

// arr.forEach(myFunc)
// {

// }


function myFunc(a)
{
    let newStr= `Hi ${a}`
console.log(newStr)
}

arr.forEach( (a)=>{
//     let newStr= `Hi ${a}`
// console.log(newStr) 
})

arr.forEach(function (a){
    let newStr= `Hi ${a}`
    console.log(newStr)  
})