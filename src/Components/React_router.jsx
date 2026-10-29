// import { Link } from "react-router-dom"
// export default function Router(){
//     return(
//         <>
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 text-white p-4 flex items-center gap-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/dashboard">Dasboard</Link>
//       </nav>
//         </>
//     )
// }


// Navlink use
// import { NavLink } from "react-router-dom";
// export default function router(){

//     const linkStyle=({isActive})=>`px-4 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
//     }`
//     return(
//         <>
//         <nav className="flex gap-3 p-4 bg-gray-100">
//             <NavLink to='/' className={linkStyle}>Home</NavLink>
//             <NavLink to='/about' className={linkStyle}>about</NavLink>
//             <NavLink to='/contact' className={linkStyle}>contact</NavLink>
//         </nav>
//         </>
//     )
// }



// useNavigate
// import { useNavigate } from "react-router-dom";
// export default function Router(){
//     const navigate=useNavigate()
//     function handleLogin(){
//         navigate('/about')
//     }
//     return(
//         <>
//         <button onClick={handleLogin}>Login</button>
//         </>
//     )
// }


// use navLink
import { NavLink } from "react-router-dom"
export default function Router(){

    const isStyle=({isActive})=>
        `px-4 py-2 rounded transition ${
            isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
        }`
    
    return(
        <>
      {/* Navigation Bar */}
      <nav className="bg-blue-300 text-white p-4 flex items-center gap-4">

      <div className="max-w-5xl mx-auto flex gap-4 p-5">

        <NavLink to='/' className={isStyle}>Home</NavLink>
        <NavLink to='/about' className={isStyle}>About</NavLink>
        <NavLink to='/contact' className={isStyle}>Contact</NavLink>
        <NavLink to='/login' className={isStyle}>Login</NavLink>
        <NavLink to='/dashboard' className={isStyle}>Dashboard</NavLink>

      </div>
      </nav>
        </>
    )
}