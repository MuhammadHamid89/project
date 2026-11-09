import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./features/counter/counterSlice";
export default function ReduxHook(){
  const count=useSelector((state)=>state.counter.count) // yha hum sirf os property ko hi uppdate kry gy na k puri state
  const dispatch=useDispatch()
  return(
    <>
    <h2>{count}</h2>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </>
  )
}