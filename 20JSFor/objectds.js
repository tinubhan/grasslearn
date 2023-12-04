const car={
    color: "red",
    model: 2013,
    sitting: 4,
    company: "toyota",
    price:200000
}
console.log(car)
console.log(car.company)
console.log(car["company"]) //toyota

car.sitting=6
console.log(car.sitting)

for(let prop in car)
{
    console.log(car[prop])
}