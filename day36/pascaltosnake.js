let pascalcase="PascalCase"
let indexCaps=0
let arr=[]
for(let i=0;i<pascalcase.length;i++)
{
    arr[i]=pascalcase.charAt(i)
}
for(let i=1;i<pascalcase.length;i++){
    if(pascalcase.charAt(i)==pascalcase.charAt(i).toUpperCase())
    {
        indexCaps=i
        
    }
}    
arr.splice(indexCaps,0,'_')
for(let i=0;i<arr.length;i++)
{
    arr[i]=arr[i].toLowerCase()
    
}
let res=arr.join("")
console.log(res)
 

    
    
