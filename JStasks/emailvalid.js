let form=document.getElementById("myform")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value;
    let pattern=/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/gi

    let result=pattern.test(email)
    let spanmessage=document.getElementById("error")
    if(result==false)
    {
        document.getElementById("email").style.borderColor="red"
        spanmessage.textContent="entered incorrect email"
        spanmessage.style.color="red"
    }
    else{
        document.getElementById("email").style.borderColor.preventDefault()
        spanmessage.textContent=""
    }
})