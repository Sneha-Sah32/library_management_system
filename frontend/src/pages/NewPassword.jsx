import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {
    const [email,setEmail] = useState();
        const navigate =useNavigate();
        const handleSubmit=(e)=>{
            e.preventDefault();
            
        }
  return (
    <div>

 <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-indigo-300">
      
      {/* Card */}
      <div className="bg-white text-white p-8 rounded-2xl shadow-2xl w-[400px]">
        
         <h4 className="text-lg text-black font-semibold text-center mb-4">New Password</h4>
    <p className="text-lg text-black text-center mb-4">Enter new password here</p>

        <form>
      <div className="mb-4">
        <label className="font-bold text-black">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full text-black border border-gray-300 p-2 rounded"
        />
      </div>
    </form>

        {/* Button */}
        <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition">
          Submit
        </button>
      </div>
    </div>
    </div>
  )
}

export default NewPassword
