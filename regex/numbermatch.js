let str="my phone no is 555-555-5555 and 5555555555 and 555 555 5555 and 555.555.5555"

let pattern=/\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/gi
console.log(str.match(pattern))