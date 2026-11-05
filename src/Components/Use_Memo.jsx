// import { useMemo, useState } from "react"


// function factorial(n){
//     console.log('calculating...')
//     if(n<=1) return 1;
//     return n*factorial(n-1)
// }


// export default function UseMemo(){
//     const [number,setNumber]=useState(0)
//     const [count,setCount]=useState(0)

//     const result= useMemo(()=>factorial(number),[number]) // with useMemo is sy component re-render ni hota
//     // const result= factorial(number) is sy component re-render hota hain
//     return(
//         <>
//         <div>
//             <h2>Factorial :{result}</h2>
//             <input type="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))} />
//             <button onClick={()=> setCount(count+1)}>counter : {count}</button>
//         </div>
//         </>
//     )
// }




import { useMemo, useState } from "react"

export default function UseMemo(){
    const [number,setNumber]=useState(0)
    const [count,setCount]= useState(0)

    const expensiveCalculation= (num)=>{
        console.log('expensive calculation')
        // simulate heavy task
        for(let i=0; i<100000000; i++){}
        return num *2
    }

    const result=useMemo(()=>{
        return expensiveCalculation(number)
    },[number])

    // const result = expensiveCalculation(number)
    return(
        <>
        <div style={{padding:'20px'}}>
            <h2>Result : {result}</h2>
            <input type="number" value={number} onChange={(e)=> setNumber(Number(e.target.value))} />

            <br />
            <br />

            <button onClick={()=>setCount(count+1)}>Counter : {count}</button>
        </div>
        </>
    )
}