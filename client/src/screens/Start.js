import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import styles from "./Start.module.css"
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Start() {

  const navigate = useNavigate();

  const {login} = useAuth();

  const [name, setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleRegister = async (e)=>{
    e.preventDefault();

    try{
      const res = await fetch("http://localhost:5000/api/auth/user/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        credentials:"include",
        body:JSON.stringify({fullname:name,email,password})
      });
      const data = await res.json();

      if (res.ok){  //(data.success)   changed to match backend response
        login(data.token)
        alert("Registration successful");
        navigate("/");
      }else{
        alert(data.message)
      }
    }catch(err){
      console.error(err);
      alert("Server error");
    }
  }
  

  return (
    <div>
      <Navbar/>
      <h1>Sign up for LIBRARYLYNX</h1>
      <p>Your library catalog available anywhere, anytime.</p>
      <form className="container" onSubmit={handleRegister}>
        {/* <h2>Select a Subscription</h2>
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
        </div> */}
        <div className={`${styles.info}`}>
          <h1>Account Info</h1>
          <input type="text" placeholder='Full Name' value={name} required onChange={(e) => setName(e.target.value)} />
          {/* <input type="text" placeholder='Last Name' /> */}
          <input type="email" placeholder='Email' value={email} required onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='password' value={password} required onChange={(e)=>setPassword(e.target.value)}/>
          <button className='btn btn-primary my-3'>submit</button>
        </div>
        <div>
          <p>Already have an account?</p>
        <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  )
}
