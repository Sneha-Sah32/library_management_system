import React, { use, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { useAuth } from '../context/AuthContext'

export default function Login() {

  const {login} = useAuth();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();   //preventDefault  is something like when browser says "form submitted i will reload the page now" well react says "nope i got preventdefault()"

    try{
  const res = await fetch("http://localhost:5000/api/auth/user/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    credentials:"include",
    body: JSON.stringify({email,password})
  });

  const data = await res.json();
  if (res.ok){
    login(data.token);
    // localStorage.setItem("token",data.token);  //setItem
    
    alert("login successful");
    navigate("/");
  }else{
    alert(data.message);
  }
  } catch(err){
    console.error("Login failed:",err);
    alert("Server error");
  }
}


  return (
    <>
      <Navbar/>
      <form className={`${styles.login}`} onSubmit={handleLogin}>
        <h3>Manager Login</h3>
        <input type="email" placeholder='Email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter your password' value={password} required onChange={(e)=>setPassword(e.target.value)}/>
        <button className='btn btn-primary my-3'>Next</button>
        <p>Don't have an account?</p>
        <Link to="/start">Sign up</Link>
      </form>
    </>
  )
}
