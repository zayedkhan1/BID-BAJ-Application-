// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaPhoneAlt } from "react-icons/fa";

// const countryCodes = [
//   { code: "+1", country: "USA" },
//   { code: "+44", country: "UK" },
//   { code: "+91", country: "India" },
//   { code: "+880", country: "Bangladesh" },
//   { code: "+81", country: "Japan" },
// ];

// const Login = () => {
//   const [countryCode, setCountryCode] = useState("+1");
//   const [phone, setPhone] = useState("");
//   const navigate = useNavigate();

//   const handleGetCode = () => {
//     if (!phone) {
//       alert("Please enter your mobile number");
//       return;
//     }
//     alert(`OTP sent to ${countryCode}${phone}`);
//     navigate("/otp-verify");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-semibold text-center mb-4">
//           Login with Mobile
//         </h2>

//         <div className="flex gap-2 mb-4">
//           <select
//             className="border rounded-lg px-2 py-2 w-1/3"
//             value={countryCode}
//             onChange={(e) => setCountryCode(e.target.value)}
//           >
//             {countryCodes.map((item) => (
//               <option key={item.code} value={item.code}>
//                 {item.country} ({item.code})
//               </option>
//             ))}
//           </select>

//           <div className="relative w-2/3">
//             <FaPhoneAlt className="absolute top-3 left-3 text-gray-400" />
//             <input
//               type="tel"
//               placeholder="Mobile Number"
//               className="border rounded-lg pl-10 pr-3 py-2 w-full"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//         </div>

//         <button
//           onClick={handleGetCode}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//         >
//           Get Code
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;







import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import PrivacyPolicy from "../components/PriacyPolicy";
import TermsAndConditions from "../components/TermsAndConditions";

const countryCodes = [
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+880", country: "BD", flag: "🇧🇩" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
];

const Login = () => {
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleGetCode = () => {
    if (!phone) {
      alert("Please enter your mobile number");
      return;
    }
    // Simulate API Call
    navigate("/otp-verify");
  };

  return (
    <div className="min-h-screen flex bg-slate-950 font-sans">
      {/* Left Side: Visual / Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200" 
          alt="Premium Car" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="relative z-10 self-center px-20">
          <h1 className="text-6xl font-black text-white leading-tight mb-6">
            The Keys to Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Next Legend.</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-md leading-relaxed">
            Join the world's most exclusive digital car auction house. Exclusive classics and modern masterpieces.
          </p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 md:px-20 relative">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full" />
        
        <div className="w-full max-w-md z-10">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <MdVerifiedUser className="text-white text-2xl" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tighter italic">BID<span className="text-blue-500"> BAJ</span></span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-slate-400">Secure access via mobile verification</p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-3">
              {/* Country Code Select */}
              <div className="relative w-1/3 group">
                <select
                  className="w-full h-14 bg-slate-900 border border-slate-800 text-white rounded-2xl px-4 appearance-none focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  {countryCodes.map((item) => (
                    <option key={item.code} value={item.code} className="bg-slate-900">
                      {item.flag} {item.code}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs text-center">▼</div>
              </div>

              {/* Phone Input */}
              <div className="relative w-2/3 group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-500 text-slate-500">
                  <FaPhoneAlt size={14} />
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full h-14 bg-slate-900 border border-slate-800 text-white rounded-2xl pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={handleGetCode}
              className="group relative w-full h-14 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98] overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <span>Send Verification Code</span>
                <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
            </button>
          </div>

          <p className="mt-10 text-center text-slate-500 text-sm">
            By continuing, you agree to our 
         <button><TermsAndConditions></TermsAndConditions></button>   
            and 
        <button><PrivacyPolicy></PrivacyPolicy></button>   
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;