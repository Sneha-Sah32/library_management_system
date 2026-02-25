// import React, { useRef } from "react";

// export default function ResetOTP() {
//   const inputs = useRef([]);

//   // Move to next input automatically
//   const handleChange = (e, index) => {
//     const value = e.target.value;

//     if (value.length === 1 && index < 5) {
//       inputs.current[index + 1].focus();
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-indigo-300">
      
//       {/* Card */}
//       <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-2xl w-[400px]">
        
//         <h2 className="text-2xl font-semibold text-center mb-2">
//           Reset password OTP
//         </h2>

//         <p className="text-sm text-gray-300 text-center mb-6">
//           Enter the 6-digit code sent to your email id.
//         </p>

//         {/* OTP Boxes */}
//         <div className="flex justify-between mb-6">
//           {[...Array(6)].map((_, index) => (
//             <input
//               key={index}
//               type="text"
//               maxLength="1"
//               ref={(el) => (inputs.current[index] = el)}
//               onChange={(e) => handleChange(e, index)}
//               className="w-12 h-12 text-center text-lg rounded-lg bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           ))}
//         </div>

//         {/* Button */}
//         <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResetOTP() {
  const inputs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) inputs.current[index + 1].focus();
  };

  const handleSubmit = async () => {
    const otp = inputs.current.map((input) => input.value).join("");
    if (otp.length !== 6) return alert("Enter 6-digit OTP");

    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // if your backend uses cookies
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        navigate("/newpass", { state: { email, otp } });
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-indigo-300">
      <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-2xl w-[400px]">
        <h2 className="text-2xl font-semibold text-center mb-2">Reset password OTP</h2>
        <p className="text-sm text-gray-300 text-center mb-6">
          Enter the 6-digit code sent to your email id.
        </p>
        <div className="flex justify-between mb-6">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-center text-lg rounded-lg bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}

// ResetOTP.jsx
// import React, { useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function ResetOTP() {
//   const inputs = useRef([]);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = location.state?.email;

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (value.length === 1 && index < 5) inputs.current[index + 1].focus();
//   };

//   const handleSubmit = async () => {
//     const otp = inputs.current.map((input) => input.value).join("");
//     if (otp.length !== 6) return alert("Enter 6-digit OTP");

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
//         email,
//         otp,
//       });
//       alert(res.data.message);
//       navigate("/new-password", { state: { email, otp } });
//     } catch (err) {
//       console.log(err.response?.data);
//       alert(err.response?.data?.message || "Invalid OTP");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-indigo-300">
//       <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-2xl w-[400px]">
//         <h2 className="text-2xl font-semibold text-center mb-2">Reset password OTP</h2>
//         <p className="text-sm text-gray-300 text-center mb-6">
//           Enter the 6-digit code sent to your email id.
//         </p>
//         <div className="flex justify-between mb-6">
//           {[...Array(6)].map((_, index) => (
//             <input
//               key={index}
//               type="text"
//               maxLength="1"
//               ref={(el) => (inputs.current[index] = el)}
//               onChange={(e) => handleChange(e, index)}
//               className="w-12 h-12 text-center text-lg rounded-lg bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           ))}
//         </div>
//         <button
//           onClick={handleSubmit}
//           className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition"
//         >
//           Verify OTP
//         </button>
//       </div>
//     </div>
//   );
// }