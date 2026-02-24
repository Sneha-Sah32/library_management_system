import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AdminDashboard() {
  const [data, setData] = useState({
    totalUsers: 0,
    totalBooks: 0,
    totalAdmins: 0,
    borrowedBooks: 0,
    returnedBooks: 0,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/dashboard")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const pieData = {
    labels: ["Borrowed Books", "Returned Books"],
    datasets: [
      {
        data: [data.borrowedBooks, data.returnedBooks],
        backgroundColor: ["#1e1e1e", "#555"],
      },
    ],
  };

  return (
    <div className="d-flex">
      
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "220px", minHeight: "100vh" }}>
        <h4>BookWorm</h4>
        <hr />
        <p>Dashboard</p>
        <p>Books</p>
        <p>Catalog</p>
        <p>Users</p>
        <p>Add Admin</p>
      </div>

      {/* Main Content */}
      <div className="container-fluid p-4 bg-light">

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Total Users</h5>
              <h3>{data.totalUsers}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Total Books</h5>
              <h3>{data.totalBooks}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h5>Total Admins</h5>
              <h3>{data.totalAdmins}</h3>
            </div>
          </div>
        </div>

        {/* Chart + Profile */}
        <div className="row">
          
          {/* Pie Chart */}
          <div className="col-md-6">
            <div className="card p-4 shadow">
              <Pie data={pieData} />
            </div>
          </div>

          {/* Admin Profile */}
          <div className="col-md-6">
            <div className="card p-4 shadow text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="admin"
                className="rounded-circle mb-3"
              />
              <h4>Muhammad Zeeshan Khan</h4>
              <p>
                Welcome to your admin dashboard. Here you can manage
                all the settings and monitor statistics.
              </p>
            </div>
          </div>

        </div>

        {/* Quote Section */}
        <div className="card p-4 shadow mt-4">
          <h4>
            "Embarking on the journey of reading fosters personal growth,
            nurturing a path towards excellence and refinement of character."
          </h4>
        </div>

      </div>
    </div>
  );
}