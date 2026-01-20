import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <div>
     <Navbar/>
     <div className={`${styles.contact}`}>
     <h1>Contact Us</h1>
     <h5>A human always responds, no bots!</h5>
      <div className={styles.container}>
      <input type="text" placeholder='Enter your name' />
      <input type="email" placeholder='Enter your email address'/>
      <input type="text" placeholder='Any Comments..'/>
      <input class="btn btn-primary" type="submit" value="Contact"></input>
     </div>
     </div>
     <Footer/>
    </div>
  )
}
