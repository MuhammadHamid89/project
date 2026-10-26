// prop drilling
import GrandChild from "./GrandChild"
function Child({studentName}){
    return(
        <>
        <div style={{border:'2px solid blue', margin:'10px', padding:'10px'}}>
            <h2>child Components</h2>
            {/* passing the same prop agian */}
            <GrandChild studentName={studentName} />
        </div>
        </>
    )
}
export  default Child