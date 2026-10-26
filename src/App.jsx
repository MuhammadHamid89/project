import Student from "./Components/StudentCard"

function App(){
  // const name='ali'
  return(
    <>
    <Student  age={15} city='lahore' />
    <Student name='ali' age={25} city='ISB' />
    <Student name='akarm' age={35} city='Multan' />
    </>
  )
}
export default App