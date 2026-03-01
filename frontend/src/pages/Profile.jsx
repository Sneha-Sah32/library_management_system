

import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {

  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/profile", {
      method: "GET",
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard flex min-h-screen">

      {/* ✅ SAME SIDEBAR AS ADMIN */}
      <aside className="bg-gray-800 text-white w-64 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">LibraryLynx</h1>

        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-purple-400">Dashboard</a>
          <a href="#" className="hover:text-purple-400">Books</a>
          <a href="#" className="hover:text-purple-400">Users</a>
          <a href="#" className="hover:text-purple-400">Issued Books</a>
          <a href="#" className="hover:text-purple-400">Reports</a>
          <a href="/profile" className="hover:text-purple-400">Profile</a>

          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="mt-auto text-red-500 hover:text-red-400 text-left"
            >
              Logout
            </button>
          )}
        </nav>
      </aside>

      {/* ✅ MAIN CONTENT (PROFILE ONLY) */}
      <main className="flex-1 bg-gray-400 p-8 ">

        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">My Profile</h2>
          <div>Welcome, {user.fullname}</div>
        </header>

        {/* Profile Card */}
        <div className="bg-black rounded-lg shadow p-8 max-w-md">
          <div className="flex flex-col items-center">

            <img
              src="/src/assets/profile.jpg"
              alt="Profile"
              className="w-36 h-36 rounded-full mb-4"
            />

            <h3 className="text-xl font-semibold">
              {user.fullname}
            </h3>

            <p className="text-gray-600">{user.email}</p>

            <span className="mt-2 px-4 py-1 bg-purple-100 text-purple-700 rounded">
              {user.role}
            </span>

          </div>
        </div>

      </main>
    </div>
  );
}