import React, {useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Link } from "react-router-dom"


const Profile = () => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/profile",{
        method:"GET",
        credentials:"include"
    })
        .then(res => res.json())
        .then(data => {
            console.log("Profile data:", data);
            setUser(data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
}, []);


if (loading) return <div>Loading...</div>;

  return (
    <div>
      
         <Navbar/>
         <Sidebar/>
         <div className='container' style={{height:"30rem",marginBottom:"4rem",marginTop:"5rem"}}>
       <h1>Profile</h1>
      <img
        src="/images/profile.jpg"
        alt="Profile"
        style={{ borderRadius: "50%",height:"150px" }}
      />
      <p>Name:{user.fullname}</p>
      <p>Email: {user.email}</p>
      <p>Subscription: active</p>
      </div>
      <Footer/>
    
    </div>
  )
}

export default Profile;



