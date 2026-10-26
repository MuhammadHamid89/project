//in this file practice child prop
function Card({children}){
    console.log('children',children)
    return(
        <>
        <h1 className="card">{children}</h1>
        </>
    )
}
export default  Card