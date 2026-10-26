// import Card from "./Components/Cardchildprop" // child prop
import Parent from "./Components/Parent"

function App(){
  const studentName='ali'
  return(
    <>
   {/* <Card> // prop child
    <h2>hello to main file</h2>
   </Card> */}
    <h1>react prop drilling</h1>
    <Parent studentName={studentName} />

    </>
  )
}
export default App