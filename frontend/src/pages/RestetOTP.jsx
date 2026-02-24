import React, { useRef } from "react";

export default function ResetOTP() {
  const inputs = useRef([]);

  // Move to next input automatically
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-indigo-300">
      
      {/* Card */}
      <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-2xl w-[400px]">
        
        <h2 className="text-2xl font-semibold text-center mb-2">
          Reset password OTP
        </h2>

        <p className="text-sm text-gray-300 text-center mb-6">
          Enter the 6-digit code sent to your email id.
        </p>

        {/* OTP Boxes */}
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

        {/* Button */}
        <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 transition">
          Send
        </button>
      </div>
    </div>
  );
}