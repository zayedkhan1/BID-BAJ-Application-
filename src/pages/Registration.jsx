import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaBuilding, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import adminLoginLogo from '../assets/images/navbar-logo.jpg'; // Adjust path as needed

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dealership: '',
    city_province: '',
  });
  //const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
   
    // Basic validation
    const { name, phone, email, dealership } = formData;
    if (!name || !phone || !email || !dealership ) {
      setError('Please fill in all fields');
      return;
    }

    //setIsLoading(true);

    // Simulate API call
   
      // Mock registration – replace with actual API integration

      //acutal api: http://bidbaj.com/user/api/v1/registration
      // proxy api: /api/user/api/v1/registration
       
      console.log('Submitting registration data:', formData.name, formData.phone, formData.email, formData.dealership, formData.city_providence);

      const res = await fetch('/api/user/api/v1/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          dealership: formData.dealership,
          city_province: formData.city_province,
        }),
      });
      const data = await res.json();

       if (!res.ok) {
        setError(data.message || 'Registration failed. Please try again.');
        //setIsLoading(false);
        return;
      }else{
      console.log('Registration data:', data);
      setSuccess('Registration successful! Redirecting to login...');
       navigate('/login');
      //setIsLoading(false);
     
      }
       

    

      // Simulate redirect after success
      // setTimeout(() => {
      //   navigate('/login'); // Adjust route as needed
      // }, 2000);
   
  };

  return (
    <div className="min-h-screen bg-slate-950/80 flex items-center justify-center p-30">
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-[#769A7F] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-[#769A7F] opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="relative w-full max-w-2xl">
        {/* Registration Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-[#769A7F] p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Link to="/">
                <img className="w-10 h-10" src={adminLoginLogo} alt="BID-BAJ Logo" />
              </Link>
              <h1 className="text-2xl font-bold text-white">BIDBAJ Dealership</h1>
            </div>
            <p className="text-[#E8F5E9]">Create your dealership account</p>
          </div>

          {/* Form */}
          <div className="p-8">
            {error && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}
            {success && (
              <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-600 text-sm text-center">{success}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-[#769A7F]" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#769A7F] focus:border-[#769A7F] outline-none transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-[#769A7F]" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#769A7F] focus:border-[#769A7F] outline-none transition"
                    placeholder="+1 234 567 890"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-[#769A7F]" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#769A7F] focus:border-[#769A7F] outline-none transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Dealership Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dealership Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaBuilding className="text-[#769A7F]" />
                  </div>
                  <input
                    type="text"
                    name="dealership"
                    value={formData.dealership}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#769A7F] focus:border-[#769A7F] outline-none transition"
                    placeholder="ABC Motors"
                    required
                  />
                </div>
              </div>

              {/* City/Province Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City / Province
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMapMarkerAlt className="text-[#769A7F]" />
                  </div>
                  <input
                    type="text"
                    name="city_province"
                    value={formData.city_province}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#769A7F] focus:border-[#769A7F] outline-none transition"
                    placeholder="Los Angeles, CA"
                  
                  />
                </div>
              </div>

              {/* Submit Button */}
              {/* <button
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
                    Creating account...
                  </span>
                ) : (
                  'Register Dealership'
                )}
              </button> */}
              <button
              type="submit"
                // disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition duration-300 bg-[#769A7F] hover:bg-[#5a7c64] active:transform active:scale-95`}
              >
                Register Dealership
                
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-[#769A7F] font-medium hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>

            {/* Security Notice */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center text-sm text-gray-600">
                <FaShieldAlt className="mr-2 text-[#769A7F]" />
                <p>Your information is encrypted and secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;