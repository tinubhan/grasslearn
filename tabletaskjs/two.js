let button=document.getElementById("button")
let table=document.getElementById("table")
let stuArray=[]


button.addEventListener("click",() => {
   
    let name1=prompt("Please provide your name")
    let age1=prompt("Please provide your age")
    let id1=prompt("Please provide your id");
    let newStu={name:name1,age:age1,id:id1};
    stuArray.push(newStu)
    console.log(stuArray)
    updateProfile()
})

function updateProfile(){
    let tbody=document.getElementById("tbody")
    stuArray.forEach((a)=>{
        let trow=document.createElement("tr")
    
        trow.innerHTML=`<td>${a.name}</td>
        <td>${a.age}</td>
        <td>${a.id}</td>`
        tbody.appendChild(trow)
    })
}

    