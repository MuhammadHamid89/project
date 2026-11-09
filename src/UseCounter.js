import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./features/counter/counterSlice";
export default function useCounter(){
    const count= useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()

    return{
        count,
        increment : ()=>dispatch(increment()),
        decrement : ()=> dispatch(decrement())
    }
}