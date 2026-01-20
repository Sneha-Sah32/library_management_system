import React from 'react'
import styles from "./Bodyout.module.css";
import { Link } from 'react-router-dom';

export default function Bodyout() {
  return (
    <div className={`${styles.Bodyout}`}>
      <h1>"Smart Management for Smart Libraries"</h1>
      <h2>Your Digital Library Assistant.</h2>
      <p>LIBRARYLYNX is a fully featured, scalable library management system. Our library management service caters to libraries, schools, organizations, and home catalogs.</p>
      <Link type='button' className='btn btn-outline-primary' to="/start">Get Started</Link>
    </div>
  )
}
