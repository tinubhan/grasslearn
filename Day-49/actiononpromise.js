let myTask = new Promise((resolve, reject) => {
    let submission = true;
    setTimeout(() => {
      if (submission) {
        resolve(10);
      } else {
        reject("Not fulfiled");
      }
    }, 1000);
  });
  
  // console.log(myTask);
//   myTask
//     .then((a) => {
//       console.log("check", a);
//       return a
//     }).then((sec)=>{
//         console.log(sec*20)
//     })
//     .catch((err) => {
//       console.error(err);
//     });

async function getValue()
{
    let result=await myTask
    console.log(result)
}

getValue()