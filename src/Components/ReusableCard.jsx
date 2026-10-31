export default function Card({title,children}){
    return(
        <>
        <div className="border rounded p-4 shadow">
            <h2 className="text-xl font-bold">{title}</h2>
            {children}
        </div>
        </>
    )
}