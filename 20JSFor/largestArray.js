function findMax(arr)
{
    let max=arr[0];
    arr.forEach((a)=>
    {
        if(a>max)
        {
            max=a
        }

    })
    return max
}

let result= findMax([-40,-60,-2,-10,-7])
console.log(result)





