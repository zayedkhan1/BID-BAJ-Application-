


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
    


    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl w-[400px] relative shadow-2xl border border-white/10 transition-all duration-200 ease-out">
    <button
      onClick={onClose}
      className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors text-xl"
    >
      ✕
    </button>

    {loading ? (
      <Loading />
    ) : (
      <div className="text-center">
        {/* Profile Image with Ring */}
        <div className="relative inline-block">
          <img
            src={`http://bidbaj.com${profile?.profile_picture}`}
            className="w-24 h-24 rounded-full mx-auto mb-2 ring-4 ring-white/20"
            alt=""
          />
          {/* Online Status Dot */}
          <span
            className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${
              profile?.online_status ? 'bg-green-500' : 'bg-gray-500'
            }`}
          />
        </div>
        <p className="text-gray-400 font-bold mb-1">
          {profile?.name}
        </p>

        {/* Status Text */}
        <p className="text-sm font-semibold text-white mb-4">
          {profile?.online_status ? 'Online' : 'Offline'}
        </p>

        {/* Divider */}
        <div className="border-t border-white/10 my-4" />

        {/* Details with Icons */}
        <div className="space-y-3 text-left">
          {/* Email */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 w-5">📧</span>
            <span className="text-gray-300">Email:</span>
            <span className="text-white ml-auto truncate">{profile?.email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 w-5">📞</span>
            <span className="text-gray-300">Phone:</span>
            <span className="text-white ml-auto">{profile?.phone}</span>
          </div>

          {/* Dealership */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 w-5">🏢</span>
            <span className="text-gray-300">Dealership:</span>
            <span className="text-white ml-auto truncate">{profile?.dealership_name || 'N/A'}</span>
          </div>

          {/* Verification Status with Badge */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 w-5">✓</span>
            <span className="text-gray-300">Verification:</span>
            <span className="ml-auto">
              {profile?.is_verified ? (
                <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-sm font-medium">
                  Verified
                </span>
              ) : (
                <span className="bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded-full text-sm font-medium">
                  Not Verified
                </span>
              )}
            </span>
          </div>

          {/* Member Since */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 w-5">📅</span>
            <span className="text-gray-300">Member Since:</span>
            <span className="text-white ml-auto">{profile?.registration_date}</span>
          </div>

          {/* City/Province */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 w-5">📍</span>
            <span className="text-gray-300">City/Province:</span>
            <span className="text-white ml-auto truncate">{profile?.city_province || 'N/A'}</span>
          </div>
        </div>
      </div>
    )}
  </div>
</div>
  );
};

export default ProfileModal;








