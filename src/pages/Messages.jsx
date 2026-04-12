

import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { FaCheck, FaCheckDouble, FaEye, FaTrash } from "react-icons/fa";
import ProfileModal from "../components/ProfileModal";
import { formatMessageDate, formatMessageTime } from "../utility/utility";

const Messages = () => {

    const { userId } = useParams();
    const location = useLocation();
      const [showModal, setShowModal] = useState(false);
      const [selectedUserId, setSelectedUserId] = useState(null);
      const navigate = useNavigate();

      console.log("user id for next page",userId)
    

    const { userName, profile_picture, TotalChat } = location.state || {};

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMessages = async () => {
        try {
            const response = await fetch(
                `/api/vehicle/api/v1/appraisals/${userId}`,
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

            setMessages(result.appraisals);

        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
         // First fetch immediately
    fetchMessages();

    // Set interval for every 1 minute (60000 ms)
    const interval = setInterval(() => {
        fetchMessages();
    }, 60000);

    // Cleanup to prevent memory leak
    return () => clearInterval(interval);
    
    }, [userId]);

     const openProfileModal = (userId) => {
    setSelectedUserId(userId);
    setShowModal(true);
  };


     const closeProfileModal = () => {
    setShowModal(false),
  setSelectedUserId(null);
  };


  console.log("apprisal id from message.jsx",messages[0]?.id)

   const goToChat=(chatId,appraisal_id)=>{
    navigate(`/chat/${chatId}`,
      {
        state:{
             appraisal_id:appraisal_id,
      
        }
      }
    )
   }

    console.log("Fetched Messages:", messages);
   
    console.log("sending appraisal id:", messages[0]?.id);
    
    if (loading) return <Loading />;

    return (

        <div className=" mt-10 min-h-screen bg-gray-900 text-white p-6 pt-20">

            <div className="max-w-4xl mx-auto">
   {/* message div */}
              
        <div className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 mb-8 " >
                  <div className="relative">
                      <div
                 key={userId}
                onClick={() => openProfileModal(userId)}>
                    <img
                        src={`http://bidbaj.com${profile_picture}`}
                        className="w-24 h-24 rounded-full mx-auto mb-2 ring-2 ring-[#769A7F]/90 p-0.5 "
                    />
                
                 </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#769A7F] rounded-full p-1.5 mb-4">
                        <FaEye className="text-gray-900 text-xs" />
                    </div>
                 
            </div>

                {/* User Card */}
                <div 
                // className="bg-gray-800 rounded-xl p-6 flex items-center gap-4 mb-8"
                >

                    {/* <img 
                        src={`http://bidbaj.com${profile_picture}`}
                        className="w-16 h-16 rounded-full object-cover"
                    /> */}

                    <div>
                        <h2 className="text-2xl font-bold">{userName}</h2>
                        <p className="text-gray-400">{TotalChat} Open Vehicles</p>
                    </div>

                </div>

        </div>
                {/* Messages */}
                {messages.length === 0 ? (
                    <p className="text-gray-400">No messages found</p>
                ) : (

                    messages.map((item) => (
 //i want if i click in this div it will take id and take me into chat.jsx page
                     
                        <div 
                        onClick={()=>{goToChat(item?.message?.chat, item?.id)}}

                        
                        
                        className="max-w-3xl mx-auto bg-gray-800 border border-gray-700 p-6 rounded-xl mb-4 flex justify-between ">
                            <div
                                key={item.id}

                            >

                                <p className="text-sm text-gray-400 mb-2">
                                    VIN Number
                                </p>

                                <p className="text-lg font-semibold text-[#769A7F]">
                                    {item?.vin_no}
                                </p>

                                <p className="text-sm text-gray-400 mt-4">
                                    Message
                                </p>

                                <p className="text-white">
                                    {item?.message?.message}
                                </p>

                            </div>
                            {/* new div */}
                           <div>

                             <div className="mb-6">
                                
                                <p >{formatMessageTime(item?.message?.timestamp)}</p>

                                <p> {formatMessageDate(item?.message?.timestamp)}</p>

                            </div>

                            <div className="flex items-center gap-3 ">

                                <p className="text-sm">
                                    {item.is_appraised ? (
                                        <FaCheckDouble className="text-blue-500 inline" />
                                    ) : (
                                        <FaCheck className="text-white inline" />
                                    )}
                                </p>
                                    
                                  {/* i want if  click on this i  button it will take me into messageUserInfo page ,where form this api: http://bidbaj.com/vehicle/api/v1/appraisal/{appraisal_id} fetch data and first it will show user info then show created_at and vehicle information like tires_rating*/}
                                    {/* <button className="w-8 h-8 flex items-center justify-center font-extrabold bg-gray-600 text-white rounded-full">
                                    i
                                    </button> */}

<button
  onClick={(e) =>{
     e.stopPropagation();

    navigate(`/appraisals/${item.id}`, {
      state: {
        userName,
        profile_picture,
      },
    })
  }}
  className="w-8 h-8 flex items-center justify-center font-extrabold bg-gray-600 text-white rounded-full hover:bg-[#769A7F]"
>
  i
</button>

<button><FaTrash className="text-red-500"></FaTrash></button>

                            </div>

                           </div>



                        </div>


                    ))

                )}

            </div>

           {showModal && (
        <ProfileModal
          userId={userId}
          onClose={closeProfileModal}
        />
          )}
        </div>

    );
};

export default Messages;