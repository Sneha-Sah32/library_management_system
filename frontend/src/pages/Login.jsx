
import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgImage from "../assets/loginn.avif";
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
      // navigate("/dash");
    }else{
      alert(data.message);
    }
    } catch(err){
      console.error("Login failed:",err);
      alert("Server error");
    }
  }
  
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}>

    <div className="min-h-screen flex items-center justify-center  from-blue-100 to-blue-200">
      
      <div className="bg-white shadow-2xl rounded-2xl p-9 w-full max-w-md">
        
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">
          Login to Librarylynx
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label className="block text-gray-800 mb-1">Email</label>
            <input
              type="email"
              placeholder="Karina@gmail.com"
              className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={email} required onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-800 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={password} required onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link 
  to="/register" 
  className="text-blue-600 hover:underline"
>
  Sign up
</Link>
        </p>
        <p className="text-center text-sm text-gray-600 mt-1">
          <Link to="/"
   
  className=" hover:underline"
>
  Back to home
</Link>
        </p>

      </div>
    </div>
    </div>
  );
}