import { useState,useEffect } from "react";
// export default function Effect_useCase(){
//     const[users,setUsers]=useState([])
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>setUsers(data))
//     },[])
//     return(
//         <>
//         <ul>
//             {users.map((user)=>(
//                 <li key={user.id}>
//                     {user.name}
//                 </li>
//             ))}
//         </ul>
//         </>
//     )
// }


// api fetch with button
// export default function Effect_useCase(){
//     const[users,setUsers]=useState([])
//     const[load,setLoad]=useState(false)
//     useEffect(()=>{
//         if(load){
//         fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>setUsers(data))
//         }
//     },[load])
//     return(
//         <>
//         <ul>
//             <button onClick={()=>setLoad(true)}>click me</button>
//             {users.map((user)=>(
//                 <li key={user.id}>
//                     {user.name}
//                 </li>
//             ))}
//         </ul>
//         </>
//     )
// }



// window resize
// export default function ResizeWindow(){
//     const [width,setWidth]=useState(window.innerWidth)
//     useEffect(()=>{
//         const handleResize=()=>setWidth(window.innerWidth)
//         window.addEventListener('resize',handleResize)
//         return ()=>{
//             window.removeEventListener('resize',handleResize)
//         }
//     },[])
//     return(
//         <>
//         <h2>width: {width}px</h2>
//         </>
//     )
// }


// title  update
// export default function Counter(){
//     const [count,setCount]=useState(0)
//     useEffect(()=>{
//         document.title=`count: ${count}`
//     },[count])  // yaha count ni likhy gy to title update ni hoga
//     return(
//         <>
//         <button onClick={()=>setCount(count+1)}>click count :{count}</button>
//         </>
//     )
// }


// timer update
// export default function Timer(){
//     const [seconds,setSeconds]=useState(0)
//     useEffect(()=>{
//         const id=setInterval(()=>{
//             setSeconds((prev)=>prev+1)
//         },1000)
//         return ()=>clearInterval(id)
//     },[])
//     return(
//         <>
//         {seconds}
//         </>
//     )
// }