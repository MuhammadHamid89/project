// import { useCallback, useState } from "react"

// export default function Callback(){
//     const [count,setCount]=useState(0)
//     const increment = useCallback(()=>{  // aviod re-render and save in cache
//         setCount((c)=> c+1)
//     },[])
//     return(
//         <>
//         <h1>count : {count}</h1>
//         <button onClick={increment}>increment</button>
//         </>
//     )
// }


import { memo, useCallback, useState } from "react";

const Child = memo(({childcompoent})=>{
    console.log('child component')
    return <button onClick={childcompoent}>increment</button>
})

export default  function Callback(){
    const [count,setCount]=useState(0)
    const [theme,setTheme]=useState('light')

    const increment = useCallback (()=>{
        setCount((c)=> c+1)
    },[])

    //  const increment =()=>{
    //     setCount ((c)=>c+1)
    //     } * is sy child bilawaja hi render hoga*
    return(
        <>
        <h2>count : {count}</h2>
        <h2>theme : {theme}</h2>

        <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>toggle button</button>
        <br /> <br /> 

        <Child childcompoent={increment} />
        </>
    )
}