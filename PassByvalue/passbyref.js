let obj={name:"Tinu",age:20}
let subobj={...obj}
subobj.name="Johny"
console.log(obj)
console.log(subobj)

//if you do not use spread operator then subobj=obj , then name for both will change. It is called Pass by reference