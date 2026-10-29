import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate=useNavigate()
    function handleLogin(){
        alert('login successfull')
        navigate('/')
    }
    return(
        <>
        <div className="max-w-md max-auto mt-10 border rounded-lg p-6 shadow">
            <h1 className="text-3xl font-bold mb-6">Login page</h1>
        <input type="text" placeholder="enter name" className="w-full border p-2 rounded mb-6" />
        <input type="password" placeholder="enter password" className="w-full border p-2 rounded mb-6" />

        <button onClick={handleLogin} className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">login</button>
        </div>
        </>
    )
}