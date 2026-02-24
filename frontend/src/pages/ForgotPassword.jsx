import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
      const [email,setEmail] = useState();
    const navigate =useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
  return (
  
    <div className="flex justify-center items-center bg-gray-500 min-h-screen">
  <div className="bg-white p-6 rounded w-1/4">
    <h4 className="text-lg text-black font-semibold mb-4">Forgot Password</h4>

    <form>
      <div className="mb-4">
        <label className="font-bold text-black">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full text-black border border-gray-300 p-2 rounded"
        />
      </div>

      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Send
      </button>
    </form>
  </div>
</div>
  )
}

export default ForgotPassword
