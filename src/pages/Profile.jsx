// import React, { useState } from 'react';
// import { FaCamera, FaUser, FaEnvelope, FaPhone, FaStore, FaSave, FaCheckCircle } from 'react-icons/fa';

// const ProfilePage = () => {
//   const [isSaving, setIsSaving] = useState(false);
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     email: 'john.doe@automotive-auctions.com',
//     phone: '+1 (555) 987-6543',
//     dealership: 'Prestige Motors International',
//     image: 'https://i.ibb.co.com/Kc89KVS1/534355199-76518199944578808537-n.jpg'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile(prev => ({ ...prev, [name]: value }));
    
    
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfile(prev => ({ ...prev, image: URL.createObjectURL(file) }));
//     }
//   };

//   const handleSave = () => {
//     setIsSaving(true);
//     setTimeout(() => {
//       setIsSaving(false);
//       alert('Dealer profile synchronized successfully.');
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen mt-15 bg-[#020617] py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-200">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Main Card */}
//         <div className="bg-[#0f172a] rounded-3xl shadow-2xl shadow-blue-900/20 overflow-hidden border border-slate-800">
          
//           {/* Header/Banner Area */}
//           <div className="h-40 bg-gradient-to-r from-blue-600 via-indigo-900 to-slate-900 relative">
//             <div className="absolute inset-0 bg-black/20" /> {/* Dark Overlay */}
//             <div className="absolute -bottom-14 left-8 sm:left-12">
//               <div className="relative group">
//                 <img 
//                   className="h-32 w-32 rounded-3xl object-cover border-4 border-[#0f172a] shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]" 
//                   src={profile.image} 
//                   alt="Profile" 
//                 />
//                 <label className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-3 rounded-2xl cursor-pointer hover:bg-blue-400 transition-all shadow-xl hover:scale-110 border-2 border-[#0f172a]">
//                   <FaCamera size={18} />
//                   <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="pt-20 pb-10 px-8 sm:px-12">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
//               <div>
//                 <h1 className="text-3xl font-bold text-white flex items-center gap-3">
//                   User Profile <FaCheckCircle className="text-blue-400 text-xl" />
//                 </h1>
//                 <p className="text-slate-400 mt-1">Manage your professional auction credentials</p>
//               </div>
              
//               <button
//                  onClick={handleSave}
//                 disabled={isSaving}
//                 className="group flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/40 disabled:opacity-50"
//               >
//                 {isSaving ? (
//                   <span className="flex items-center gap-2">
//                     <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//                     </svg>
//                     Syncing...
//                   </span>
//                 ) : (
//                   <><FaSave /> Update Profile</>
//                 )}
//               </button>
//             </div>

//             {/* Form Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              
//               {/* Name */}
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-400">
//                     <FaUser />
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={profile.name}
//                     onChange={handleChange}
//                     className="block w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-400">
//                     <FaEnvelope />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     value={profile.email}
//                     onChange={handleChange}
//                     className="block w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-slate-400 ml-1">Phone Number</label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-400">
//                     <FaPhone />
//                   </div>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={profile.phone}
//                     onChange={handleChange}
//                     className="block w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Dealership */}
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-slate-400 ml-1">Dealership Field</label>
//                 <div className="relative group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-400">
//                     <FaStore />
//                   </div>
//                   <input
//                     type="text"
//                     name="dealership"
//                     value={profile.dealership}
//                     onChange={handleChange}
//                     className="block w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all outline-none"
//                   />
//                 </div>
//               </div>

//             </div>

//             {/* Dark Mode Footer Info */}
//             <div className="mt-12 p-5 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex items-start gap-4">
//               <div className="mt-1">
//                  <FaCheckCircle className="text-blue-500 shadow-sm" />
//               </div>
//               <p className="text-slate-400 text-xs leading-relaxed">
//                 <span className="text-blue-400 font-bold uppercase tracking-tighter">Security Protocol:</span> Your profile information is encrypted and visible to registered bidders only. Any changes to the Dealership Name will undergo a standard compliance check.
//               </p>
//             </div>
//           </div>
//         </div>
        
//         <p className="text-center text-slate-600 text-[10px] mt-10 uppercase tracking-[0.2em]">
//           Powered by BIDBAJ • Enterprise Tier
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





import { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaStore, FaEdit } from "react-icons/fa";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

    // For testing, you can hardcode the token here or retrieve it from localStorage

    // const yourToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc3MTIxNjE4LCJpYXQiOjE3NzE5Mzc2MTgsImp0aSI6IjA0M2EzNjQ3YzE1ZjQ3OTJhMDFjZjAzN2M4NGJlMGI1IiwidXNlcl9pZCI6MjJ9.uJX3kF4W5QDpMbqjmqWU26hQn2nqN_QTQGclurLwsLA";


  const fetchProfile = async () => {
    try {
      const yourToken = localStorage.getItem("token");
      const response = await fetch(
        "/api/user/api/v1/profile/me",
          {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${yourToken}`,
                            "Content-Type": "application/json",
                        },
                    }
      );
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading Profile...
      </div>
    );
  }
  console.log("Fetched Profile:", profile);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6">

        {/* Profile Image */}
         <div className="flex flex-col items-center">
          <img
            //src= {profile?.profile_picture || "https://i.pravatar.cc/150" }
             src= {"https://i.ibb.co.com/bjwwtTcJ/cat.jpg"}
            alt="Profile Picture"
            className="w-28 h-28 rounded-full border-4 border-[#769A7F] object-cover"
          />

          <h2 className="mt-4 text-xl font-bold text-gray-800">
            {profile?.name}
          </h2>
        </div>


        {/* Profile Information */}
        <div className="mt-6 space-y-4">

          {/* Email */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <FaEnvelope className="text-[#769A7F]" />
            <span className="text-gray-700">{profile?.email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <FaPhoneAlt className="text-[#769A7F]" />
            <span className="text-gray-700">{profile?.phone}</span>
          </div>

          {/* Dealership */}
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <FaStore className="text-[#769A7F]" />
            <span className="text-gray-700">
              {profile?.dealership_name}
            </span>
          </div>

        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-[#769A7F] text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          <FaEdit />
          Update Profile
        </button>

      </div>
    </div>
  );
};

export default Profile;








//////////////////////////////////////////////////////////////////////////////////////////////




// import { useEffect, useState } from "react";
// import { FaUser, FaPhoneAlt, FaEnvelope, FaStore, FaCamera, FaCheckCircle } from "react-icons/fa";

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const yourToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc3MTIxNjE4LCJpYXQiOjE3NzE5Mzc2MTgsImp0aSI6IjA0M2EzNjQ3YzE1ZjQ3OTJhMDFjZjAzN2M4NGJlMGI1IiwidXNlcl9pZCI6MjJ9.uJX3kF4W5QDpMbqjmqWU26hQn2nqN_QTQGclurLwsLA";

//   const fetchProfile = async () => {
//     try {
//       const response = await fetch("/api/user/api/v1/profile/me", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${yourToken}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       setProfile(data.user);
//     } catch (error) {
//       console.error("Profile fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleUpdate = () => {
//     // Future update API will go here
//     console.log("Update button clicked");
//   };

//   // Simulate image upload (design only)
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // In a real app you'd upload the file and update the profile
//       console.log("Selected file:", file);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#0a0f1e] to-[#0b1425] flex items-center justify-center">
//         <div className="flex flex-col items-center gap-3">
//           <div className="w-12 h-12 border-4 border-blue-500/30 border-[#769A7F] rounded-full animate-spin"></div>
//           <span className="text-slate-300 text-sm font-medium tracking-wider">LOADING PROFILE</span>
//         </div>
//       </div>
//     );
//   }

//   console.log("Fetched Profile:", profile);

//   return (
//     <div className=" mt-15 min-h-screen bg-gradient-to-br from-[#020617] via-[#0b1425] to-[#0a0f1e] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       <div className="max-w-5xl w-full">
//         {/* Premium Card with glassmorphism */}
//         <div className="backdrop-blur-xl bg-[#0f172a]/80 rounded-3xl shadow-2xl shadow-blue-900/30 border border-slate-700/50 overflow-hidden">
          
//           {/* Header gradient area with profile image overlap */}
//           <div className="relative h-36 bg-gradient-to-r from-[#769A7F] via-[#769A7F] to-slate-900">
//             <div className="absolute inset-0 bg-black/20" />
            
//             {/* Profile image with camera edit overlay */}
//             <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0">
//               <div className="relative group">
//                 <img
//                   //src= {profile?.profile_picture || "https://i.pravatar.cc/150"}
//                   //src="https://i.ibb.co/Kc89KVS1/534355199-76518199944578808537-n.jpg"
//                   src= {"https://i.ibb.co.com/bjwwtTcJ/cat.jpg"}
//                   alt="Profile"
//                   className="w-28 h-28 rounded-2xl object-cover border-4 border-[#0f172a] shadow-2xl ring-2 ring-blue-500/20 group-hover:ring-blue-400/50 transition-all"
//                 />
//                 <label className="absolute -bottom-1 -right-1 bg-[#769A7F] hover:bg-[#769A7F] text-white p-2.5 rounded-xl cursor-pointer shadow-xl hover:scale-110 transition-all border-2 border-[#0f172a]">
//                   <FaCamera size={14} />
//                   <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Content area */}
//           <div className="pt-20 pb-10 px-6 sm:px-10">
            
//             {/* Name and verification badge */}
//             <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-8 gap-4">
//               <div className="text-center sm:text-left">
//                 <h2 className="text-3xl font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
//                   {profile?.name}
//                   <FaCheckCircle className="text-blue-400 text-xl" />
//                 </h2>
//                 <p className="text-slate-400 text-sm mt-1"> {profile?.role}</p>
//               </div>
              
//               {/* Optional meta info */}
//               <div className="text-xs text-slate-500 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
//                 ID: {profile?.id || "AU-2247"}
//               </div>
//             </div>

//             {/* Info cards grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
//               {/* Email */}
//               <div className="group bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 transition-all duration-300">
//                 <div className="flex items-center gap-3">
//                   <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
//                     <FaEnvelope className="text-blue-400 text-lg" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email</p>
//                     <p className="text-white text-sm font-medium break-all">{profile?.email}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="group bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 transition-all duration-300">
//                 <div className="flex items-center gap-3">
//                   <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
//                     <FaPhoneAlt className="text-blue-400 text-lg" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Phone</p>
//                     <p className="text-white text-sm">{profile?.phone || "Not provided"}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Dealership */}
//               <div className="group bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 transition-all duration-300 md:col-span-2">
//                 <div className="flex items-center gap-3">
//                   <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
//                     <FaStore className="text-blue-400 text-lg" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Dealership</p>
//                     <p className="text-white text-base font-medium">{profile?.dealership_name || "Independent Dealer"}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Update button */}
//             <button
//               onClick={handleUpdate}
//               className="mt-8 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#769A7F] to-[#769A7F] text-white py-4 rounded-2xl font-semibold text-base shadow-lg shadow-blue-900/40 hover:shadow-blue-800/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-blue-400/20"
//             >
//               <FaUser className="text-white/80" />
//               UPDATE PROFILE INFORMATION
//             </button>

//             {/* Security footer */}
//             <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl flex items-start gap-3">
//               <FaCheckCircle className="text-blue-400 shrink-0 mt-0.5" size={16} />
//               <p className="text-xs text-slate-400 leading-relaxed">
//                 <span className="text-blue-300 font-semibold">🔐 Encrypted profile</span> — Your data is visible only to verified bidders. Changes may require a brief compliance check.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Branding line */}
//         <p className="text-center text-slate-700 text-[10px] mt-8 uppercase tracking-[0.3em] font-mono">
//           POWERED BY BIDBAJ • ENTERPRISE TIER
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Profile;