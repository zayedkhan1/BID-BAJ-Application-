


// -------------------------------
import React, { useState } from 'react';
import { FaCamera, FaUser, FaEnvelope, FaPhone, FaStore, FaSave, FaCheckCircle } from 'react-icons/fa';

const ProfilePage = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@automotive-auctions.com',
    phone: '+1 (555) 987-6543',
    dealership: 'Prestige Motors International',
    image: 'https://i.ibb.co.com/Kc89KVS1/534355199-76518199944578808537-n.jpg'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(prev => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Dealer profile synchronized successfully.');
    }, 1000);
  };

  return (
    <div className="min-h-screen mt-15 bg-[#020617] py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Card */}
        <div className="bg-[#0f172a] rounded-3xl shadow-2xl shadow-blue-900/20 overflow-hidden border border-slate-800">
          
          {/* Header/Banner Area */}
          <div className="h-40 bg-gradient-to-r from-blue-600 via-indigo-900 to-slate-900 relative">
            <div className="absolute inset-0 bg-black/20" /> {/* Dark Overlay */}
            <div className="absolute -bottom-14 left-8 sm:left-12">
              <div className="relative group">
                <img 
                  className="h-32 w-32 rounded-3xl object-cover border-4 border-[#0f172a] shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]" 
                  src={profile.image} 
                  alt="Profile" 
                />
                <label className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-3 rounded-2xl cursor-pointer hover:bg-blue-400 transition-all shadow-xl hover:scale-110 border-2 border-[#0f172a]">
                  <FaCamera size={18} />
                  <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                </label>
              </div>
            </div>
          </div>

          <div className="pt-20 pb-10 px-8 sm:px-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                  User Profile <FaCheckCircle className="text-blue-400 text-xl" />
                </h1>
                <p className="text-slate-400 mt-1">Manage your professional auction credentials</p>
              </div>
              
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="group flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/40 disabled:opacity-50"
              >
                {isSaving ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Syncing...
                  </span>
                ) : (
                  <><FaSave /> Update Profile</>
                )}
              </button>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Phone Number</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-400">
                    <FaPhone />
                  </div>
                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Dealership */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Dealership Field</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-400">
                    <FaStore />
                  </div>
                  <input
                    type="text"
                    name="dealership"
                    value={profile.dealership}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all outline-none"
                  />
                </div>
              </div>

            </div>

            {/* Dark Mode Footer Info */}
            <div className="mt-12 p-5 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex items-start gap-4">
              <div className="mt-1">
                 <FaCheckCircle className="text-blue-500 shadow-sm" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                <span className="text-blue-400 font-bold uppercase tracking-tighter">Security Protocol:</span> Your profile information is encrypted and visible to registered bidders only. Any changes to the Dealership Name will undergo a standard compliance check.
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-center text-slate-600 text-[10px] mt-10 uppercase tracking-[0.2em]">
          Powered by BID BAJ • Enterprise Tier
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;