import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../features/blog/blogSlice";

export default function AddBlogForm(){
    const dispatch=useDispatch()
    const [title,setTitle]=useState('')
    const [category,setCategory]=useState('')

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(!title.trim() || !category.trim()){
        return
    }

    const newBlog={
        id : Date.now(),
        title : title.trim(),
        category : category.trim(),
        featured: false,
    }
    dispatch(addBlog(newBlog))
    setTitle('')
    setCategory('')
  }

    return(
        <>
        <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 shadow">
            <h2>Add New Blog</h2>
            <div>
            <label htmlFor="title" className="mb-1 block font-medium">Blog title</label>
            <input type="text" id="title" value={title} onChange={(event)=>setTitle(event.target.value)} className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
            </div>

            <div>
            <label htmlFor="category" className="mb-1 block font-medium">Blog category</label>
            <input type="text" id="category" value={category} onChange={(event)=>setCategory(event.target.value)} className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
            </div>

            <button type="submit" className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white">
                add blog
            </button>

        </form>
        </>
    )
}