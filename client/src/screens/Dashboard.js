
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
   const { isLoggedIn, logout } = useAuth();
  
    const handleLogout = () => {
      logout();
    };
  
  return (
    <div>
    <Navbar/>
    <div className="container-fluid vh-100 p-0">
      <div className="row g-0 h-100">

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

        {/* Main Content */}
        <div className="col-md-10 bg-light">

          {/* Top Navbar */}
          {/* <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
            <h4 className="mb-0">Dashboard Overview</h4>
            <div className="d-flex align-items-center">
              <span className="me-3">Welcome, Admin</span>
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-circle"
              />
            </div>
          </div> */}

          {/* Content */}
          <div className="p-4">

            {/* Stats Cards */}
            {/* <div className="row mb-4">
              <div className="col-md-3 mb-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Total Books</h6>
                    <h3>120</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Total Users</h6>
                    <h3>75</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Active Loans</h6>
                    <h3>32</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div className="card shadow-sm text-center">
                  <div className="card-body">
                    <h6>Overdue Books</h6>
                    <h3>8</h3>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Recent Activity Table */}
            {/* <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="mb-3">Recent Book Additions</h5>

                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Atomic Habits</td>
                        <td>James Clear</td>
                        <td>Self Help</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>Palpasa Cafe</td>
                        <td>Buddhisagar</td>
                        <td>Fiction</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>The Psychology of Money</td>
                        <td>Morgan Housel</td>
                        <td>Finance</td>
                        <td>4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div> */}

          </div>
        </div>

      </div>
    </div>
    </div>
  );
}


