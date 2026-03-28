


// import { useEffect, useState } from "react";
// import { FaUser, FaPhoneAlt, FaEnvelope, FaStore, FaCamera, FaCheckCircle } from "react-icons/fa";

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   //const yourToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzc3MTIxNjE4LCJpYXQiOjE3NzE5Mzc2MTgsImp0aSI6IjA0M2EzNjQ3YzE1ZjQ3OTJhMDFjZjAzN2M4NGJlMGI1IiwidXNlcl9pZCI6MjJ9.uJX3kF4W5QDpMbqjmqWU26hQn2nqN_QTQGclurLwsLA";

//   const fetchProfile = async () => {
//     try {
//       const response = await fetch("/api/user/api/v1/profile/me", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
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
                  
//                   src= {`http://bidbaj.com${profile?.profile_picture}` }
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
//               {/* i wiant if i click on this edit file,it will give me edit oprion for all the data and after editing i will update it by using this update api: http://bidbaj.com/user/api/v1/profile/22 */}
              
//               <div className="text-xs text-slate-500 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
//                 EDIT
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






// import { useEffect, useState } from "react";
// import {
//   FaUser,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaStore,
//   FaCamera,
//   FaCheckCircle,
// } from "react-icons/fa";

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);
//   const [updating, setUpdating] = useState(false);

//   // Fetch profile
//   const fetchProfile = async () => {
//     try {
//       const response = await fetch("/api/user/api/v1/profile/me", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
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

//   // Sync profile → formData
//   useEffect(() => {
//     if (profile) {
//       setFormData(profile);
//     }
//   }, [profile]);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Update API
//   console.log("Profile data to update:", profile?.id);
//             console.log("Updating profile with data:",formData,profile?.id ); 

//   const handleUpdate = async () => {

//     try {
//       setUpdating(true);


//       const response = await fetch(
//         `/api/user/api/v1/profile/${profile?.id}`,
//         {
//           method: "PUT", // or PATCH
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             profile_picture: profile?.profile_picture, // how to updateprfile 
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             dealership_name: formData.dealership_name,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setProfile(data.user);
//         setIsEditing(false);
//         alert("Profile updated successfully ✅");
//       } else {
//         console.error(data);
//         alert("Update failed ❌");
//       }
//     } catch (error) {
//       console.error("Update error:", error);
//     } finally {
//       setUpdating(false);
//     }
//   };

//   // Image upload (UI only)
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       console.log("Selected file:", file);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#020617] flex items-center justify-center">
//         <div className="w-12 h-12 border-4 border-[#769A7F] rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-15 min-h-screen bg-gradient-to-br from-[#020617] via-[#0b1425] to-[#0a0f1e] py-12 px-4 flex items-center justify-center">
//       <div className="max-w-5xl w-full">
//         <div className="backdrop-blur-xl bg-[#0f172a]/80 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          
//           {/* Header */}
//           <div className="relative h-36 bg-gradient-to-r from-[#769A7F] to-slate-900">
//             <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0">
//               <div className="relative">
//                 <img
//                   src={`http://bidbaj.com${profile?.profile_picture}`}
//                   alt="Profile"
//                   className="w-28 h-28 rounded-2xl object-cover border-4 border-[#0f172a]"
//                 />
//                 <label className="absolute -bottom-1 -right-1 bg-[#769A7F] text-white p-2 rounded-xl cursor-pointer">
//                   <FaCamera size={14} />
//                   <input type="file" hidden onChange={handleImageChange} />
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="pt-20 pb-10 px-6 sm:px-10">
            
//             {/* Name */}
//             <div className="flex justify-between items-center mb-8">
//               <div>
//                 {isEditing ? (
//                   <input
//                     name="name"
//                     value={formData.name || ""}
//                     onChange={handleChange}
//                     className="bg-slate-700 text-white px-3 py-2 rounded"
//                   />
//                 ) : (
//                   <h2 className="text-3xl text-white font-bold flex items-center gap-2">
//                     {profile?.name}
//                     <FaCheckCircle className="text-blue-400" />
//                   </h2>
//                 )}
//                 <p className="text-slate-400">{profile?.role}</p>
//               </div>

//               {/* EDIT BUTTON */}
//               <div
//                 onClick={() => setIsEditing(true)}
//                 className="cursor-pointer text-xs text-slate-400 bg-slate-800 px-4 py-2 rounded"
//               >
//                 EDIT
//               </div>
//             </div>

//             {/* Info */}
//             <div className="grid md:grid-cols-2 gap-5">

//               {/* Email */}
//               <div className="bg-slate-800 p-5 rounded-xl">
//                 <div className="flex gap-3 items-center">
//                   <FaEnvelope className="text-blue-400" />
//                   {isEditing ? (
//                     <input
//                       name="email"
//                       value={formData.email || ""}
//                       onChange={handleChange}
//                       className="bg-slate-700 text-white px-3 py-1 rounded w-full"
//                     />
//                   ) : (
//                     <p className="text-white">{profile?.email}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="bg-slate-800 p-5 rounded-xl">
//                 <div className="flex gap-3 items-center">
//                   <FaPhoneAlt className="text-blue-400" />
//                   {isEditing ? (
//                     <input
//                       name="phone"
//                       value={formData.phone || ""}
//                       onChange={handleChange}
//                       className="bg-slate-700 text-white px-3 py-1 rounded w-full"
//                     />
//                   ) : (
//                     <p className="text-white">{profile?.phone}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Dealership */}
//               <div className="bg-slate-800 p-5 rounded-xl md:col-span-2">
//                 <div className="flex gap-3 items-center">
//                   <FaStore className="text-blue-400" />
//                   {isEditing ? (
//                     <input
//                       name="dealership_name"
//                       value={formData.dealership_name || ""}
//                       onChange={handleChange}
//                       className="bg-slate-700 text-white px-3 py-1 rounded w-full"
//                     />
//                   ) : (
//                     <p className="text-white">
//                       {profile?.dealership_name || "Independent Dealer"}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* BUTTON */}
//             <button
//               onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
//               disabled={updating}
//               className="mt-8 w-full bg-[#769A7F] text-white py-4 rounded-xl font-semibold"
//             >
//               {updating
//                 ? "Updating..."
//                 : isEditing
//                 ? "SAVE CHANGES"
//                 : "EDIT PROFILE"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



/////////with profile picture////////////




import { useEffect, useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaStore,
  FaCamera,
  FaCheckCircle,
} from "react-icons/fa";
import Loading from "../components/Loading";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔹 Fetch profile
  const fetchProfile = async () => {
    try {
      const response = await fetch("/api/user/api/v1/profile/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setProfile(data.user);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // 🔹 Sync formData
  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  // 🔹 Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Image select
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // 🔥 UPDATE PROFILE API
  const handleUpdate = async () => {
    try {
      setUpdating(true);

      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.name || "");
      formDataToSend.append("email", formData.email || "");
      formDataToSend.append("phone", formData.phone || "");
      formDataToSend.append(
        "dealership_name",
        formData.dealership_name || ""
      );

      if (selectedImage) {
        formDataToSend.append("profile_picture", selectedImage);
      }

      const response = await fetch(
        `/api/user/api/v1/profile/${profile?.id}`,
        {
          method: "PUT", // or PATCH
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setProfile(data.user);
        setIsEditing(false);
        setSelectedImage(null);
        alert("✅ Profile updated successfully");
      } else {
        console.error(data);
        alert("❌ Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
    } finally {
      setUpdating(false);
    }
  };

  // 🔹 Loading UI
  if (loading) {
     return <Loading/>
  }

  return (
    <div className="mt-15 min-h-screen bg-gradient-to-br from-[#020617] via-[#0b1425] to-[#0a0f1e] flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-[#0f172a]/80 rounded-3xl border border-slate-700 overflow-hidden">

        {/* HEADER */}
        <div className="relative h-36 bg-gradient-to-r from-[#769A7F] to-slate-900">
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0">
            <div className="relative">
              <img
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : `http://bidbaj.com${profile?.profile_picture}`
                }
                alt="Profile"
                className="w-28 h-28 rounded-2xl object-cover border-4 border-[#0f172a]"
              />

              <label className="absolute -bottom-1 -right-1 bg-[#769A7F] text-white p-2 rounded-xl cursor-pointer">
                <FaCamera size={14} />
                <input type="file" hidden onChange={handleImageChange} />
              </label>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-20 pb-10 px-6">

          {/* NAME + EDIT */}
          <div className="flex justify-between items-center mb-8">
            <div>
              {isEditing ? (
                <input
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="bg-slate-700 text-white px-3 py-2 rounded"
                />
              ) : (
                <h2 className="text-3xl text-white font-bold flex gap-2 items-center">
                  {profile?.name}
                  <FaCheckCircle className="text-blue-400" />
                </h2>
              )}
              <p className="text-slate-400">{profile?.role}</p>
            </div>

            <div
              onClick={() => setIsEditing(true)}
              className="cursor-pointer text-xs text-slate-400 bg-slate-800 px-4 py-2 rounded"
            >
              EDIT
            </div>
          </div>

          {/* INFO */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* EMAIL */}
            <div className="bg-slate-800 p-5 rounded-xl flex gap-3 items-center">
              <FaEnvelope className="text-blue-400" />
              {isEditing ? (
                <input
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="bg-slate-700 text-white px-3 py-1 rounded w-full"
                />
              ) : (
                <p className="text-white">{profile?.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div className="bg-slate-800 p-5 rounded-xl flex gap-3 items-center">
              <FaPhoneAlt className="text-blue-400" />
              {isEditing ? (
                <input
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  className="bg-slate-700 text-white px-3 py-1 rounded w-full"
                />
              ) : (
                <p className="text-white">{profile?.phone}</p>
              )}
            </div>

            {/* DEALERSHIP */}
            <div className="bg-slate-800 p-5 rounded-xl md:col-span-2 flex gap-3 items-center">
              <FaStore className="text-blue-400" />
              {isEditing ? (
                <input
                  name="dealership_name"
                  value={formData.dealership_name || ""}
                  onChange={handleChange}
                  className="bg-slate-700 text-white px-3 py-1 rounded w-full"
                />
              ) : (
                <p className="text-white">
                  {profile?.dealership_name || "Independent Dealer"}
                </p>
              )}
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
            disabled={updating}
            className="mt-8 w-full bg-[#769A7F] text-white py-4 rounded-xl font-semibold"
          >
            {updating
              ? "Updating..."
              : isEditing
              ? "SAVE CHANGES"
              : "UPDATE PROFILE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;