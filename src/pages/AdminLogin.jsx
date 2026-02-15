import React, { use, useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from 'react-icons/fa';

import adminLoginLogo from '../assets/images/navbar-logo.jpg';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!phone || !password) {
      setError('Please enter both phone number and password');
      return;
    }



    setIsLoading(true);
    
    // Simulate API call
    setTimeout( async () => {
      // Mock login logic - replace with actual API call

  
      if (phone === '99999' && password === 'password') {
         navigate("/admin");
        // In real app, you would redirect to admin dashboard
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen  bg-slate-950/80 flex items-center justify-center p-4">
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-[#769A7F] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-[#769A7F] opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-[#769A7F] p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              {/* <FaShieldAlt className="text-white text-3xl" /> */}
              <Link to='/'>
              <img  className='w-10 h-10'src={adminLoginLogo} alt="BID-BAJ Logo" />
              </Link>
              <h1 className="text-2xl font-bold text-white">BID BAJ Admin</h1>
            </div>
            <p className="text-[#E8F5E9]">Secure Administration Portal</p>
          </div>
          
          {/* Form */}
          <div className="p-8">
            {error && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-[#769A7F]" />
                  </div>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#769A7F] focus:border-[#769A7F] outline-none transition"
                    placeholder="Enter admin phone number "
                  />
                </div>
              </div>
              
              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-[#769A7F]" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#769A7F] focus:border-[#769A7F] outline-none transition"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500 hover:text-[#769A7F]" />
                    ) : (
                      <FaEye className="text-gray-500 hover:text-[#769A7F]" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-[#769A7F] focus:ring-[#769A7F] border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-[#769A7F] hover:text-[#5a7c64] font-medium"
                >
                  Forgot password?
                </button>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition duration-300 ${
                  isLoading 
                    ? 'bg-[#9ab5a0] cursor-not-allowed' 
                    : 'bg-[#769A7F] hover:bg-[#5a7c64] active:transform active:scale-95'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Authenticating...
                  </span>
                ) : (
                  'Sign In to Dashboard'
                )}
              </button>
            </form>
            
            {/* Security Notice */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center text-sm text-gray-600">
                <FaShieldAlt className="mr-2 text-[#769A7F]" />
                <p>Your credentials are encrypted and secured</p>
              </div>
            </div>
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default AdminLogin;