import { useState } from "react"

export default function useCounter(initialValue=0){
    const [count,setCount]= useState(initialValue)
    const increment = () => setCount(count+1);
    const decrement =() => setCount(count-1);
    const reset = () => setCount(initialValue)
    return {count,increment,decrement,reset}
}

// // Rules: 
// // yaha hum ny jo function banaya hain useCounter ye custom hook hain or hooks ko banaty waqt use lagana hain
// // usesatate hemaesha custom hook k andar hi define kry gy
// // always logic share not share state yani ek ko change kry gy dusra change ni ho

// // example app.jsx file :
// import Custom_Hook from "./pages/CustomHook_Counter";
// // export default function App(){
// //   return(
// //     <>
// //     <Custom_Hook/>
// //     <Custom_Hook/>
// //     </>
// //   )
// // }

// // yaha ek ko change kry gy dosra py effect ni hoga