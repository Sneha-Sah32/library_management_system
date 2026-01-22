import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import styles from "./Start.module.css"

export default function Start() {
  return (
    <div>
      <Navbar/>
      <h1>Sign up for LIBRARYLYNX</h1>
      <p>Your library catalog available anywhere, anytime.</p>
      <div className="container">
        <h2>Select a Subscription</h2>
        <div className={`${styles.subscription}`}>
        <div className={`${styles.subs0}`}>
          <h1>BASIC</h1>
          <p>For an individual's home library.Personal use only, no ads, and we do not sell or share your data.</p>
        </div>
        <div className={`${styles.subs1}`}>
          <h1>PRO</h1>
          <p>Enjoy powerful features like lending,patron management, and a customizable published library.</p>
        </div>
        <div className={`${styles.subs2}`}>
          <h1>ULTIMATE</h1>
          <p>Need multiple accounts? More than 25 managers? Need invoicing and POs? Contact Us!</p>
        </div>
        </div>
        <div className={`${styles.info}`}>
          <h1>Account Info</h1>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button className='btn btn-primary my-3'>submit</button>
        </div>
        <div>
          <p>Already have an account?</p>
        <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  )
}
