// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const ForgotPassword = () => {
//       const [email,setEmail] = useState();
//     const navigate =useNavigate();
//     const handleSubmit=(e)=>{
//         e.preventDefault();
        
//     }
//   return (
  
//  <div>

//  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-indigo-300">
      
//       {/* Card */}
//       <div className="bg-white text-white p-8 rounded-2xl shadow-2xl w-[400px]">
        
//          <h4 className="text-lg text-black font-semibold text-center mb-4">Forgot Password</h4>
//     {/* <p className="text-lg text-black text-center mb-4">Enter new password here</p> */}

//         <form>
//       <div className="mb-4">
//         <label className="font-bold text-black">Email</label>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full text-black border border-gray-300 p-2 rounded"
//         />
//       </div>
//     </form>

//         {/* Button */}
//         <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition">
//           Submit
//         </button>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default ForgotPassword

// ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Enter your email");

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        credentials: "include", // send cookies
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("OTP Response:", data);
        alert("OTP sent to your email!");
        navigate("/reset", { state: { email } });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-indigo-300">
      <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-[400px]">
        <h4 className="text-lg font-semibold text-center mb-4">Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-bold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;


// ForgotPassword.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) return alert("Enter your email");

//     try {
//       setLoading(true);
//       const res = await axios.post("http://localhost:5000/api/auth/send-otp", { email });
//       console.log(res.data); // For dev, OTP may appear in console if logged
//       alert("OTP sent to your email!");
//       navigate("/reset", { state: { email } }); // pass email to OTP page
//     } catch (err) {
//       console.log(err.response?.data);
//       alert(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-indigo-300">
//       <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-[400px]">
//         <h4 className="text-lg font-semibold text-center mb-4">Forgot Password</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="font-bold">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="w-full border border-gray-300 p-2 rounded"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
