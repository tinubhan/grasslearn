let str= "my link is https://harsh.com and http://harsh.dev"

let pattern=/https?:\/\/[a-z]+.[a-z]+/gi

//? --> before ? the letter is present or not (0 or 1)
//+--> 1 or more
// * --> 0 or more
// \S-> no white space
// \s-> white space

// \w--> word [a-zA-Z0-9_]
// \W--> not a word
let pattern2=/https?:\/\/\S+/gi
console.log(str.match(pattern2))