import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../../context/AuthContext";
import { BookOpen, RotateCcw, Search } from "lucide-react";
import { useState,useEffect } from 'react';

export default function StudentDashboard() {

    const navigate = useNavigate();
      const { isLoggedIn, logout } = useAuth();
  
    const handleLogout = () => {
      logout();
      navigate("/");
    };

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
     
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


if (loading) {
  return <div className="p-8">Loading...</div>;
}

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-1">LYBRARYLYNX</h1>
        <p className="text-sm text-gray-400 mb-8">Library</p>

        <nav className="space-y-4">
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Dashboard</p>
          {/* <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Books</p> */}
           <a href="/books" className="hover:bg-gray-800 p-2 rounded cursor-pointer">Books</a>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">
            My Borrowed Books
          </p>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer" onClick={handleLogout}>
            Logout
          </p>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">

        {/* Top User Info */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-semibold text-black">{user?.fullname}</h2>
            <p className="text-gray-500 text-sm text-black">{user?.role}</p>
          </div>

          <div className="text-right text-sm text-gray-500">
            <p>11:16 AM</p>
            <p>Feb 2026</p>
          </div>
        </div>

        {/* Quick Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          <div className="bg-black p-6 rounded-xl shadow flex items-center gap-4">
            <div className="bg-gray-400 p-4 rounded-lg">
              <BookOpen />
            </div>
            <h3 className="text-lg font-medium">Your Borrowed Book List</h3>
          </div>

          <div className="bg-black p-6 rounded-xl shadow flex items-center gap-4">
            <div className="bg-gray-400 p-4 rounded-lg">
              <RotateCcw />
            </div>
            <h3 className="text-lg font-medium">Your Returned Book List</h3>
          </div>

          <div className="bg-black p-6 rounded-xl shadow flex items-center gap-4">
            <div className="bg-gray-400 p-4 rounded-lg">
              <Search />
            </div>
            <h3 className="text-lg font-medium">
              Let's browse books inventory
            </h3>
          </div>

        </div>

        {/* Center Logo */}
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold text-black">LIBRARYLYNX</h1>
          <p className="text-black tracking-widest">LIBRARY</p>
        </div>

        {/* Quote Section */}
        <div className="bg-white p-10 rounded-2xl shadow mb-6">
          <p className="text-2xl font-medium leading-relaxed text-black">
            "Embarking on the journey of reading fosters personal growth,
            nurturing a path towards excellence and the refinement of character."
          </p>

          <p className="text-right mt-6 text-black">
            ~ LibraryLynx Team
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-white p-6 rounded-xl shadow w-72">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">● Total Borrowed Books</p>
              <p className="text-gray-600 text-sm mt-2">● Total Returned Books</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}