import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/user/userSlics";
import { useEffect } from "react";
export default function MiddleWare(){
    const dispatch=useDispatch()
    const {list,status,error}=useSelector((s)=>s.users)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    if(status === 'loading') return <h2>loading...</h2>
    if(status === 'failed') return <h2>{error}</h2>
    return(
        <>
        <div>Users</div>
        {list.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))}
        </>
    )
}