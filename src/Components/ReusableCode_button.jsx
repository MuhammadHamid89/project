export default function Reusable({text,color='blue',onClick}){
    return(
        <>
        <button onClick={onClick} className={`bg-${color}-500 text-black px-4 py-3`}> click me  {text} </button>
        </>
    )
}