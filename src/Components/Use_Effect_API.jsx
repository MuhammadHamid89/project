// fetch k sat response ko json my convert krna pary ga
// import { useState,useEffect } from "react"

// export default function Api(){
//     const [users,setUsers]=useState([])
//     const [loading,setLoading]=useState(true)
//     const [error,setError]=useState('')
//     useEffect(()=>{
//         async function fetchUsers(){
//             try{
//                 const response=await fetch(
//                     'https://jsonplaceholder.typicode.com/users'
//                 );
//                 if(!response.ok) throw new Error ('failed to fetch')
//                 const data=await response.json()
//                 console.log('data ', data)
//                 setUsers(data)
//             }catch(err){
//                 setError(err)
//             } finally{
//                 setLoading(false)
//             }
//         }
//         fetchUsers()
//     },[])
//     if (loading) return <p className="text-center mt-10">loding...</p>
//     if(error) return <p className="text-center  text-red-500">{error}</p>

//     return(
//         <>
//         <div className="min-h-screen bg-gray-100 p-6">
//             <h1 className="text-3xl font-bold text-center mb-6"> User</h1>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {users.map((user)=>(
//                     <div key={user.id} className="bg-white shadow rounded-xl p-4">
//                     <h2 className="text-xl  font-semibold">{user.name}</h2>
//                     <p>{user.email}</p>
//                     <p>{user.phone}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </>
//     )
// }



//axios by default json return krta hain
//  Api fetch with axios
import axios from "axios";
import { useState,useEffect } from "react";
export default function ApiAxios(){
    const [users,setUsers]=useState([])
    useEffect(()=>{
        async function loadUsers() {
            const response=await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            console.log('response',response)
            setUsers(response.data)
        }
        loadUsers()
    },[])
    return(
        <>
        <div className="p-6">
            {users.map((user)=>(
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
        </>
    )
}