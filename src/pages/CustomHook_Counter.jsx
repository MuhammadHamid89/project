import useCounter from "../Components/CustomHook"
export default function Custom_Hook(){
  const{count,increment,decrement,reset}=useCounter(0) 
  return(
    <>
    <div className="p-6">
      <h1 className="text-3xl font-bold">Custom hooks demo</h1>
      <h2 className="text-2xl my-4">{count}</h2>
      <button onClick={increment} className="bg-green-500 text-white px-3 py-2 mr-2 rounde">increment</button>
      <button onClick={decrement} className="bg-green-500 text-white px-3 py-2 mr-2 rounde">decrement</button>
      <button onClick={reset} className="bg-green-500 text-white px-3 py-2 mr-2 rounde">reset</button>
    </div>
    </>
  )
}