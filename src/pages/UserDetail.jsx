import {users} from '../data/users'
import { Link,useParams } from 'react-router-dom'
export default function UserDetail(){
    const {id}=useParams()
    const user=users.find((item)=>item.id ==id)

    if(!user){
        return(
            <div className='rounded-2xl bg-white p-8 shadow-sm'>
                <h1 className='text-2xl font-bold text-red-600'> User not found
                    <Link to='/users' className='mt-4 inline-block text-blue-600 underline'>Back to users</Link>
                </h1>
            </div>
        )
    }
    return(
        <>
        <section className='rounded-2xl bg-white p-8 shadow-sm'>
            <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
                Url Example parameter</p>

                <h1 className='mt-2 text-3xl font-bold'>{user.name}</h1>
                <p className='mt-2 text-slate-600'> Role : {user.role}</p>
                <p className='text-slate-600'>city : {user.city}</p>

                <div className='mt-5 rounded-xl bg-slate-100 p-4 font-mono text-sm'>
                    Current URL param id ={id}</div>

                <Link to='/users' className='mt-6 inline-block text-blue-600 underline'>
                Back to users
                </Link>

        </section>
        </>
    )
}