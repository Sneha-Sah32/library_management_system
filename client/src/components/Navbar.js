// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import styles from "./Navbar.module.css"
// // import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min';

// export default function Navbar() {
//   // const [isLoggedIn,setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

// //   useEffect(()=>{
// //     const checkAuth=()=>{
// //     const token = localStorage.getItem("token");   //getItem
// //     setIsLoggedIn(!!token);  // !!  <- this converts whatever comes from local storage into a clean boolean
// //  };
// //  checkAuth();
// //  const interval = setInterval(checkAuth,1000);
// //  return ()=>clearInterval(interval);
// // },[]);



//   // useEffect(()=>{
//   //   const checkAuth = () =>{
//   //     setIsLoggedIn(!!localStorage.getItem("token"));
//   //   };
//   //   checkAuth();
//   //   window.addEventListener("storage",checkAuth);

//   //   return()=>window.removeEventListener("storage",checkAuth);
//   // },[])

//   const handleLogout=()=>{
//     localStorage.removeItem("token");  //removeItem
//     // setIsLoggedIn(false);
//     navigate("/login");
//   }
//   return (
//     <div>
//       <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light `}>
//   <div className="container-fluid">
//     <h4>LIBRARYLYNX</h4>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/contact">Contact Us</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/pricing">Pricing</Link>
//         </li>
//       </ul>



//       {/* login and out */}
//       {/* {(isLoggedIn)?(
//         <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
//       ):(
//         <>
//          <Link type="button" className="btn btn-outline-primary mx-3" to="/start">Get Started</Link>
//       <Link type="button" className="btn btn-outline-primary" to="/login">Log In</Link>
//         </>
//       )} */}




//       {(!localStorage.getItem("authToken"))?
//       <div className='d-flex'>

//           <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
//           <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
//         </div>
//         :
//         <div>

//         <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>logout</div>
//         </div>
//         }


     
//      {/* FORM */}
//       {/* <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form> */}
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }


import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
      <div className="container-fluid">
        <h4>LIBRARYLYNX</h4>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            
          </ul>

          {isLoggedIn ? (
            <>
            <div className="collapse navbar-collapse">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
              <Link className="nav-link active" to="/book">Books</Link>
            </li>
            </ul>
            </div>
            <div className="collapse navbar-collapse">
             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             <li className="nav-item">
              <Link className="nav-link active" to="/profile">Profile</Link>
            </li>
            </ul>
            </div>
            <button
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
            </>
          ) : (
            <>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li> */}
            

             {/* <Link className="nav-link" to="/pricing">Pricing</Link> */}

             <div className="collapse navbar-collapse">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            </ul>
            </div>

              <Link
                className="btn btn-outline-primary mx-3"
                to="/start"
              >
                Get Started
              </Link>
              <Link
                className="btn btn-outline-primary"
                to="/login"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

