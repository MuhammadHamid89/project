function App(){
  const students=['ali','ahmad','sara']
  const isTeacher=false
  return(
  <>
  <h1>Reactt class</h1>
  {isTeacher && <p>Teacher Mode</p>}
  <ul>
    {students.map((student,index)=>(
      <li key={index}>{student}</li>
    ))}
  </ul>
  </>
  )
}
export default App