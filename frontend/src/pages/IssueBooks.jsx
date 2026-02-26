import { Search } from "lucide-react";
import React from "react";

export default function IssueBooks() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-1">BookWorm</h1>
        <p className="text-sm text-gray-400 mb-8">Library</p>

        <nav className="space-y-4">
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Dashboard</p>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Books</p>
          <p className="bg-gray-800 p-2 rounded">Issue Book</p>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Users</p>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Add New Admin</p>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Issue Books</h1>
          <p className="text-gray-500">
            Issue books to library members and track returns
          </p>
        </div>

        {/* Issue Form */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-xl font-semibold mb-6 text-black">Issue New Book</h2>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block mb-2 font-medium text-black">Select Member</label>
              <select className="w-full border rounded-lg p-3 text-black">
                <option>Choose a member</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Select Book</label>
              <select className="w-full border rounded-lg p-3">
                <option>Choose a book</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Due Date</label>
              <input
                type="date"
                className="w-full border rounded-lg p-3"
              />
            </div>
          </div>

          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
            Issue Book
          </button>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-xl shadow mb-6 flex items-center gap-3">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search issued books by title or member name..."
            className="w-full outline-none"
          />
        </div>

        {/* Issued Books Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <h2 className="text-xl font-semibold p-6">
            Currently Issued Books
          </h2>

          <table className="w-full text-left border-t">
            <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
              <tr>
                <th className="p-4">Book Title</th>
                <th className="p-4">Member Name</th>
                <th className="p-4">Issue Date</th>
                <th className="p-4">Due Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-t">
                <td className="p-4">The Great Gatsby</td>
                <td className="p-4">John Smith</td>
                <td className="p-4">2/20/2026</td>
                <td className="p-4">3/6/2026</td>
                <td className="p-4">
                  <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    Issued
                  </span>
                </td>
                <td className="p-4">
                  <button className="border px-4 py-1 rounded-lg hover:bg-gray-100">
                    Mark as Returned
                  </button>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}