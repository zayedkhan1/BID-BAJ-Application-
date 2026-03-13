


import { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaStore, FaCamera, FaCheckCircle } from "react-icons/fa";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  //const yourToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc3MTIxNjE4LCJpYXQiOjE3NzE5Mzc2MTgsImp0aSI6IjA0M2EzNjQ3YzE1ZjQ3OTJhMDFjZjAzN2M4NGJlMGI1IiwidXNlcl9pZCI6MjJ9.uJX3kF4W5QDpMbqjmqWU26hQn2nqN_QTQGclurLwsLA";

  const fetchProfile = async () => {
    try {
      const response = await fetch("/api/user/api/v1/profile/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProfile(data.user);
    } catch (error) {
      console.error("Profile fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpdate = () => {
    // Future update API will go here
    console.log("Update button clicked");
  };

  // Simulate image upload (design only)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app you'd upload the file and update the profile
      console.log("Selected file:", file);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] to-[#0b1425] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-blue-500/30 border-[#769A7F] rounded-full animate-spin"></div>
          <span className="text-slate-300 text-sm font-medium tracking-wider">LOADING PROFILE</span>
        </div>
      </div>
    );
  }

  console.log("Fetched Profile:", profile);

  return (
    <div className=" mt-15 min-h-screen bg-gradient-to-br from-[#020617] via-[#0b1425] to-[#0a0f1e] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Premium Card with glassmorphism */}
        <div className="backdrop-blur-xl bg-[#0f172a]/80 rounded-3xl shadow-2xl shadow-blue-900/30 border border-slate-700/50 overflow-hidden">
          
          {/* Header gradient area with profile image overlap */}
          <div className="relative h-36 bg-gradient-to-r from-[#769A7F] via-[#769A7F] to-slate-900">
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Profile image with camera edit overlay */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0">
              <div className="relative group">
                <img
                  
                  src= {`http://bidbaj.com${profile?.profile_picture}` }
                  alt="Profile"
                  className="w-28 h-28 rounded-2xl object-cover border-4 border-[#0f172a] shadow-2xl ring-2 ring-blue-500/20 group-hover:ring-blue-400/50 transition-all"
                />
                <label className="absolute -bottom-1 -right-1 bg-[#769A7F] hover:bg-[#769A7F] text-white p-2.5 rounded-xl cursor-pointer shadow-xl hover:scale-110 transition-all border-2 border-[#0f172a]">
                  <FaCamera size={14} />
                  <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                </label>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="pt-20 pb-10 px-6 sm:px-10">
            
            {/* Name and verification badge */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-8 gap-4">
              <div className="text-center sm:text-left">
                <h2 className="text-3xl font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                  {profile?.name}
                  <FaCheckCircle className="text-blue-400 text-xl" />
                </h2>
                <p className="text-slate-400 text-sm mt-1"> {profile?.role}</p>
              </div>
              
              {/* Optional meta info */}
              <div className="text-xs text-slate-500 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                ID: {profile?.id || "AU-2247"}
              </div>
            </div>

            {/* Info cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Email */}
              <div className="group bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <FaEnvelope className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email</p>
                    <p className="text-white text-sm font-medium break-all">{profile?.email}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <FaPhoneAlt className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Phone</p>
                    <p className="text-white text-sm">{profile?.phone || "Not provided"}</p>
                  </div>
                </div>
              </div>

              {/* Dealership */}
              <div className="group bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 transition-all duration-300 md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <FaStore className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Dealership</p>
                    <p className="text-white text-base font-medium">{profile?.dealership_name || "Independent Dealer"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Update button */}
            <button
              onClick={handleUpdate}
              className="mt-8 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#769A7F] to-[#769A7F] text-white py-4 rounded-2xl font-semibold text-base shadow-lg shadow-blue-900/40 hover:shadow-blue-800/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-blue-400/20"
            >
              <FaUser className="text-white/80" />
              UPDATE PROFILE INFORMATION
            </button>

            {/* Security footer */}
            <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl flex items-start gap-3">
              <FaCheckCircle className="text-blue-400 shrink-0 mt-0.5" size={16} />
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="text-blue-300 font-semibold">🔐 Encrypted profile</span> — Your data is visible only to verified bidders. Changes may require a brief compliance check.
              </p>
            </div>
          </div>
        </div>

        {/* Branding line */}
        <p className="text-center text-slate-700 text-[10px] mt-8 uppercase tracking-[0.3em] font-mono">
          POWERED BY BIDBAJ • ENTERPRISE TIER
        </p>
      </div>
    </div>
  );
};

export default Profile;