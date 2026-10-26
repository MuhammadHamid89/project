// props drilling
import Child from "./Child"
function Parent({studentName}){
    return(
        <>
        <div style={{border:"2px solid blue",padding:'10px',margin:'10px'}}>
        <h2>this is parents  Components</h2>
        {/* passing the prop to child */}
        <Child studentName={studentName}/>
        </div>
        </>
    )
}
export default Parent