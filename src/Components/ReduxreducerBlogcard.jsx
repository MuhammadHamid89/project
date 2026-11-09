import { useDispatch } from "react-redux"
import { deleteBlog,toggleFeatured } from "../features/blog/blogSlice"
export default function BlogCard({blog}){
    const dispatch=useDispatch()
    return(
        <>
        <article className="rounded-xl bg-white p-5 shadow">
            <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">{blog.title}</h3>
                    <p className="text-sm text-slate-500">category: {blog.category}</p>
                </div>

                {blog.featured && (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">Feature</span>
                )}

            </div>

            <div className="flex gap-3">
                <button className="rounded-xl bg-yellow-500 px-3 py-2 text-sm font-medium text-white" onClick={()=>dispatch(toggleFeatured(blog.id))}>toggle feature</button>
                <button className="rounded-xl bg-yellow-500 px-3 py-2 text-sm font-medium text-white" onClick={()=>dispatch(deleteBlog(blog.id))}>Delete Feature</button>
            </div>
        </article>
        </>
    )
}