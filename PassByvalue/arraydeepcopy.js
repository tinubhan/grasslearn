let arr=[10,20,30,[5,4,]]
let subarray=JSON.parse(JSON.stringify(arr))
//let subarray=arr
subarray[0]=300
subarray[3][0]=300
console.log(arr)
console.log(subarray)