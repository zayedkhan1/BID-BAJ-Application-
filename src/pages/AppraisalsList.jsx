






//////////////////////////////////////////////////////////////////////// this is final code without modal/////////////////
// import React, { useEffect, useState } from "react";
// import Loading from "../components/Loading";
// import { FaPlus, FaUser, FaIdBadge, FaEye } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const AppraisalList = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/vehicle/api/v1/appraisals", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const result = await response.json();
//         setData(result.appraisals_list || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const appraisals = data;

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div  className=" mt-16 min-h-screen bg-gray-900 text-gray-100 pt-20 p-6">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#769A7F] to-teal-300 bg-clip-text text-transparent">
//             Appraisal List
//           </h1>
//          <Link to='/addvehicle'>
//           <button
//             className="mt-4 md:mt-0 flex items-center gap-2 bg-[#769A7F] hover:bg-[#5e7c66] text-white cursor-pointer font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
//           >
//             <FaPlus /> Add New Appraisal
//           </button>
//          </Link>
//         </div>

//         {/* Appraisals Grid */}
//         {appraisals.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-gray-400 text-xl">No appraisals found.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {appraisals.map((item) => (
//               <div
//                 key={item.user_id}
//                 className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-[#769A7F] hover:shadow-xl hover:shadow-[#769A7F]/10 transition-all duration-300"
//               >
//                 <div className="flex items-center gap-5">
//                   {/* Profile Image */}
//                   <div className="relative">

//                  {/* profile div where if i click it will open a modal and show specific user details */}
//                     <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#769A7F] ring-offset-2 ring-offset-gray-900">
//                       <img
//                         className="w-full h-full object-cover"
//                         src={`http://bidbaj.com${item.profile_picture}`}
//                         alt={item.user_name}
//                       />
//                     </div>                 
                    
//                   {/* profile div where if i click it will open a modal and show specific user details */}




//                     <div className="absolute -bottom-1 -right-1 bg-[#769A7F] rounded-full p-1.5">
//                       <FaEye className="text-gray-900 text-xs" />
//                     </div>
//                   </div>

//                   {/* User Info */}
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white mb-2">
//                       {item.user_name}
//                     </h3>
//                     <div className="space-y-1 text-sm text-gray-300">
//                       <p className="flex items-center gap-2">
//                         <FaIdBadge className="text-[#769A7F]" />
//                         <span> {item.total_chats} Open Vehicle</span>
//                       </p>
//                       {/* <p className="flex items-center gap-2">
//                         <FaUser className="text-[#769A7F]" />
//                         <span>Username: {item.user_name}</span>
//                       </p> */}
//                     </div>
//                   </div>
//                 </div>

//                 {/* View Details Link (optional) */}
//                 <div className="mt-4 flex justify-end">
//                   <button className="text-sm text-[#769A7F] hover:text-white font-medium transition-colors">
//                     View Details →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AppraisalList;




















///////////////////////////This code is with modal//////////////////////


import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProfileModal from "../components/ProfileModal";
import { FaPlus, FaEye, FaIdBadge } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppraisalList = () => {

  const [appraisals, setAppraisals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchAppraisals = async () => {
    try {
      const response = await fetch(
        "/api/vehicle/api/v1/appraisals",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch appraisals");
      }

      const result = await response.json();

      setAppraisals(result.appraisals_list || []);

    } catch (error) {
      console.error("Error fetching appraisals:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppraisals();
  }, []);

  const openProfileModal = (userId) => {
    setSelectedUserId(userId);
    setShowModal(true);
  };

  const closeProfileModal = () => {
    setShowModal(false);
    setSelectedUserId(null);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-16 min-h-screen bg-gray-900 text-gray-100 pt-20 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">

          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#769A7F] to-teal-300 bg-clip-text text-transparent">
            Appraisal List
          </h1>

          <Link to="/addvehicle">
            <button className="mt-4 md:mt-0 flex items-center gap-2 bg-[#769A7F] hover:bg-[#5e7c66] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition hover:scale-105">
              <FaPlus /> Add New Appraisal
            </button>
          </Link>

        </div>

        {appraisals.length === 0 ? (

          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No appraisals found.</p>
          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {appraisals.map((item) => (

              <div
                key={item.user_id}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-[#769A7F] hover:shadow-lg transition"
              >

                <div className="flex items-center gap-5">

                  {/* Profile Image */}
                  <div className="relative">

                    <div
                      onClick={() => openProfileModal(item.user_id)}
                      className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#769A7F] ring-offset-2 ring-offset-gray-900 cursor-pointer hover:scale-105 transition"
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={`http://bidbaj.com${item.profile_picture}`}
                        alt={item.user_name}
                      />
                    </div>

                    <div className="absolute -bottom-1 -right-1 bg-[#769A7F] rounded-full p-1.5">
                      <FaEye className="text-gray-900 text-xs" />
                    </div>

                  </div>

                  {/* User Info */}
                  <div className="flex-1">

                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.user_name}
                    </h3>

                    <p className="flex items-center gap-2 text-gray-300 text-sm">
                      <FaIdBadge className="text-[#769A7F]" />
                      {item.total_chats} Open Vehicle
                    </p>

                  </div>

                </div>

                {/* Footer */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => openProfileModal(item.user_id)}
                    className="text-sm text-[#769A7F] hover:text-white font-medium"
                  >
                    View Profile →
                  </button>
                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* Modal */}
      {showModal && (
        <ProfileModal
          userId={selectedUserId}
          onClose={closeProfileModal}
        />
      )}

    </div>
  );
};

export default AppraisalList;