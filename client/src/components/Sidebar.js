import React from 'react'
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
       const { isLoggedIn, logout } = useAuth();
      
        const handleLogout = () => {
          logout();
        };
  return (
    <div>
      {/* Sidebar */}
        <div className="col-md-2 bg-dark text-white p-4">
          {/* <h4 className="mb-4 text-center">📚 Library Admin</h4> */}

          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <Link to="/dash" className="nav-link text-white">
              <span className="sidebar-toggle" onclick="toggleSidebar()">
                <i className="fa fa-bars"></i>
                    </span>
                📊 Dashboard
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/profile" className="nav-link text-white">
                👤 Profile
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/book" className="nav-link text-white">
                📖 Books
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/issued" className="nav-link text-white">
                📚 Issued Books
              </Link>
            </li>
            <li className="nav-item mt-4">
              <button className="btn btn-outline-light w-100" onClick={handleLogout}>
                🚪 Logout
              </button>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar
