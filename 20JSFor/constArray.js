const myObj = {
    name: "John",
    age: 30,
    cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
    ]
}

// console.log(myObj.cars[0])

// console.log(myObj.cars)
console.log(myObj.cars[1].models)
console.log(myObj.cars.length)

for(let i=0;i<myObj.cars.length;i++)
{
    let vararray=myObj.cars[i]
    vararray["color"]="red"
    console.log(vararray)
}
