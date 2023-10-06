let arr=["harsh","rahul","pinki","rekha"]

let str2=arr.filter((a)=>{
    let str =(a)
    str=str.toString()
    console.log(str)
    if(str.includes("a"))
    {
        return str
    }
})
console.log(str2)