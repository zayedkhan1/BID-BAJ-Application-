


import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProfileModal from "../components/ProfileModal";
import { FaPlus, FaEye, FaIdBadge } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Deals = () => {


  const [appraisals, setAppraisals] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [vin, setVin] = useState("");

   

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


  console.log("Fetched Appraisals:", appraisals); // Debug log to check fetched data

  useEffect(() => {
    fetchAppraisals();
  }, []);


  const searchByVin = async (vinValue) => {
  try {
    const response = await fetch(
      `/api/vehicle/api/v1/appraisals/search/${vinValue}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const result = await response.json();

    setAppraisals(result.appraisals || []);

  } catch (error) {
    console.error("Search error:", error); 
  }
};


  const handleSearchChange = (e) => {
  const value = e.target.value;
  setVin(value);

  if (value.trim() === "") {
    // 👉 If empty → show all deals again
    fetchAppraisals();
  }
};
console.log("Current VIN Search Value:", vin); // Debug log to check VIN input value
const handleSearch = () => {
  if (!vin.trim()) return;

   searchByVin(vin);

navigate(`/search/${vin}`);
};

  const openProfileModal = (userId) => {
    setSelectedUserId(userId);
    setShowModal(true);
  };


  const closeProfileModal = () => {
    setShowModal(false);
    setSelectedUserId(null);
  };
  const openMessages = (userId, userName, profile_picture, TotalChat) => {
    navigate(`/appraisals/${userId}`, {
      state: {
        userName,
        profile_picture,
        TotalChat

      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (

    // i want if i clicl in this div it will fectch data form this api:http://bidbaj.com/vehicle/api/v1/appraisals/{userID} and show the Vin number  and message into a card under this specific user which one i clicked



    <div className="mt-16 min-h-screen bg-gray-900 text-gray-100 pt-20 p-6">

      <div className="max-w-7xl mx-auto">

      <div className="flex max-w-xl gap-3 mb-8 mx-auto">
  <input
    type="text"
    placeholder="Search by VIN..."
    value={vin}
    onChange={handleSearchChange}
    onKeyDown={(e) => {
      if (e.key === "Enter") handleSearch();
    }}
    className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white"
  />

  <button
    onClick={handleSearch}
    className="bg-[#769A7F] px-6 py-3 rounded-xl"
  >
    Search
  </button>
</div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">

          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#769A7F] to-teal-300 bg-clip-text text-transparent">
            Deals
          </h1>

          <Link to="/create-appraisal">
            <button className="mt-4 md:mt-0 flex items-center gap-2 bg-[#769A7F] hover:bg-[#5e7c66] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition hover:scale-105">
              <FaPlus /> Start New Deal
            </button>
          </Link>

        </div>

        {appraisals.length === 0 ? (

          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No Deals found.</p>
          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {appraisals.map((item) => (

              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center gap-5 hover:border-[#769A7F] hover:shadow-lg transition" >

                {/* image div */}

                <div className="relative">

                  <div
                    onClick={() => openProfileModal(item.user_id)}
                    className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#769A7F] ring-offset-2 ring-offset-gray-900 cursor-pointer hover:scale-105 transition"
                  >
                    <img
                      className="w-full h-full object-cover"

                      src={item.profile_picture ? `http://bidbaj.com${item.profile_picture}`: "/assets/image/dummy_profile.jpg"}
                      alt={item.user_name}
                    />
                  </div>

                  <div className="absolute -bottom-1 -right-1 bg-[#769A7F] rounded-full p-1.5">
                    <FaEye className="text-gray-900 text-xs" />
                  </div>

                </div>

           {/* content div */}

                <div
                  key={item.user_id}
                  onClick={() =>
                    openMessages(item.user_id, item.user_name, item.profile_picture, item.total_chats)
                  }
                  // className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-[#769A7F] hover:shadow-lg transition"
                >

                  <div className="flex items-center gap-5">

                    {/* Profile Image */}
                    {/* <div className="relative">

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

                  </div> */}

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
                  <div className="mt-4 flex justify-start">
                    <button
                     // onClick={() => openProfileModal(item.user_id)}
                      className="ml-5 text-sm text-[#769A7F] hover:text-white font-medium"
                    >
                      Start deal →
                    </button>
                  </div>

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

export default Deals;