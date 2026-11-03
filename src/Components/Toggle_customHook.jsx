// instead of:
// const [show, setShow]=useState(false)


// we create
// useToggle()

import { useState } from "react";


export default  function useToggle(initial=false){
    const [value, setValue]=useState(initial)
    const toggle=()=>setValue((v)=> !v)
    return{value,toggle}
}