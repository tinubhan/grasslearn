import { useState } from "react";

const Counter=() => {
    //let count=0
    //userState k parameter me initial value of Count
    let [count,setCount]=useState(0)
    function handleAddClick(){
       // count+=1;
       setCount(count+1)
    }

    function handleSubClick(){
       // count-=1;
       setCount(count-1)
    }
    return(
    <>
    <h1> Counter Component</h1>
    <h3> Count is : {count}</h3>
    {/* Now with ternary you have to give else condition also, so we will change this  */}
    {count==0?<p>You have reached the last limit </p> : <></>}
    {count==10?<p>You have reached the max limit </p> : <></>}
    {count<10 && (<button onClick={handleAddClick}>AddClick</button>)}
    {count>0 && (<button onClick={handleSubClick}>SubClick</button>)}
    </>
    )
    
}
export default Counter