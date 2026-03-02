// import React from "react";
// import { Link } from "react-router-dom";


// export default function Navbar() {
//   return (
  
//     <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow p-4 flex justify-between items-center">
//       <div className="flex items-center space-x-2">
//         <svg
//           className="w-8 h-8 text-blue-600"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//         </svg>
//         <span className="text-xl f text-black font-bold">LibraryLynx</span>
//       </div>

//       <div className="space-x-4">
//         <Link to="/" className="nav-link text-gray-800">Home</Link>
//         <Link to="/login" className="nav-link text-gray-800">Login</Link>
//         <Link to="/signup" className="nav-link text-gray-800">Sign Up</Link>
//         <Link to="/contact" className="nav-link text-gray-800">Contact</Link>
//         <Link to="/admin" className="nav-link text-gray-800">Admin</Link>
//         <Link to="/studentdash" className="nav-link text-gray-800">Student</Link>

//       </div>
//     </nav>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const { isLoggedIn, user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow p-4 flex justify-between items-center">

      {/* Logo */}
      <div className="flex items-center space-x-2">
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>

        <span className="text-xl text-black font-bold">
          LibraryLynx
        </span>
      </div>

      {/* Navbar Links */}
      <div className="space-x-4 text-gray-800">

        {/* ✅ NORMAL NAVBAR (NOT LOGGED IN) */}
        {!isLoggedIn && (
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About Us</Link>
          </>
        )}

        {/* ✅ ADMIN NAVBAR */}
        {isLoggedIn && user?.role === "admin" && (
          <>
            <Link to="/admin">Admin Dashboard</Link>
            <button
              onClick={logout}
              className="text-red-500"
            >
              Logout
            </button>
          </>
        )}

        {/* ✅ STUDENT NAVBAR */}
        {isLoggedIn && user?.role === "student" && (
          <>
            <Link to="/studentdash">Student Dashboard</Link>
            <button
              onClick={logout}
              className="text-red-500"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}