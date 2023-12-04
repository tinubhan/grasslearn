function compareFunc(a,b)
{
    
    if(a<b)
    return -1
    if(a==b)
    return 0
    if(a>b)
    return 1
}

// ompareFunc([10,30,5,60,7])
// console.log(result)
let arr=[10,30,5,60,7]
let result=arr.sort(compareFunc)
console.log(result)