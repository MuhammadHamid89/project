// import { useState } from "react";
// function UseState(){
//   const[count,setCount]=useState(0)
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>press this</button>
//     </>
//   )
// }
// export default UseState


// import { useState } from "react"
// function UseState(){
//     const [name,setName]=useState("")
//     return(
//         <>
//         <h2>hello,{name}</h2>
//         <input value={name} onChange={(e)=>setName(e.target.value)} style={{border:'2px solid black'}} />
//         </>
//     )
// }
// export default UseState


// import { useState } from "react"
// function UseState(){
//     const[dark,setDark]=useState(false)
//     return(
//         <>
//             <button onClick={()=>setDark(!dark)} style={{border:'2px solid black', padding:'1px', margin:'1px'}}>press this</button>
//             <h2>{dark ? "dark mode" : 'light mode'}</h2>
//         </>
//     )
// }
// export default UseState

import './usestate.css'
import { useState } from "react"
function Counter(){
    const [count,setCount]=useState(0)
    return(
        <>
            <h1>{count}</h1>
            <button className="btn-inc" onClick={()=>setCount(count+1)}>increment</button>
            <button className="btn-dec" onClick={()=> setCount(count-1)}>deccrement</button>
            <button className="btn-reset" onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}
export default Counter