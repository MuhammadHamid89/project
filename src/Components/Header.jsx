import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to='/users' className="hover:underline">Users</Link>
      </nav>
        </>
    )
}


