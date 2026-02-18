import React from "react";


export default function Dashboard() {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h3 className="text-center mb-4">My Dashboard</h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/books">
              Books
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/users">
              Users
            </a>
          </li>
          <li className="nav-item mb-2">
            <a className="nav-link text-white" href="/reports">
              Reports
            </a>
          </li>
          <li className="nav-item mt-4">
            <button className="btn btn-outline-light w-100">Logout</button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Top Navbar */}
        <div className="bg-light p-3 border-bottom d-flex justify-content-between align-items-center">
          <h4>Dashboard</h4>
          <div>
            <span className="me-3">Welcome, Admin</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-circle"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="container-fluid p-4">
          {/* Stats Cards */}
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <div className="card text-center shadow-sm h-100">
                <div className="card-body">
                  <h5>Total Books</h5>
                  <h2>120</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card text-center shadow-sm h-100">
                <div className="card-body">
                  <h5>Users</h5>
                  <h2>75</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card text-center shadow-sm h-100">
                <div className="card-body">
                  <h5>Active Loans</h5>
                  <h2>32</h2>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card text-center shadow-sm h-100">
                <div className="card-body">
                  <h5>Overdue Books</h5>
                  <h2>8</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Charts / Reports Placeholder */}
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">Books Distribution</h5>
                  <div
                    style={{
                      height: "250px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#f8f9fa",
                      borderRadius: "5px",
                    }}
                  >
                    {/* You can add a chart here using Chart.js or Recharts */}
                    Chart Placeholder
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">User Activity</h5>
                  <div
                    style={{
                      height: "250px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#f8f9fa",
                      borderRadius: "5px",
                    }}
                  >
                    Chart Placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Example */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Recent Book Additions</h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Category</th>
                      <th>Available Copies</th>
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
                      <td>Buddha in Daily Life</td>
                      <td>Hector Garcia</td>
                      <td>Motivation</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Palpasa Cafe</td>
                      <td>Buddhisagar</td>
                      <td>Fiction</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
