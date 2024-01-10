import { useSelector,useDispatch } from "react-redux"
import { updateName } from "../store/actions/user"
import { useState } from "react"

export const UserComponent=()=>{
    const dispatch=useDispatch()
    const userValue=useSelector((state)=>state.user)
    const userName=userValue.name
    const [name,setName]=useState()
    return(
        <>
        <h1>{userName}</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={() => dispatch(updateName(name))}>Change Name</button>
        </>
    )
}