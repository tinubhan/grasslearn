let name1=document.getElementById("name").value
let email=document.getElementById("email")
let age=document.getElementById("age")
let gender=document.getElementById("gender")
let subscribe=document.getElementById("subscribe")
let button=document.getElementById("button")
let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name1=document.getElementById("name").value
  console.log(name1)
})


// let form = document.getElementById("myForm");
// let result = document.getElementById("result");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let age = document.getElementById("age").value;

//   let radio = document.querySelector('input[name="gender"]:checked').value;
//   const checked = document.getElementById("subscribe").checked;

//   let subscribe = checked ? "Subscribed😉" : "Not Subscribed😒";

//   result.innerHTML = ` Name : ${name}<br/> ,
//    Email:${email}<br/> , age:${age}<br/> ,
//     Gender:${radio}<br/> , Subscribe:${subscribe} `;
// })
