import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div>
      <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light bg-light`}>
  <div className="container-fluid">
    <h4>LIBRARYLYNX</h4>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>
      </ul>
      <Link type="button" className="btn btn-outline-primary" to="/start">Get Started</Link>
      <Link type="button" className="btn btn-outline-primary" to="/login">Log In</Link>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}
