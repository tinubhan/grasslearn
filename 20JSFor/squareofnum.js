// function squarenum(a, call)
// {
//     let result = a*a
//     call(result)
// }
// function displaysqr(sqrnum)
// {
//     console.log(`square of a no is ${sqrnum}`)
// }

// squarenum(5,displaysqr)

function calculate(a,b,call)
{
    call(a,b)
}
function add(a,b)
{
    let result=a+b
    console.log(result)
}
function diff(a,b)
{
    let result=a-b
    console.log(result)
}

calculate(5,4,diff)
