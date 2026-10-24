import Home from "./pages/Home";

function app(){
  const name='ali'
  return(
    <>
    {/* <Home /> */}

    <h1>hello {name}</h1>
    <p>welcome to react</p>
    <button className="btn">start learning</button>
    </>
  )
}
export  default app