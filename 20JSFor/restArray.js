
function restAr(...value)
{
    console.log(value)
     let result=value.reduce((prev,a)=>{
        
        return prev+a
     })
   return result
}
let result1=restAr(10,20,3,4,5,6)
console.log(result1)

// rest ->  operator
