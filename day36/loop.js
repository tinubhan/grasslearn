function letvar(){
    var a =10;
    if(true)
    {
        var a=20;
        console.log(a)
    }
    console.log(a)
}
function letvar1(){
    let a =10;
    if(true)
    {
        let a=20;
        console.log(a)
    }
    console.log(a)
}

letvar()
letvar1()
// var is function scoped , throughout function value can change
//let is block scoped, so if changed under IF{} then its value will only be changed under if.

const car={
    color: "red",
    model : 2013,
    sitting : 4,
    company: "toyota",
    price:200000
}
for(let i in car)
{
    console.log(car[i])
}

