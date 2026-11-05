// without react.memo
import { useState } from "react"
import MemoChild from "./ReactMemo_Child"
export default function memo(){
    const [count,setCount]=useState(0)
    const [name]= useState('waleed')
    return(
        <>
        <h2>count : {count}</h2>
        <button onClick={()=> setCount(count+1)}>increase</button>
        <MemoChild name={name} />
        </>
    )
}