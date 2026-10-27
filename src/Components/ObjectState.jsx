// // state with object
// import { useState } from "react"
// function StateObject(){
//     const[student,setStudent]=useState({
//         name : 'ali',
//         rollNo : 101,
//         age : 20,
//         city : 'lahore'
//     })
//     return(
//         <>
//         <p>{student.name}</p>
//         <p>{student.age}</p>
//         <p>{student.rollNo}</p>
//         <p>{student.city}</p>
//         <button onClick={()=>setStudent({...student,city:'karachi'})} style={{border: '3px solid blue', color: 'white', background: 'black', padding: '10px 20px', margin: '5px', borderRadius: '5px', cursor: 'pointer'}}>cliick me</button>


//         </>
//     )
// }
// export default StateObject



// import { useState } from "react"
// function Hello(){
//     const [user,setUser]=useState({
//         name:'ali',
//         address:{
//             city:'lahore',
//             country:'pakistan',
//         },
//     })
//     return(
//         <>
//         <p>{user.name}</p>
//         <p>{user.address.city}</p>
//         <p>{user.address.country}</p>
      
//         <button onClick={()=>setUser({...user,address:{...user.address,city:'islamabad'}})}>click me</button>
//         </>
//     )
// }
// export default Hello

/// Array update
import { useState } from "react"
function Hello(){
    const [fruits,setFruit]=useState(['apple','mango'])
    return(
        <>
        {fruits.map((fruit)=>(
            <p>{fruit}</p>
        ))}
            {/* {/* fruits.push('orange')  * js my hum esa krty hain/} */}
        {/* <button onClick={()=>setFruit([...fruits,'orange'])}>click me</button> // for add  */}
            {/* <button onClick={()=>setFruit(fruits.filter((fruit)=>fruit !='apple'))}>click me</button>  for removefrom array */}
        </>
    )
}
export default Hello