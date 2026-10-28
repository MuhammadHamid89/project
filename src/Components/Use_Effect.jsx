import { useState,useEffect } from "react";
// export default function Effect(){
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         //side effect
//         console.log('hello use effect')
//         document.title=`count: ${count}`  // title my bi yhi ay ga
//     },[count]);
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>increment</button>
//         </>
//     )
// }


// example 2 fetch api;
// export default function Effect(){
//     const [users,setUsers]=useState([])
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>setUsers(data))
//     },[])
//     return(
//         <>
//         <ul>
//             {users.map((user)=>(
//                 <li key={user.id}>{user.name}</li>
//             ))}
//         </ul>
//         </>
//     )
// }



// fetch api with button

// export default function Effect(){
//     const [users, setUsers]=useState([])
//     const [fetchData,setFetchData]=useState(false)
//     useEffect(()=>{
//         if(fetchData){ // is my const wala fetchData use hova hain
//             fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>setUsers(data))
//         }
//     },[fetchData])
//     return(
//         <>
//         <button onClick={()=>setFetchData(true)}>click me</button>

//         <ul>
//             {users.map((user)=>(
//                 <li key={user.id}>{user.name}</li>
//             ))}
//         </ul>
//         </>
//     )
// }



// clean up function
export default function Effect(){
    const [seconds,setSeconds]=useState(0)
    useEffect(()=>{
        const id= setInterval(()=>{
            setSeconds((prev)=>prev+1)
        },1000)
        return ()=>{
            clearInterval(id)
        }
    },[])
    return(
        <>
        <h2>{seconds}</h2>
        </>
    )
}