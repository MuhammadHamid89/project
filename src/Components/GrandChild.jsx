function GrandChild({studentName}){
    return(
        <>
        <div style={{border:'2px solid red',margin:'10px', padding:'10px'}}>
            <h2>Grandchild Components</h2>
            <h3>student Name :{studentName}</h3>
        </div>
        </>
    )
}
export default GrandChild