let obj={name:"Tinu",age:20,
details:{phone:908}}
//let subobj={...obj}    shallow copy
//let subobj=Object.assign({},obj)   //deep copy
let subobj=JSON.parse(JSON.stringify(obj))
subobj.name="Johny"
subobj.details.phone=919
console.log(obj)
console.log(subobj)