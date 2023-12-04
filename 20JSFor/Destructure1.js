const person={
    name: "tinu",
    age: 23
}
//destructure an object
let {name,age}=person
let {name:name1}=person

console.log(name1)
console.log(name)



let arr=["tinu","chinu","lona","tanu"]
let[fname,,tname]=arr
console.log(fname)