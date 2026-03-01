
// import React, { useEffect, useState } from "react";


// export default function Books() {
//   const [books, setBooks] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [author, setAuthor] = useState("");
//   const [language, setLanguage] = useState("");

//   const filteredBooks = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(search.toLowerCase()) &&
//       (category === "" || book.category === category) &&
//       (author === "" || book.author === author) &&
//       (language === "" || book.language === language)
//   );

//   useEffect(() => {
//     fetch("http://localhost:5000/api/books")
//       .then((res) => res.json())
//       .then((data) => setBooks(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div style={{backgroundColor:"rgb(241, 230, 230)"}}>
      
//       <div className="container my-5">
//         <h2 className="mb-4 text-center">Library Books</h2>

//         <div className="row">
//           {/* Books Column */}
//           <div className="col-lg-9">
//             <div className="row">
//               {filteredBooks.map((book) => (
//                 <div key={book._id} className="col-md-4 mb-4">
//                   <div className="card h-100 shadow-sm">
//                     <img
//                       src={book.image}
//                       className="card-img-top"
//                       alt={book.title}
//                       style={{ height: "200px", objectFit: "cover" }}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{book.title}</h5>
//                       <p className="card-text">Author: {book.author}</p>
//                       <p className="card-text">Available: {book.availableCopies}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               {filteredBooks.length === 0 && (
//                 <p className="text-center">No books found matching your filters.</p>
//               )}
//             </div>
//           </div>

//           {/* Filters Column */}
//           <div className="col-lg-3">
//             <div className="sticky-top" style={{ top: "100px" }}>
//               <h5>Filters</h5>

//               <input
//                 type="text"
//                 placeholder="Search by title..."
//                 className="form-control mb-3"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />

//               <select
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="form-select mb-3"
//               >
//                 <option value="">All Categories</option>
//                 <option value="Self Help">Self Help</option>
//                 <option value="Motivation">Motivation</option>
//                 <option value="Fiction">Fiction</option>
//               </select>

//               <select
//                 onChange={(e) => setAuthor(e.target.value)}
//                 className="form-select mb-3"
//               >
//                 <option value="">All Authors</option>
//                 <option value="James Clear">James Clear</option>
//                 <option value="Hector Garcia">Hector Garcia</option>
//                 <option value="Buddhisagar">Buddhisagar</option>
//               </select>

//               <select
//                 onChange={(e) => setLanguage(e.target.value)}
//                 className="form-select mb-3"
//               >
//                 <option value="">All Languages</option>
//                 <option value="English">English</option>
//                 <option value="Nepali">Nepali</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Books() {

  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || book.category === category) &&
      (author === "" || book.author === author) &&
      (language === "" || book.language === language)
  );

  return (
    <div className="dashboard flex min-h-screen">

      {/* ✅ SIDEBAR */}
      <aside className="bg-gray-800 text-white w-64 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">LibraryLynx</h1>

        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-purple-400">Dashboard</a>
          <a href="/books" className="hover:text-purple-400">Books</a>
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

      {/* ✅ MAIN CONTENT */}
      <main className="flex-1 bg-gray-200 p-8">

        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-black">Library Books</h2>
          <div className="text-gray-700">Admin Panel</div>
        </header>

        <div className="flex gap-6">

          {/* 📚 BOOKS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">

            {filteredBooks.map((book) => (
              <div key={book._id} className="bg-white rounded shadow">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-t"
                />

                <div className="p-4 bg-black">
                  <h5 className="font-semibold text-lg">
                    {book.title}
                  </h5>

                  <p>Author: {book.author}</p>
                  <p>Available: {book.availableCopies}</p>
                </div>
              </div>
            ))}

            {filteredBooks.length === 0 && (
              <p>No books found matching filters.</p>
            )}
          </div>

          {/* 🔎 FILTER SECTION */}
          <div className="w-72 bg-white p-4 rounded shadow h-fit sticky top-24">

            <h5 className="font-bold mb-3 text-black">Filters</h5>

            <input
              type="text"
              placeholder="Search by title..."
              className="w-full border p-2 mb-3 rounded text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="w-full border p-2 mb-3 rounded text-black"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Self Help">Self Help</option>
              <option value="Motivation">Motivation</option>
              <option value="Fiction">Fiction</option>
            </select>

            <select
              className="w-full border p-2 mb-3 rounded text-black"
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="">All Authors</option>
              <option value="James Clear">James Clear</option>
              <option value="Hector Garcia">Hector Garcia</option>
              <option value="Buddhisagar">Buddhisagar</option>
            </select>

            <select
              className="w-full border p-2 rounded text-black"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">All Languages</option>
              <option value="English">English</option>
              <option value="Nepali">Nepali</option>
            </select>

          </div>
        </div>

      </main>
    </div>
  );
}