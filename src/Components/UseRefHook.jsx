// import { useEffect, useRef } from "react"



// export default function Refhook(){
//     const inputRef=useRef(null)

//     useEffect(()=>{
//         inputRef.current.focus()
//     },[])
//     return(
//         <>
//         <div className="p-6">
//         <input type="text" ref={inputRef} className="border p-2 rounded" placeholder="type here" />
//         </div>
//         </>
//     )
// }



// import { useRef } from "react"
// export default function Refhook(){
//     const click=useRef(0)
//     function handleClick(){
//         click.current++;
//         console.log(click.current)
//     }
//     return(
//         <>
//         <div className="p-8">
//         <button onClick={handleClick} className="bg-green-500 text-white px-4 py-2 rounded">
//             click me</button>
//         </div>
//         </>
//     )
// }



 import { useEffect, useRef, useState } from "react"
export default function Refhook(){
    const [name,setName]=useState('')
    const previous=useRef('')

    useEffect (()=>{
        previous.current=name
    }, [name])
    return(
        <>
        <div className="p-6">
            <input type="text" value={name} onChange={((e)=>setName(e.target.value))} className="border p-2 rounded" />

            <p>current :{name}</p>
            <p>previous : {previous.current}</p>
        </div>
        </>
    )
}