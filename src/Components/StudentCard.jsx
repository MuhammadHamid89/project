
//object data type use destructure
function Student(props){
    // console.log('props',props)
    return(
        <>
        <h2>name:{props.name}</h2>
        <h2>age:{props.age}</h2>
        <h2>city:{props.city}</h2>

        </>
    )
}
export default Student

// props ko likhny k bejae hum ye likhty hain nechy code likha hain


// // in this file practice props
// //object data type use destructure
// function Student({name='unknow',age,city}){
//     // console.log('props',props)
//     return(
//         <>
//         <h2>name:{name}</h2>
//         <h2>age:{age}</h2>
//         <h2>city:{city}</h2>

//         </>
//     )
// }
// export default Student