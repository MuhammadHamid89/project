import { useSelector } from "react-redux";
import BlogCard from "./ReduxreducerBlogcard";
export default function BlogList(){
    const blogs=useSelector((state)=>state.blogs.items)
    if(blogs.length === 0){
        return (
            <div className="rounded-xl bg-white p-6 text-center shadow">
                <p className="text-slate-500">no blogs available</p>
            </div>
        )
    }
    return(
        <>
        <section>
            <h2 className="mb-4 text-xl font-bold">Blog list</h2>
            <div className="grid gap-4 md:grid-cols-2">
                {blogs.map((blog)=>(
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
        </>
    )
}