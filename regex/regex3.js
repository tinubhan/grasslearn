// let str= "Behive is my book wbhich of $50 and $500"

// //starting with b no digits 
// let pattern= /\bb[a-z]{3}\b/gi
// // \d--> [0-9]
// // \b --> word boundary , start with
// let result= str.match(pattern)
// console.log(result)

let str= "this is my birthday 30/13/2011 and it is greater tahn 20/11/2009"

let pattern= /\d{2}\/\d{2}\/\d{4}/g
let result= str.match(pattern)
console.log(result)
