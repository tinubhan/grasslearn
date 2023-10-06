// function greet(call){
//     console.log("Hello")
//     call()
// }

// function Goodbye(){
//     console.log("Godbye")
// }

// function GoodNight(){
//     console.log("GoodNight")
// }

// greet(GoodNight)

function sum(a, b, call)
{
    let result=a+b;
    call(result)
}
function diff(a, b, call)
{
    let result=a-b;
    call(result)
}
function printmsg(result1)
{
    console.log(`The result is ${result1}`)
}

sum(4,2,printmsg)