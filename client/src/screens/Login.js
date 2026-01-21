import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login() {
  return (
    <>
      <Navbar/>
      <div className={`${styles.login}`}>
        <h3>Manager Login</h3>
        <input type="email" placeholder='Email'/>
        <button>Next</button>
        <p>Don't have an account?</p>
        <Link to="/start">Sign up</Link>
      </div>
    </>
  )
}
