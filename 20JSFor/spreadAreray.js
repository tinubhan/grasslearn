// let arr1=[10,2,3,40]
// let arr2=[10,2,3,40]

// let arr3=[...arr1, ...arr2]
// console.log(arr3)
//spread top
//rest bottom code
function restAr(...value)
{
    console.log(value)
     let result=value.reduce(prev,a)
     prev=prev+a
     return prev
}

let result1=restAr(10,20,3,4,5,6)
console.log(result1)