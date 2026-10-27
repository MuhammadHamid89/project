/// event handler file

// separate event handler
// function Event(){
//     // event handler
//     function greet(){
//         alert('hello g')
//     }
//     return(
//         <>
//         {/* <button onClick={greet()}>say hello</button> functio direct call or ye page load hoty hi ouput deta rhy ga */}
//         {/* function reference or ye tb output dy ga jb button py click kry ga */}
//         <button onClick={greet}>say hello</button> 
//         </>
//     )
// }
// export default Event


// inline event handler
// function Event(){
//     return(
//         <>
//         {/* <button onClick={alert('welcome g')}>click me</button> ye by default refresh py output deta rhy ga */}

//             {/* arrow function tb call hoga jb button py click hoga */}
//         <button onClick={()=>alert('welcome g')}>click me</button>
//         </>
//     )
// }
// export default Event



// // pass some value
// function Event(){
//     // event handler 
//     function showUser(id){
//         alert('user id : ' + id)
//     }
//     return(
//         <>
//         <button onClick={()=>showUser(10)}>click me</button>
//         </>
//     )
// }
// export default Event

// synthetic event
 function Event(){
    function showUser(){
        alert('user ID : ' + id)
    }
    function handleClick(event){
        console.log(event)
    }
    return(
        <>
        <button onClick={handleClick}>click me</button>
        </>
    )
}
export default Event