const members = [
    { name: "Vijay Gupta", age: 20 },
    { name: "Yash Jangid", age: 40 },
    { name: "Firoz Khan", age: 41 },
    { name: "Amrit Srivastava", age: 17 },
    { name: "Chandraprakash Sharma" },
    { name: "Swpril Ahuja", age: 45 },
    { name: "Yogesh Khatri", age: 51 },
  ];
 let arraye=[]
  console.log(members)
  members.forEach((getObj)=>
  {
    // console.log(getObj.age)
    if(getObj.age>=41 && getObj.age<=61 && getObj.age!=undefined)
    {
        arraye.push(getObj)
        getObj.color="red"
    }
  })

  console.log(arraye)