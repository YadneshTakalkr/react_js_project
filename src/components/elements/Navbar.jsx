import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav className='navbar shadow fixed-top navbar-expand-sm navbar-drak bg-primary text-white' >
        <ul className="container">
            {/* <a href="" className="navbar-brand">
                contact Book
            </a> */}
              <li>
           <Link to="/" className="navbar-brand" >
               contact Book
              </Link>
             </li>
            {/* <div>
                <a href="" className="btn btn-red ml-auto" >
                    create contact
                </a>
            </div> */}
           <li>
            <Link to="/contacts/add" className="btn btn-red ml-auto" >
                create contact
            </Link>
           </li>

        </ul>
    </nav>
    
  )
}

export default Navbar

// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;