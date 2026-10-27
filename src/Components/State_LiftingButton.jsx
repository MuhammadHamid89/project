// import { useState } from "react"
// function Lift(){
//     const [count,setCount]=useState(0)
//     return(
        
//         <>
//         <button onClick={()=>setCount(count+1)}>increase {{count}}</button>
//         </>
//     )
// }
// export default Lift



function Lift({setCount}){
    return(
        <>
        <button onClick={()=>setCount((prev)=>prev+1)}>increase</button>
        <button onClick={()=>setCount((prev)=>prev-1)}>decrease</button>
        </>
    )
}
export default Lift