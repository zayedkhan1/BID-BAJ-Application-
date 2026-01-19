

// import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const OtpVerify = () => {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState(Array(6).fill(""));
//   const inputsRef = useRef([]);

//   const handleChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       inputsRef.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputsRef.current[index - 1].focus();
//     }
//   };

//   const handleVerify = () => {
//     if (otp.join("").length !== 6) {
//       alert("Please enter 6 digit OTP");
//       return;
//     }
//     alert("OTP Verified Successfully!");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div
//         className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm
//                    animate-slideUp"
//       >
//         <h2 className="text-2xl font-semibold text-center mb-4">
//           Verify OTP
//         </h2>

//         <div className="flex justify-between mb-4">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               ref={(el) => (inputsRef.current[index] = el)}
//               type="text"
//               maxLength="1"
//               value={digit}
//               onChange={(e) => handleChange(e.target.value, index)}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//               className="w-11 h-11 text-center text-lg border rounded-lg
//                          focus:ring-2 focus:ring-green-400 transition"
//             />
//           ))}
//         </div>

//         <button
//           onClick={handleVerify}
//           className="w-full bg-green-600 text-white py-2 rounded-lg
//                      hover:bg-green-700 hover:shadow-lg
//                      transition-all"
//         >
//           Verify
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OtpVerify;




import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(150);
  const navigate = useNavigate();
  // const inputRefs = useRef([]);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = () => {
    const finalOtp = otp.join("");
    if (finalOtp.length < 6) {
      alert("Please enter full 6-digit code");
      return;
    }
    alert(`Verifying: ${finalOtp}`);
    navigate("/");
  };

  return (
    <div className="min-h-screen mt-15 flex items-center justify-center bg-slate-950 font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-lg z-10 px-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-10 group"
        >
          <FaArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold uppercase tracking-widest">Back to Login</span>
        </button>

        <div className="bg-slate-900/40 border border-slate-800 backdrop-blur-xl p-2 md:p-6 rounded-[3rem] shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-blue-500 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Verify Identity</h2>
            <p className="text-slate-400">
              We've sent a 6-digit code to <br />
              <span className="text-white font-medium">+1 (•••) •••-9999</span>
            </p>
          </div>

          {/* OTP Input Fields */}
          <div className="flex justify-between gap-2 mb-10">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-10 h-12 md:w-16 md:h-20 bg-slate-800/50 border border-slate-700 text-white text-center text-2xl font-bold rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          {/* Action Button */}
          <button
            onClick={handleVerify}
            className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-900/30 active:scale-[0.98] mb-8"
          >
            Authorize Access
          </button>

          {/* Resend Logic */}
          <div className="text-center">
            <p className="text-slate-500 text-sm mb-2">Didn't receive the code?</p>
            {timer > 0 ? (
              <div className="flex items-center justify-center gap-2 text-blue-400 font-medium">
                <MdOutlineMarkEmailRead />
                <span>Resend available in {timer}s</span>
              </div>
            ) : (
              <button 
                className="text-white hover:text-blue-400 font-bold transition-colors underline underline-offset-4"
                onClick={() => setTimer(59)}
              >
                Resend New Code
              </button>
            )}
          </div>
        </div>

        {/* Footer Brand */}
        {/* <p className="mt-12 text-center text-slate-600 text-xs uppercase tracking-[0.3em]">
          Secured by <span className="text-slate-400 font-bold italic">AUTOBID</span> Encrypted Shield
        </p> */}
      </div>
    </div>
  );
};

export default VerifyOTP;