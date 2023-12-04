let str="Tall apples are of red color"
// not starting with A
let pattern=/\b[b-z]\w+/gi
let pattern1=/\b[^a\s]+/g  // a and white space ko chodkar sab words ajaye
pattern3=/^[aeiou]/gi  

// ^ --> starting of string
// ^ --> inside word if you use its negate 
console.log(str.match(pattern1))
console.log(pattern3.test(str))