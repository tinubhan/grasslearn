function sortArray(arr)
{
    let sortArr= arr.sort((a,b)=>a-b)
    
        let result=sortArr[sortArr.length-1]
        console.log(result)
    
}

sortArray([10,20,5,4])