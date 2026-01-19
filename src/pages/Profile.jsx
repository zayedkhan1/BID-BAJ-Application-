// import { useState } from "react";
// import {
//   FaUserEdit,
//   FaSave,
//   FaSignOutAlt,
//   FaTrash,
//   FaCamera,
// } from "react-icons/fa";

// const Profile = () => {
//   const [profileImage, setProfileImage] = useState(null);

//   const [formData, setFormData] = useState({
//     mobile: "+880 17XXXXXXX",
//     name: "Zayed Khan",
//     email: "zayed@email.com",
//     dealership: "ZK Auto Dealership",
//   });

//   const [isChanged, setIsChanged] = useState(false);

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//       setIsChanged(true);
//     }
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setIsChanged(true);
//   };

//   const handleSave = () => {
//     alert("Profile updated successfully!");
//     setIsChanged(false);
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!");
//     // navigate("/login")
//   };

//   const handleDelete = () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete your account? This action cannot be undone."
//     );
//     if (confirmDelete) {
//       alert("Account deleted!");
//       // API call here
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center py-10">
//       <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 animate-slideUp">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           My Profile
//         </h2>

//         {/* Profile Image */}
//         <div className="flex flex-col items-center mb-6">
//           <div className="relative">
//             <img
//               src={
//                 profileImage ||
//                 "https://www.w3schools.com/howto/img_avatar.png"
//               }
//               alt="profile"
//               className="w-28 h-28 rounded-full object-cover border"
//             />
//             <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer">
//               <FaCamera className="text-white text-sm" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 hidden
//                 onChange={handleImageChange}
//               />
//             </label>
//           </div>

//           <p className="mt-3 text-gray-600 text-sm">
//             {formData.mobile}
//           </p>
//         </div>

//         {/* Editable Fields */}
//         <div className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="text"
//             name="dealership"
//             value={formData.dealership}
//             onChange={handleChange}
//             placeholder="Dealership Name"
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Save Button */}
//         <button
//           onClick={handleSave}
//           disabled={!isChanged}
//           className={`w-full mt-5 py-2 rounded-lg flex items-center justify-center gap-2
//             ${
//               isChanged
//                 ? "bg-green-600 hover:bg-green-700 text-white"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             } transition`}
//         >
//           <FaSave /> Save Changes
//         </button>

//         {/* Logout */}
//         {/* <button
//           onClick={handleLogout}
//           className="w-full mt-3 py-2 rounded-lg bg-blue-600 text-white
//                      flex items-center justify-center gap-2 hover:bg-blue-700 transition"
//         >
//           <FaSignOutAlt /> Logout
//         </button> */}

//         {/* Delete Account */}
//         {/* <button
//           onClick={handleDelete}
//           className="w-full mt-3 py-2 rounded-lg bg-red-600 text-white
//                      flex items-center justify-center gap-2 hover:bg-red-700 transition"
//         >
//           <FaTrash /> Delete Account
//         </button> */}

//       </div>
//     </div>
//   );
// };

// export default Profile;






// import { useState } from "react";
// import {
//   FaSave,
//   FaSignOutAlt,
//   FaTrash,
//   FaCamera,
// } from "react-icons/fa";
// import { useUser } from "../context/UserContext";

// const Profile = () => {
//   const { user, setUser } = useUser();
//   const [isChanged, setIsChanged] = useState(false);

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const imageUrl = URL.createObjectURL(file);

//     setUser({ ...user, profileImage: imageUrl });
//     setIsChanged(true);
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//     setIsChanged(true);
//   };

//   const handleSave = () => {
//     alert("Profile updated successfully!");
//     setIsChanged(false);
//   };

//   const handleLogout = () => {
//     alert("Logged out successfully!");
//     // navigate("/login")
//   };

//   const handleDelete = () => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete your account? This action cannot be undone."
//     );
//     if (confirmDelete) {
//       localStorage.removeItem("user");
//       alert("Account deleted!");
//       // navigate("/login")
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center py-10">
//       <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 animate-slideUp">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           My Profile
//         </h2>

//         {/* Profile Image */}
//         <div className="flex flex-col items-center mb-6">
//           <div className="relative">
//             <img
//               src={
//                 user.profileImage ||
//                 "https://www.w3schools.com/howto/img_avatar.png"
//               }
//               alt="profile"
//               className="w-28 h-28 rounded-full object-cover border"
//             />
//             <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer">
//               <FaCamera className="text-white text-sm" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 hidden
//                 onChange={handleImageChange}
//               />
//             </label>
//           </div>

//           <p className="mt-3 text-gray-600 text-sm">
//             {user.mobile}
//           </p>
//         </div>

//         {/* Editable Fields */}
//         <div className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={user.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             placeholder="Email Address"
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="text"
//             name="dealership"
//             value={user.dealership}
//             onChange={handleChange}
//             placeholder="Dealership Name"
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Save Button */}
//         <button
//           onClick={handleSave}
//           disabled={!isChanged}
//           className={`w-full mt-5 py-2 rounded-lg flex items-center justify-center gap-2
//             ${
//               isChanged
//                 ? "bg-green-600 hover:bg-green-700 text-white"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             } transition`}
//         >
//           <FaSave /> Save Changes
//         </button>

//         {/* Logout */}
//         <button
//           onClick={handleLogout}
//           className="w-full mt-3 py-2 rounded-lg bg-blue-600 text-white
//                      flex items-center justify-center gap-2 hover:bg-blue-700 transition"
//         >
//           <FaSignOutAlt /> Logout
//         </button>

//         {/* Delete Account */}
//         <button
//           onClick={handleDelete}
//           className="w-full mt-3 py-2 rounded-lg bg-red-600 text-white
//                      flex items-center justify-center gap-2 hover:bg-red-700 transition"
//         >
//           <FaTrash /> Delete Account
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;



// import React, { useState } from 'react';
// import { FaUserCircle, FaGavel, FaHeart, FaHistory, FaCog, FaCamera, FaCar } from 'react-icons/fa';
// import { MdVerified, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

// const ProfilePage = () => {
//   // Keeping your existing state/logic structure
//   const [user, setUser] = useState({
//     name: "Alexander Rossi",
//     email: "alex.rossi@exclusive.com",
//     phone: "+1 (555) 0123 456",
//     location: "Milan, Italy",
//     joined: "Oct 2023",
//     avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=400"
//   });

//   const stats = [
//     { label: "Active Bids", value: "12", icon: <FaGavel className="text-blue-500" /> },
//     { label: "Cars Won", value: "03", icon: <FaCar className="text-cyan-500" /> },
//     { label: "Favorites", value: "48", icon: <FaHeart className="text-red-500" /> },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-950 text-white font-sans pb-20">
//       {/* Profile Header / Cover Area */}
//       <div className="h-64 bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 relative">
//         <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
//       </div>

//       <div className="container mx-auto px-6">
//         <div className="relative -mt-24 flex flex-col lg:flex-row gap-10">
          
//           {/* Left Column: Profile Card */}
//           <div className="w-full lg:w-1/3">
//             <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-[3rem] shadow-2xl sticky top-10">
//               <div className="relative w-40 h-40 mx-auto mb-6">
//                 <img 
//                   src={user.avatar} 
//                   alt="Profile" 
//                   className="w-full h-full object-cover rounded-[2.5rem] border-4 border-slate-900 shadow-2xl"
//                 />
//                 <button className="absolute bottom-2 right-2 p-3 bg-blue-600 rounded-2xl hover:bg-blue-500 transition-all border-4 border-slate-900 shadow-lg">
//                   <FaCamera size={16} />
//                 </button>
//               </div>

//               <div className="text-center mb-8">
//                 <div className="flex items-center justify-center gap-2 mb-1">
//                   <h2 className="text-2xl font-bold tracking-tight">{user.name}</h2>
//                   <MdVerified className="text-blue-500 text-xl" />
//                 </div>
//                 <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em]">Platinum Collector</p>
//               </div>

//               <div className="space-y-4 border-t border-slate-800 pt-8">
//                 <div className="flex items-center gap-4 text-slate-300">
//                   <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center"><MdEmail className="text-blue-400" /></div>
//                   <span className="text-sm font-medium">{user.email}</span>
//                 </div>
//                 <div className="flex items-center gap-4 text-slate-300">
//                   <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center"><MdPhone className="text-blue-400" /></div>
//                   <span className="text-sm font-medium">{user.phone}</span>
//                 </div>
//                 <div className="flex items-center gap-4 text-slate-300">
//                   <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center"><MdLocationOn className="text-blue-400" /></div>
//                   <span className="text-sm font-medium">{user.location}</span>
//                 </div>
//               </div>

//               <button className="w-full mt-10 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all border border-slate-700 flex items-center justify-center gap-2">
//                 <FaCog /> Edit Profile
//               </button>
//             </div>
//           </div>

//           {/* Right Column: Content Area */}
//           <div className="w-full lg:w-2/3 space-y-8">
            
//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {stats.map((stat, i) => (
//                 <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-blue-500/30 transition-all">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="p-3 bg-slate-800 rounded-2xl">{stat.icon}</div>
//                     <span className="text-3xl font-black tracking-tighter">{stat.value}</span>
//                   </div>
//                   <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Content Tabs (Mockup) */}
//             <div className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden">
//               <div className="flex border-b border-slate-800 bg-slate-900/20">
//                 <button className="px-8 py-5 text-sm font-bold border-b-2 border-blue-500 text-blue-400 uppercase tracking-widest">Active Bids</button>
//                 <button className="px-8 py-5 text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest">Watchlist</button>
//                 <button className="px-8 py-5 text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest">Winning History</button>
//               </div>

//               <div className="p-10 text-center">
//                 <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <FaHistory size={30} className="text-slate-600" />
//                 </div>
//                 <h4 className="text-xl font-bold mb-2">No Active Bids Found</h4>
//                 <p className="text-slate-500 max-w-xs mx-auto mb-8">You haven't placed any bids yet. Start browsing the collection to win your first auction.</p>
//                 <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20">
//                   Browse Inventory
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

















// import React, { useState } from 'react';
// import { FaCamera, FaUser, FaEnvelope, FaPhone, FaStore, FaSave } from 'react-icons/fa';

// const ProfilePage = () => {
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     email: 'john.doe@auction.com',
//     phone: '+1 (555) 000-1111',
//     dealership: 'Elite Motors LLC',
//     image: 'https://via.placeholder.com/150'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProfile({ ...profile, image: URL.createObjectURL(file) });
//     }
//   };

//   const handleSave = () => {
//     // Logic to save data to your backend
//     console.log('Profile Saved:', profile);
//     alert('Profile updated successfully!');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//         <div className="p-8">
//           <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-6">
//             Seller Settings
//           </div>

//           {/* Profile Image Section */}
//           <div className="flex flex-col items-center mb-8">
//             <div className="relative">
//               <img 
//                 className="h-32 w-32 rounded-full object-cover border-4 border-indigo-100" 
//                 src={profile.image} 
//                 alt="Profile" 
//               />
//               <label className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition shadow-lg">
//                 <FaCamera className="text-white text-sm" />
//                 <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
//               </label>
//             </div>
//             <p className="mt-2 text-gray-500 text-sm">Click icon to upload photo</p>
//           </div>

//           {/* Form Fields */}
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
//                 <FaUser className="text-gray-400" /> Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={profile.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
//                 <FaEnvelope className="text-gray-400" /> Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={profile.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
//                 <FaPhone className="text-gray-400" /> Phone Number
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={profile.phone}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
//                 <FaStore className="text-gray-400" /> Dealership Name
//               </label>
//               <input
//                 type="text"
//                 name="dealership"
//                 value={profile.dealership}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
//               />
//             </div>
//           </div>

//           {/* Save Button */}
//           <div className="mt-8">
//             <button
//               onClick={handleSave}
//               className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//             >
//               <FaSave /> Save Profile Changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;














// import React, { useState } from 'react';
// import { FaCamera, FaUser, FaEnvelope, FaPhone, FaStore, FaSave, FaCheckCircle } from 'react-icons/fa';

// const ProfilePage = () => {
//   const [isSaving, setIsSaving] = useState(false);
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     email: 'john.doe@automotive-auctions.com',
//     phone: '+1 (555) 987-6543',
//     dealership: 'Prestige Motors International',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
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
//     // Simulate API Call
//     setTimeout(() => {
//       setIsSaving(false);
//       alert('Dealer profile synchronized successfully.');
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen mt-15 bg-[#f8fafc] py-8 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Main Card */}
//         <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          
//           {/* Premium Header/Banner Area */}
//           <div className="h-32 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative">
//             <div className="absolute -bottom-12 left-8 sm:left-12">
//               <div className="relative group">
//                 <img 
//                   className="h-32 w-32 rounded-2xl object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-[1.02]" 
//                   src={profile.image} 
//                   alt="Profile" 
//                 />
//                 <label className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2.5 rounded-xl cursor-pointer hover:bg-blue-700 transition-all shadow-xl hover:scale-110">
//                   <FaCamera size={18} />
//                   <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="pt-16 pb-10 px-8 sm:px-12">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
//               <div>
//                 <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
//                   Dealer Profile <FaCheckCircle className="text-blue-500 text-lg" />
//                 </h1>
//                 <p className="text-slate-500 text-sm">Manage your auction identity and contact preferences</p>
//               </div>
//               <button
//                 onClick={handleSave}
//                 disabled={isSaving}
//                 className="group flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200 disabled:opacity-70"
//               >
//                 {isSaving ? "Saving..." : <><FaSave className="group-hover:animate-pulse" /> Save Changes</>}
//               </button>
//             </div>

//             {/* Responsive Form Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
//               {/* Name Field */}
//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <FaUser className="text-slate-400" />
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={profile.name}
//                     onChange={handleChange}
//                     className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Email Field */}
//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Corporate Email</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <FaEnvelope className="text-slate-400" />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     value={profile.email}
//                     onChange={handleChange}
//                     className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Phone Field */}
//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Contact Number</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <FaPhone className="text-slate-400" />
//                   </div>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={profile.phone}
//                     onChange={handleChange}
//                     className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Dealership Field */}
//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Dealership Name</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <FaStore className="text-slate-400" />
//                   </div>
//                   <input
//                     type="text"
//                     name="dealership"
//                     value={profile.dealership}
//                     onChange={handleChange}
//                     className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
//                   />
//                 </div>
//               </div>

//             </div>

//             {/* Footer Notice */}
//             <div className="mt-12 p-4 bg-blue-50 border border-blue-100 rounded-xl">
//               <p className="text-blue-800 text-xs leading-relaxed">
//                 <strong>Note:</strong> Changes to your dealership name may require up to 24 hours for verification by our compliance team before appearing on public auction listings.
//               </p>
//             </div>
//           </div>
//         </div>
        
//         <p className="text-center text-slate-400 text-xs mt-8 italic">
//           &copy; 2025 AutoAuction Premium Pro Tier. Secure Portal.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;














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