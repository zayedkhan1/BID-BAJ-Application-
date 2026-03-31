// import React, { useEffect, useState } from "react";
// import Loading from "../components/Loading";
// import { useParams } from "react-router-dom";
// import ProfileModal from "../components/ProfileModal";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const AppraisalsUserInfo = () => {
//   const { appraisal_id } = useParams();


//   const [appraisalsUserData, setAppraisalsUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [showDetails, setShowDetails] = useState(true);

//   const fetchDetails = async () => {
//     try {
//       const response = await fetch(
//         `/api/vehicle/api/v1/appraisal/${appraisal_id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch details");
//       }

//       const result = await response.json();
//       setAppraisalsUserData(result);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDetails();
//   }, [appraisal_id]);


//   const openProfileModal = (userId) => {
//     setSelectedUserId(userId);
//     setShowModal(true);
//   };


//   const closeProfileModal = () => {
//     setShowModal(false),
//       setSelectedUserId(null);
//   };

//   console.log("Fetched Appraisal Details:", appraisalsUserData);
//   console.log("Fetched Appraisal Details:", appraisalsUserData?.appraisal_details?.created_at);
//   //console.log("Fetched Appraisal Details:", appraisalsUserData?.chat_details?.appraisals?.created_at);

//   if (loading) return <Loading />;

//   return (
//     <div className="mt-10 min-h-screen bg-gray-900 text-white p-6 pt-20">
//       <div className="max-w-5xl mx-auto bg-gray-800 p-6 rounded-xl">

//         {/* USER INFO */}
//         <div className="flex items-center gap-4 mb-6">
//           {/* image */}
//           <div
//             onClick={() => openProfileModal(appraisalsUserData?.appraisal_details?.appraised_by?.id)}
//           >
//             <img
//               src={`http://bidbaj.com${appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture}`}
//               className="w-16 h-16 rounded-full"
//             />
//           </div>

//           {/* content */}
//           {/* i want if i click in this div it will open a modal under this div ,it will show a icon for modal open and close,where i will show vin number,seller bid and user bid */}
//           {/* <div>
//            <h2 className="text-xl font-bold">{appraisalsUserData?.appraisal_details?.appraised_by?.name}</h2>
//           <p>{appraisalsUserData?.appraisal_details?.milage}</p>
//          </div>  */}
//           <div
//             className="cursor-pointer"
//             onClick={() => setShowDetails(!showDetails)}
//           >
//             <div className=" ">
//               <div>
//                 <h2 className="text-xl font-bold">
//                   {appraisalsUserData?.appraisal_details?.appraised_by?.name}
//                 </h2>
//                 <p>{appraisalsUserData?.appraisal_details?.milage}</p>
//               </div>

//               {/* Toggle Icon */}
//               <button className="mt-5 ">
//                 <span className="text-xl">
//                   {/* {showDetails ? "▲" : "▼"} */}
//                   {showDetails ? <FaChevronUp /> : <FaChevronDown />}
//                 </span>
//               </button>
//             </div>
//           </div>
//           {/* Modal here */}
//           </div>


//           {showDetails && (
//             <div className="mt-3 mb-4 bg-gray-900 p-4 rounded-xl border border-gray-700 transition-all duration-300">

//               <div className="flex justify-between items-center mb-2">
//                 <p className="text-gray-400">VIN:</p>
//                 <p className="text-2xl font-bold ">{appraisalsUserData?.appraisal_details?.vin_no || "---"}</p>
//               </div>

//               <div className="flex justify-between mb-2">
//                 <p className="text-gray-400">SELLER:</p>
//                 <p>
//                   ${`${(appraisalsUserData?.bid_details?.seller_bid || 0).toFixed(1)}`}
//                 </p>
//               </div>

//               <div className="flex justify-between">
//                 <p className="text-gray-400">{appraisalsUserData?.bid_details?.bid_name}:</p>
//                 <p>
//                   ${`${(appraisalsUserData?.bid_details?.bidder_bid || 0).toFixed(1)}`}
//                 </p>
//               </div>

//             </div>
//           )}


      
//         {/* CREATED AT */}
//         <div className="mb-6 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//           <p className="text-gray-400">Created At</p>
//           <p>
//             <span>
//               {new Date(appraisalsUserData?.appraisal_details?.created_at).toLocaleDateString("en-GB", {
//                 day: "2-digit",
//                 month: "short",
//                 year: "numeric",
//               })}
//             </span>
//           </p>
//         </div>

//         {/* VEHICLE INFO */}
//         <div>
//           <p className="text-gray-400 mb-2">VEHICLE INFORMATION</p>
//           <hr />
//           {/* TIRES RATING */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">TIRES RATING</p>
//             <p>{appraisalsUserData?.basic_details?.tires_rating}</p>
//           </div>
//           {/* WINDSHIELD CRACK */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">WINDSHILD CRACK</p>
//             <p>{appraisalsUserData?.basic_details?.windshield_crack ? "Yes" : "No"}</p>
//           </div>
//           {/* PAINT SCRETCH */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">PAINT SCRETCH</p>
//             <p>{appraisalsUserData?.basic_details?.paint_scratch ? "Yes" : "No"}</p>
//           </div>
//           {/* OTHER DAMAGES */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">OTHER DAMAGES</p>
//             <p>{appraisalsUserData?.basic_details?.other_damages ? "Yes" : "No"}</p>
//           </div>
//           {/* VEHICLE GRADE */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">VEHICLE GRADE</p>
//             <p>{appraisalsUserData?.basic_details?.vehicle_grade}</p>
//           </div>
//           {/* Make */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">MAKE</p>
//             <p> {appraisalsUserData?.basic_details?.appraisals?.make || "---"}  </p>
//           </div>
//           {/* YEAR */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">YEAR</p>
//             <p>{appraisalsUserData?.basic_details?.appraisals?.year || "---"}</p>
//           </div>
//           {/* MODEL */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">MODEL</p>
//             <p>{appraisalsUserData?.basic_details?.appraisals?.model || "---"}</p>
//           </div>
//           {/* SERIES */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">SERIES</p>
//             <p>{appraisalsUserData?.basic_details?.appraisals?.series || "---"}</p>
//           </div>
//           {/* COLOR */}
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">COLOR</p>
//             <p>{appraisalsUserData?.basic_details?.color || "---"}</p>
//           </div>

//           <p>VAuto</p>
//           <hr />
//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">KBB</p>
//             <p> ${`${(appraisalsUserData?.basic_details?.kbb || 0).toFixed(1)}`}</p>
//           </div>

//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">J.D. POWER</p>
//             <p>${`${(appraisalsUserData?.basic_details?.jd_power || 0).toFixed(1)}`}</p>
//           </div>

//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">MMR</p>
//             <p>${`${(appraisalsUserData?.basic_details?.mmr || 0).toFixed(1)}`}</p>
//           </div>

//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">AUCTION</p>
//             <p>${`${(appraisalsUserData?.basic_details?.auction || 0).toFixed(1)}`}</p>
//           </div>

//           <div className="mb-2 flex justify-between  bg-gray-900 rounded-xl p-2 hover:scale-101 transition-transform cursor-pointer">
//             <p className="text-gray-400">KBB.com</p>
//             <p>${`${(appraisalsUserData?.basic_details?.kbb_dot_com || 0).toFixed(1)}`}</p>
//           </div>

//           <div>
//             <button className="w-full p-2 bg-[#769A7F] rounded-2xl cursor-pointer hover:scale-102 transition-transform">DOWNLOAD REPORT PDF</button>
//           </div>



//         </div>


//       </div>

//       {showModal && (
//         <ProfileModal
//           userId={appraisalsUserData?.appraisal_details?.appraised_by?.id}
//           onClose={closeProfileModal}
//         />
//       )}

//     </div>

//   );
// };

// export default AppraisalsUserInfo;

















/////////////////with animation/////////////////////

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import ProfileModal from "../components/ProfileModal";
import {
  FaChevronDown,
  FaChevronUp,
  FaTachometerAlt,
  FaCalendarAlt,
  FaCar,
  
  FaWind,
  FaPaintBrush,
  FaExclamationTriangle,
  FaChartLine,
  FaFilePdf,
  FaDollarSign,
  FaIdCard,
  FaTag,
  FaGem,
  FaPalette,
  FaIndustry,
  FaCalendarDay,
 
} from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { formatApprisalUserInfoDate } from "../utility/utility";

const AppraisalsUserInfo = () => {
  const { appraisal_id } = useParams();

  const [appraisalsUserData, setAppraisalsUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showDetails, setShowDetails] = useState(true);

  console.log("appraisla id",appraisal_id)

  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `/api/vehicle/api/v1/appraisal/${appraisal_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch details");
      }

      const result = await response.json();
      setAppraisalsUserData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [appraisal_id]);

  const openProfileModal = (userId) => {
    setSelectedUserId(userId);
    setShowModal(true);
  };

  const closeProfileModal = () => {
    setShowModal(false);
    setSelectedUserId(null);
  };
  console.log("Fetched Appraisal Details:", appraisalsUserData);

  if (loading) return <Loading />;

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-4 md:p-6 pt-24">
      <div className="max-w-5xl mx-auto">
        {/* Main Card with entrance animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-6 md:p-8"
        >
          {/* User Header - Premium Profile Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            {/* Profile Image with Ring */}
            <div
              onClick={() =>
                openProfileModal(appraisalsUserData?.appraisal_details?.appraised_by?.id)
              }
              className="cursor-pointer group relative"
            >
              <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
             {/* src={user?.profile_picture? `http://bidbaj.com${user.profile_picture}`: "../../public/assets/image/dummy_profile.jpg"} */}
             {/* `http://bidbaj.com${appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture}` */}
              <img
                 src={appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture ? `http://bidbaj.com${appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture}` : '../../public/assets/image/dummy_profile.jpg'}
              
                alt="Profile"
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-700 group-hover:border-emerald-400/50 transition-all duration-300 object-cover"
              />
            </div>         

            {/* User Info & Toggle */}
            <div className="flex-1">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setShowDetails(!showDetails)}
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {appraisalsUserData?.appraisal_details?.appraised_by?.name}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <FaTachometerAlt className="text-[#769A7F] " />
                    <span>{appraisalsUserData?.appraisal_details?.milage} </span>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-700/50 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  {showDetails ? (
                    <FaChevronUp className="text-[#769A7F] " />
                  ) : (
                    <FaChevronDown className="text-[#769A7F] " />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Collapsible Details Card with Framer Motion */}
          <AnimatePresence initial={false}>
            {showDetails && (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mb-8 bg-gray-900/50 rounded-xl border border-gray-700/50 p-5"
              >
                <div className=" ">
                  {/* VIN */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="p-2 flex justify-center gap-2 bg-emerald-500/10 rounded-lg">
                      <FaIdCard className="text-[#769A7F]  text-lg" />
                     <p className="text-xs text-gray-500 uppercase tracking-wider">VIN</p>
                    </div>
                      <p className="font-mono text-xl font-medium">
                        {appraisalsUserData?.appraisal_details?.vin_no || "---"}
                      </p>
                   
                  </div>

                  {/* Seller Bid */}
                 
                    
                    <div className="flex justify-between items-center mt-3 border-b border-gray-700 pb-2">
                      <p className="text-medium text-gray-500 uppercase tracking-wider">Seller Bid :</p>
                      <p className="font-bold text-xl">
                        ${(appraisalsUserData?.bid_details?.seller_bid || 0).toFixed(1)}
                      </p>
                    </div>
                        <hr />
                  

                  {/* Bidder Bid */}
                  
                   
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-medium text-gray-500 uppercase tracking-wider">
                        {appraisalsUserData?.bid_details?.bid_name || "Bidder"}:
                      </p>
                  
                      <p className="font-bold text-xl">
                        ${(appraisalsUserData?.bid_details?.bidder_bid || 0).toFixed(1)}
                      </p>
                    </div>
                  </div>
               
              </motion.div>
            )}
          </AnimatePresence>

          {/* Created At - Premium Badge */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between bg-gray-900/30 rounded-lg p-4 mb-8 border border-gray-700/30 hover:bg-gray-900/50 transition-colors duration-200"
          >
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-emerald-400" />
              <span className="text-gray-300 font-medium">Created</span>
            </div>
            <span className="bg-gray-800 px-4 py-1 rounded-full text-sm border border-gray-600">
             {formatApprisalUserInfoDate(appraisalsUserData?.appraisal_details?.created_at)}
            </span>
          </motion.div>

          {/* Vehicle Information Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
              <FaCar className="text-[#769A7F] text-xl" />
              <h3 className="text-lg font-semibold tracking-wide">VEHICLE INFORMATION</h3>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tires Rating */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                   <GiCarWheel  className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Tires Rating</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.tires_rating}</span>
              </motion.div>

              {/* Windshield Crack */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <FaWind className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Windshield Crack</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.windshield_crack ? "Yes" : "No"}</span>
              </motion.div>

              {/* Paint Scratch */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <FaPaintBrush className="text-[#769A7F] group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Paint Scratch</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.paint_scratch ? "Yes" : "No"}</span>
              </motion.div>

              {/* Other Damages */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <FaExclamationTriangle className="text-[#769A7F] group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Other Damages</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.other_damages ? "Yes" : "No"}</span>
              </motion.div>

              {/* Vehicle Grade */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Vehicle Grade</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.vehicle_grade}</span>
              </motion.div>

              {/* Make */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <FaIndustry className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Make</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.appraisals?.make || "---"}</span>
              </motion.div>

              {/* Year */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <FaCalendarDay className="text-[#769A7F] group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Year</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.appraisals?.year || "---"}</span>
              </motion.div>

              {/* Model */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <FaCar className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Model</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.appraisals?.model || "---"}</span>
              </motion.div>

              {/* Series */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <FaTag className="text-teal-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Series</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.appraisals?.series || "---"}</span>
              </motion.div>

              {/* Color */}
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <FaPalette className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400">Color</span>
                </div>
                <span className="font-medium">{appraisalsUserData?.basic_details?.color || "---"}</span>
              </motion.div>
            </div>

            {/* Valuation Section */}
            <div className="mt-8">
              <div className="flex items-center gap-2 border-b border-gray-700 pb-2 mb-4">
                <FaDollarSign className="text-emerald-400 text-xl" />
                <h3 className="text-lg font-semibold tracking-wide">VALUATION</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* KBB */}
                <motion.div
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                  className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all"
                >
                  <span className="text-gray-400">KBB</span>
                  <span className="font-bold text-emerald-400">
                    ${(appraisalsUserData?.basic_details?.kbb || 0).toFixed(1)}
                  </span>
                </motion.div>

                {/* J.D. POWER */}
                <motion.div
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                  className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all"
                >
                  <span className="text-gray-400">J.D. POWER</span>
                  <span className="font-bold text-blue-400">
                    ${(appraisalsUserData?.basic_details?.jd_power || 0).toFixed(1)}
                  </span>
                </motion.div>

                {/* MMR */}
                <motion.div
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                  className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all"
                >
                  <span className="text-gray-400">MMR</span>
                  <span className="font-bold text-purple-400">
                    ${(appraisalsUserData?.basic_details?.mmr || 0).toFixed(1)}
                  </span>
                </motion.div>

                {/* AUCTION */}
                <motion.div
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                  className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all"
                >
                  <span className="text-gray-400">AUCTION</span>
                  <span className="font-bold text-pink-400">
                    ${(appraisalsUserData?.basic_details?.auction || 0).toFixed(1)}
                  </span>
                </motion.div>

                {/* KBB.com */}
                <motion.div
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(17,24,39,0.5)" }}
                  className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-700/30 transition-all"
                >
                  <span className="text-gray-400">KBB.com</span>
                  <span className="font-bold text-orange-400">
                    ${(appraisalsUserData?.basic_details?.kbb_dot_com || 0).toFixed(1)}
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-8 py-4 bg-[#769A7F]  hover:from-emerald-500 hover:to-[#769A7F]  text-white font-semibold  cursor-pointer rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 mx-auto"
              >
                <FaFilePdf className="text-xl" />
                DOWNLOAD REPORT PDF
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Profile Modal */}
      {showModal && (
        <ProfileModal
          userId={appraisalsUserData?.appraisal_details?.appraised_by?.id}
          onClose={closeProfileModal}
        />
      )}
    </div>
  );
};

export default AppraisalsUserInfo;






