async function fetchUserData(){
    let result =await fetch("https://jsonplaceholder.typicode.com/users") //fetch returns a promise
    let finaldata = await result.json()    //since data returned is in stringfy format , we need to convert to parse
    //console.log(finaldata)
    return finaldata
}


let btn=document.getElementById("myBtn")
let i=0
if(i<10)
{
    btn.addEventListener("click",async ()=>{
        // let i=0
        let tbody=document.getElementById("tableBody")
        let tdata=document.createElement("tr")
        let users= await fetchUserData()
        //console.log(users)
            console.log(i)
            tdata.innerHTML=`<tr>
            <th>${users[i].id}</th>
            <th>${users[i].name}</th>
            <th>${users[i].email}</th>
            <th>${users[i].address.city}</th>
        </tr>`
        tbody.appendChild(tdata)
        
        i+=1
    })
}
else{
    console.log("Nothing to display")
}
