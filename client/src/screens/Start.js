import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <div>
      <Navbar/>
      <h1>Sign up for LIBRARYLYNX</h1>
      <p>Your library catalog available anywhere, anytime.</p>
      <div className="container">
        <div>
        <h2>Select a Subscription</h2>
        <div>
          <h1>BASIC</h1>
          <p>For an individual's home library.Personal use only, no ads, and we do not sell or share your data.</p>
        </div>
        <div>
          <h1>PRO</h1>
          <p>Enjoy powerful features like lending,patron management, and a customizable published library.</p>
        </div>
        <div>
          <h1>ULTIMATE</h1>
          <p>Need multiple accounts? More than 25 managers? Need invoicing and POs? Contact Us!</p>
        </div>
        </div>
        <div>
          <h1>Account Info</h1>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
        </div>
        <div>
          <p>Already have an account?</p>
        <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  )
}
