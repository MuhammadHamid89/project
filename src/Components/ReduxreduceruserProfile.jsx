import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {updateName,updateRole} from '../features/user/userSlics'

export default function UserProfile(){
    const dispatch=useDispatch()
    const user= useSelector((state)=>state.user)

    const [name,setName]=useState(user.name)
    const [role,setRole]=useState(user.role)

    const handleUpdate = (event)=>{
        event.preventDefault()
        dispatch(updateName(name))
        dispatch(updateRole(role))
    }
    return(
        <>
        <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-bold">User Profile</h2>
            <div className="mb-5 rounded-lg bg-slate-100 p-4">
                <p> <strong>Name :</strong> {user.name}</p>
                <p> <strong>Role :</strong> {user.role}</p>
            </div>
            <form onSubmit={handleUpdate}>
            <div className="mb-4">
                <label htmlFor="text" className="mb-1 block font-medium">Name</label>
                <input type="text" id="Name" value={name} onChange={(event)=> setName(event.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
            </div>

            <div className="mb-4">
                <label htmlFor="role" className="mb-1 block font-medium">Role</label>
                <input type="text" id="role" value={role} onChange={(event)=> setRole(event.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
            </div>

            <button type="submit" className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white">
                update profile
            </button>
            </form>
        </section>
        </>
    )
}