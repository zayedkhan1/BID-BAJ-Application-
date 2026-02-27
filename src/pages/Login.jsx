
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import PrivacyPolicy from "../components/PriacyPolicy";
import TermsAndConditions from "../components/TermsAndConditions";
//import axios from "axios";


const countryCodes = [
  { code: "+1", country: "USA", flag: "🇺🇸" },
  // { code: "+44", country: "UK", flag: "🇬🇧" },
  // { code: "+91", country: "India", flag: "🇮🇳" },
  // { code: "+880", country: "BD", flag: "🇧🇩" },
  // { code: "+81", country: "Japan", flag: "🇯🇵" },
];

const Login = () => {
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleGetCode = async () => {

    if (!phone) {
      alert("Please enter your mobile number");
      return;
    }
            console.log("Requesting OTP for:",  phone); 

    // Simulate API Call
  //     try {
  //   const response = await axios.post(
  //     "http://bidbaj.com/user/api/v1/otp", 
  //      {
  //       //countryCode: countryCode,  // e.g., "+1"
  //       phone: phone               // e.g., "9999999999" // this object is automatically converted to JSON
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json"  // important for JSON // tells the server you are sending JSON
  //       }
  //     }
  //   );  

 
  //   console.log("Login Success:", response.data.msg);
  //        navigate("/otp-verify");

  // } catch (error) {
  //  // console.log("Login Failed:", error.response?.data);
  //    console.log("Full Error:", error);
  // console.log("Status:", error.response?.status);
  // console.log("Data:", error.response?.data);
  // }


  //////////////
  //need to use proxy server in vite.config.js to avoid CORS issue. then we can use relative path like below instead of full URL
     console.log("Requesting OTP for:",  phone);
  try {
      // http://bidbaj.com/user/api/v1/otp -- this is the actual API endpoint

      // /api/user/api/v1/otp  --- this will be proxied to http://bidbaj.com/user/api/v1/otp by vite dev server
      const response = await fetch("http://bidbaj.com/user/api/v1/otp ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
        }),
      });
console.log("Sending body:", JSON.stringify({ phone }));
    
     console.log("Raw Response:", response.body); // This will show the raw response body stream
      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        console.log("Login Success:", data);
        alert("Login successful!");
          navigate("/otp-verify");

      } else {
        console.log("Login Failed:", data);
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
         // console.log("Login Failed:", error.response?.data);
     console.log("Full Error:", error);
  console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);
    }
    


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
         <a><TermsAndConditions></TermsAndConditions></a>   
            and 
        <a><PrivacyPolicy></PrivacyPolicy></a>   
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;