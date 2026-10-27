// controlled component

// import { useState } from "react"
// function ReactForm(){
//     const[name , setName]=useState('')
//     return(
//         <>
//         <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} />
//         <p>Name: {name}</p>
//         </>
//     )
// }
// export default ReactForm

import { useState } from "react";
export default function ReactForm(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')
    const[city,setCity]=useState('')
    const[agree,setAgree]=useState(false)

    const handleSubmit=(e)=>{
        console.log(e)    // refresh sy rokta hain
        e.preventDefault();
        console.log({email,password,message,city,agree})
    }
    // hum isko bi use kr skty hain
    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log({email,password})
    //}

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="enter mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <select value={city} onChange={(e)=>setCity(e.target.value)}>
                <option>lahore</option>
                <option>karachi</option>
            </select>
            <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.value)} />



            <button type="submit">login</button>


        </form>
        </>
    )
}