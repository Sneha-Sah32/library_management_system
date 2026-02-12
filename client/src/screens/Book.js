import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Navbar/>
      <h2>Library Books</h2>

      {books.map((book) => (
        <div key={book._id}>
          <img
      src={book.image}
      alt={book.title}
      style={{ width: "150px", height: "200px", objectFit: "cover" }}
    />
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Available: {book.availableCopies}</p>
        </div>
      ))}
      <Footer/>
    </div>
  );
}

