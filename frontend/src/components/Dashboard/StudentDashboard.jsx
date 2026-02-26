import React from 'react'

// const StudentDashboard = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
//       <p>Welcome, Student! Here you can see your borrowed books, fines, etc.</p>
//     </div>
//   )
// }

// export default StudentDashboard


import { BookOpen, RotateCcw, Search } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-1">BookWorm</h1>
        <p className="text-sm text-gray-400 mb-8">Library</p>

        <nav className="space-y-4">
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Dashboard</p>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Books</p>
          <p className="bg-gray-800 p-2 rounded cursor-pointer">
            My Borrowed Books
          </p>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Top User Info */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-semibold text-black">Muhammad Zeeshan Khan</h2>
            <p className="text-gray-500 text-sm text-black">User</p>
          </div>

          <div className="text-right text-sm text-gray-500">
            <p>11:16 AM</p>
            <p>Feb 2026</p>
          </div>
        </div>

        {/* Quick Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <BookOpen />
            </div>
            <h3 className="text-lg font-medium text-black">Your Borrowed Book List</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <RotateCcw />
            </div>
            <h3 className="text-lg font-medium text-black">Your Returned Book List</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <Search />
            </div>
            <h3 className="text-lg font-medium text-black">
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