import { useSelector } from "react-redux"

export default function AdvanceRedux(){
  const blogs= useSelector((state)=> Object.values(state.blogs.byId))
  const users=useSelector((state)=> state.users.byId)
  return(
    <>
    <h1>Normalize redux example</h1>
    <h2>har ek product ka alag alag file ho jesy user info, product info,cart info tino ki alag alag file</h2>
    {blogs.map((blog)=>(
      <div key={blog.id}>
        <h3>{blog.title}</h3>
        <p>Author: {users[blog.userId].name}</p>
      </div>
    ))}
    </>
  )
}