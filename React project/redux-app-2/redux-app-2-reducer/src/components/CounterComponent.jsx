import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../store/actions/counter"

export const CounterComponent=()=>{
    const dispatch=useDispatch()
    const countValue=useSelector((state)=>state.counts)
    const count=countValue.count
    console.log(count)
    return(
        <>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
        
    )
}
