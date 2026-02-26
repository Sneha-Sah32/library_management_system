import React,{useState} from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/signupp.jpg"
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {Eye,EyeOff} from "lucide-react";

export default function Signup() {
  
  const navigate = useNavigate();
  const [showPassword ,setShowPassword] = useState(false);

  const {login} = useAuth();

  const [name, setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role, setRole] = useState("member");

  const handleRegister = async (e)=>{
    e.preventDefault();

    try{
      const res = await fetch("http://localhost:5000/api/auth/user/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        credentials:"include",
        body:JSON.stringify({fullname:name,email,password,role})
      });
      const data = await res.json();

      if (res.ok){  //(data.success)   changed to match backend response
        login(data.token)
        alert("Registration successful");
        navigate("/login");
      }else{
        alert(data.message)
      }
    }catch(err){
      console.error(err);
      alert("Server error");
    }
  }
  
  return (
    <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgImage})` }}>
    
      <div className="form-card bg-white bg-opacity-90 p-6 rounded shadow-md w-full max-w-md animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Create Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-gray-700 text-md mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Sneha Sah"
              className="w-full rounded-lg text-black p-2 placeholder-gray-400 border-2 border-gray-400"
              value={name} required onChange={(e) => setName(e.target.value)}
            />
            
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Sneha@gmail.com"
              className="w-full border-2 border-gray-400 placeholder-gray-400 rounded-lg text-black p-2"
              value={email} required onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input type={showPassword ? "text":"password"}
                          placeholder="********"
                          className="w-full px-4 py-2 pr-10 border-2 border-gray-400 rounded-lg 
                                 placeholder-gray-400 focus:outline-none text-black
                                 focus:ring-2 focus:ring-blue-400 transition"
                          value={password} required onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3/5 top-27/50 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
          </div>

           <div>
  <label className="block text-gray-700 text-sm mb-1">Role</label>
  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="w-full p-2 border-2 border-gray-400 rounded-lg text-black"
  >
    <option value="member">Member</option>
    <option value="admin">Admin</option>
  </select>
</div>

          {/* <div>
            <label className="block text-gray-700 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border-2 border-gray-400 placeholder-gray-400 rounded-lg text-black p-2"
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
          <br />
          <Link to="/" className="text-gray-500 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
    
  )
}