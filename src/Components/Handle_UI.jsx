
// in this use useffect and usestate

// import { useState,useEffect } from "react"

// export default function HandleUI(){
//     const [loading,setLoading]=useState(true)   // if false
//     useEffect(()=>{
//         setTimeout(()=>setLoading(false),5000)
//     },[])
//     return(
//         <>
//         {loading ? <h2>loading...</h2> : <h2>looaded successful</h2>}
//         </>
//     )
// }


// agr error state py kesy dekhna hian

// import { useState } from "react"
// export default function HandleUI(){
//     const [error]=useState(true) // if false
//     return(
//         <>
//         {error ? <h2>something is wrong </h2> : <h2>everything is fine</h2>}
//         </>
//     )
// }


// how can handle empty data
// import { useState } from "react"
// export default function HandleUI(){
//     const students=[]  // if pass [1,2,3] otherwise is empty
//     return(
//         <>
//         {students.length===0 ? (<h2>no studentfound</h2>) : (students.map((student)=><p key={student}>{student}</p>))}
//         </>
//     )
// }


// conditional redering
// export default function HandleUI(){
//     const isLoggedIn=true   //if false
//     return(
//         <>
//         {isLoggedIn ? <h2>welcome br0</h2> : <button>login now</button>}
//         </>
//     )
// }


// Final example
export default function HandleUI(){
    const loading=false; // if true
    const error=false; // if true
    const products =['laptop', 'charger']  // empty array []

    if(loading) return <h2>loading....</h2>
    if(error) return <h2>error loading product</h2>
    if(products.length===0) return <h2> no product found</h2>
    return(
        <>
        <ul>
            {products.map((p)=>(
                <li key={p}>{p}</li>
            ))}
        </ul>
        </>
    )
}