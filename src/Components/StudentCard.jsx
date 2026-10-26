//object data type use destructure
function Student({name='unknow',age,city}){
    // console.log('props',props)
    return(
        <>
        <h2>name:{name}</h2>
        <h2>age:{age}</h2>
        <h2>city:{city}</h2>

        </>
    )
}
export default Student