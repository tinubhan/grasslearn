let i=0
async function fetchUserData(inc)
{

    let response=await fetch(`https://jsonplaceholder.typicode.com/users/${inc}`)
    let result= await response.json()
    console.log(result)
    return result
   
}
async function fetchUserPostData(inc)
{
    let response=await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${inc}`)
    let result= await response.json()
    console.log(result)
    return result
   
}
async function updateUserData(inc){
    let UserData=await fetchUserData(inc)
    //console.log(UserData)
    let name=document.getElementById("name")
    let email=document.getElementById("email")
    let phone=document.getElementById("phone")
    name.innerHTML=UserData.name
    email.innerHTML=UserData.email
    phone.innerHTML=UserData.phone
}


async function updateUserPost(inc){
    let UserData=await fetchUserPostData(inc)
    //console.log(UserData)
    let ulist=document.getElementById("posts")
    ulist.innerHTML=""
    UserData.map((obj1)=>{
        
        let listTile=document.createElement("li")
        listTile.innerHTML=obj1.title
        ulist.appendChild(listTile)
    })
    
 
}

let increBtn=document.getElementById("increment")
increBtn.addEventListener("click",()=>
{
    i=i+1
    updateUserData(i)
    updateUserPost(i)
    
})
let decreBtn=document.getElementById("decrement")
decreBtn.addEventListener("click",()=>
{
    i=i-1
    updateUserData(i)
    updateUserPost(i)
    
})


