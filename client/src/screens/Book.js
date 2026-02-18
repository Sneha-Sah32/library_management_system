// import React, { useEffect, useState } from "react";
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// export default function Books() {
//   const [books, setBooks] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [author, setAuthor] = useState("");
//   const [language, setLanguage] = useState("");

//   const filteredBooks = books.filter((book) =>
//     book.title.toLowerCase().includes(search.toLowerCase()) &&
//     (category === "" || book.category === category) &&
//     (author === "" || book.author === author) &&
//     (language === "" || book.language === language)
//   );


//   useEffect(() => {
//     fetch("http://localhost:5000/api/books")
//       .then(res => res.json())
//       .then(data => setBooks(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <Navbar/>
//       <h2>Library Books</h2>

//       <input
//         type="text"
//         placeholder="Search by title..."
//         className="border p-2 mb-4 w-full"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="flex gap-4 mb-6">

//         <select onChange={(e) => setCategory(e.target.value)} className="border p-2">
//            <option value="">All Categories</option>
//           <option value="Self Help">Self Help</option>
//            <option value="Motivation">Motivation</option>
//            <option value="Fiction">Fiction</option>
//          </select>

//          <select onChange={(e) => setAuthor(e.target.value)} className="border p-2">
//            <option value="">All Authors</option>
//            <option value="James Clear">James Clear</option>
//            <option value="Hector Garcia">Hector Garcia</option>
//            <option value="Buddhisagar">Buddhisagar</option>
//          </select>

//          <select onChange={(e) => setLanguage(e.target.value)} className="border p-2">
//            <option value="">All Languages</option>
//            <option value="English">English</option>
//            <option value="Nepali">Nepali</option>
//          </select>

//       </div>
//       {books.map((book) => (
//         <div key={book._id}>
//           <img
//       src={book.image}
//       alt={book.title}
//       style={{ width: "150px", height: "200px", objectFit: "cover" }}
//     />
//           <h3>{book.title}</h3>
//           <p>Author: {book.author}</p>
//           <p>Available: {book.availableCopies}</p>
//         </div>
//       ))}
//       <Footer/>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || book.category === category) &&
      (author === "" || book.author === author) &&
      (language === "" || book.language === language)
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <h2 className="mb-4 text-center">Library Books</h2>

        <div className="row">
          {/* Books Column */}
          <div className="col-lg-9">
            <div className="row">
              {filteredBooks.map((book) => (
                <div key={book._id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={book.image}
                      className="card-img-top"
                      alt={book.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">Author: {book.author}</p>
                      <p className="card-text">Available: {book.availableCopies}</p>
                    </div>
                  </div>
                </div>
              ))}
              {filteredBooks.length === 0 && (
                <p className="text-center">No books found matching your filters.</p>
              )}
            </div>
          </div>

          {/* Filters Column */}
          <div className="col-lg-3">
            <div className="sticky-top" style={{ top: "100px" }}>
              <h5>Filters</h5>

              <input
                type="text"
                placeholder="Search by title..."
                className="form-control mb-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                onChange={(e) => setCategory(e.target.value)}
                className="form-select mb-3"
              >
                <option value="">All Categories</option>
                <option value="Self Help">Self Help</option>
                <option value="Motivation">Motivation</option>
                <option value="Fiction">Fiction</option>
              </select>

              <select
                onChange={(e) => setAuthor(e.target.value)}
                className="form-select mb-3"
              >
                <option value="">All Authors</option>
                <option value="James Clear">James Clear</option>
                <option value="Hector Garcia">Hector Garcia</option>
                <option value="Buddhisagar">Buddhisagar</option>
              </select>

              <select
                onChange={(e) => setLanguage(e.target.value)}
                className="form-select mb-3"
              >
                <option value="">All Languages</option>
                <option value="English">English</option>
                <option value="Nepali">Nepali</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
