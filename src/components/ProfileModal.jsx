


import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const ProfileModal = ({ userId, onClose }) => {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  

  console.log("ProfileModal userId:", userId);

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        `/api/user/api/v1/profile/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      console.log("PROFILE RESPONSE:", result.user);

      setProfile(result.user);

    } catch (error) {
      console.error("Profile error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  console.log("Profile state:", profile);

  return (
    


<div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
  <div className="relative w-[450px] transform transition-all duration-300 ease-out hover:scale-[1.02]">
    {/* Outer glow effect */}
    <div className="absolute -inset-0.5  rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300" />
    
    {/* Main card */}
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 p-6 rounded-2xl shadow-2xl shadow-black/50 border border-white/10 backdrop-blur-sm">
      
      {/* Decorative top right corner light */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
      
      <button
        onClick={onClose}
        className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white/70 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-200 z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {loading ? (
        <Loading />
      ) : (
        <div className="text-center">
          {/* Profile Image with premium ring and glow */}
          <div className="relative inline-block mb-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#769A7F]  to-[#769A7F]  blur-md opacity-75" />
            <img
              src={`http://bidbaj.com${profile?.profile_picture}`}
              className="relative w-24 h-24 rounded-full mx-auto ring-4 ring-white/10 object-cover"
              alt=""
            />
            {/* Online Status Dot with pulse */}
            <span
              className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${
                profile?.online_status 
                  ? 'bg-green-500 animate-pulse' 
                  : 'bg-gray-500'
              }`}
            />
          </div>
          
          <p className="text-white font-semibold text-lg tracking-wide mb-0.5">
            {profile?.name}
          </p>
          <p className="text-sm font-medium text-white/60 mb-4">
            {profile?.online_status ? '🟢 Online' : '⚪ Offline'}
          </p>

          {/* Divider with gradient */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gradient-to-br from-gray-900 to-gray-800 text-white/40">Details</span>
            </div>
          </div>

          {/* Details with refined icons and hover effects */}
          <div className="space-y-3 text-left font-semibold">
            {/* Email */}
            <div className="group flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
              <svg className="w-5 h-5 text-white/40 group-hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-white/60 text-sm">Email:</span>
              <span className="text-white/90 text-sm ml-auto truncate font-semibold">{profile?.email}</span>
            </div>

            {/* Phone */}
            <div className="group flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
              <svg className="w-5 h-5 text-white/40 group-hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white/60 text-sm">Phone:</span>
              <span className="text-white/90 text-sm ml-auto font-semibold">{profile?.phone}</span>
            </div>

            {/* Dealership */}
            <div className="group flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
              <svg className="w-5 h-5 text-white/40 group-hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-white/60 text-sm">Dealership:</span>
              <span className="text-white/90 text-sm ml-auto truncate font-semibold">{profile?.dealership_name || 'N/A'}</span>
            </div>

            {/* Verification Status with refined badge */}
            <div className="group flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
              <svg className="w-5 h-5 text-white/40 group-hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white/60 text-sm">Verification:</span>
              <span className="ml-auto">
                {profile?.is_verified ? (
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Verified
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 bg-white/5 text-white/40 px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    Not Verified
                  </span>
                )}
              </span>
            </div>

            {/* Member Since */}
            <div className="group flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
              <svg className="w-5 h-5 text-white/40 group-hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-white/60 text-sm">Member Since:</span>
              <span className="text-white/90 text-sm ml-auto font-semibold">{profile?.registration_date}</span>
            </div>

            {/* City/Province */}
            <div className="group flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
              <svg className="w-5 h-5 text-white/40 group-hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-white/60 text-sm">City/Province:</span>
              <span className="text-white/90 text-sm ml-auto truncate font-semibold">{profile?.city_province || 'N/A'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
  );
};

export default ProfileModal;








