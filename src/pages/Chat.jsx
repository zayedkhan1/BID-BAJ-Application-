// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loading from "../components/Loading";
// import { FaTachometerAlt } from "react-icons/fa";
// import ProfileModal from "../components/ProfileModal";

// const Chat = () => {
//     const { chatId } = useParams();
//     const [appraisalsUserData, setAppraisalsUserData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [selectedUserId, setSelectedUserId] = useState(null);
//     const [showModal, setShowModal] = useState(false);
    

//     const fetchDetails = async () => {
//         try {
//             const response = await fetch(
//                 `/api/vehicle/api/v1/appraisal/${chatId}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 }
//             );

//             if (!response.ok) {
//                 throw new Error("Failed to fetch details");
//             }

//             const result = await response.json();
//             setAppraisalsUserData(result);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchDetails();
//     }, [chatId]);

//     console.log(appraisalsUserData)
//     //   console.log(appraisalsUserData.appraisal_details.appraised_by.name)

//  const openProfileModal = (userId) => {
//     setSelectedUserId(userId);
//     setShowModal(true);
//   };

//   const closeProfileModal = () => {
//     setShowModal(false);
//     setSelectedUserId(null);
//   };

//     if (loading) {
//         return <Loading />;
//     }

//     return (
//         <div className='mt-16 min-h-screen p-6'>

//             <div className='grid grid-cols-12 '>
//                 {/* user interface */}
//                 <div className='bg-gray-800 col-span-4' >
                    
//                     <div className="flex items-center gap-2 p-2 border rounded">
//                         <img
//                           onClick={() =>
//                                     openProfileModal(appraisalsUserData?.appraisal_details?.appraised_by?.id)
//                                 }
//                             src={appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture ? `http://bidbaj.com${appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture}` : '../../public/assets/image/dummy_profile.jpg'}

//                             alt="Profile"
//                             className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-700 group-hover:border-emerald-400/50 transition-all duration-300 object-cover"
//                         />

                   
//                     <div>
//                         <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                             {appraisalsUserData?.appraisal_details?.appraised_by?.name}
//                         </h2>
//                         <div className="flex items-center gap-2 text-gray-400 mt-1">
//                             <FaTachometerAlt className="text-[#769A7F] " />
//                             <span>{appraisalsUserData?.appraisal_details?.milage} </span>
//                         </div>
//                         <span className="text-gray-400 text-xl font-bold">{appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}</span>

//                     </div>
//                     </div>

//                 </div>
//                 {/* chat interface */}
//                 <div className='bg-blue-300 col-span-8'>
//                     <h3>chat interface</h3>
//                 </div>

//             </div>
//               {/* Profile Modal */}
//       {showModal && (
//         <ProfileModal
//           userId={appraisalsUserData?.appraisal_details?.appraised_by?.id}
//           onClose={closeProfileModal}
//         />
//       )}
//         </div>
//     );
// };

// export default Chat;




/////////////////////////////////////////////////////////////\












































































import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { FaTachometerAlt } from "react-icons/fa";
import ProfileModal from "../components/ProfileModal";

// ✅ WebSocket imports
import {
  connectSocket,
  sendSocketMessage,
  closeSocket,
} from "../services/websocket";

const Chat = () => {
  const { chatId } = useParams();
      const location = useLocation();


    const { appraisal_id } = location.state || {};



  console.log("id sent form message.jsx",chatId)

  const [appraisalsUserData, setAppraisalsUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // ✅ Chat states
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  console.log("sending appraisal id to api",{appraisal_id})

  // ================= FETCH DATA =================
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

  console.log("appraisal user data",appraisalsUserData)

  // ================= WEBSOCKET =================
  useEffect(() => {
    if (!chatId) return;

    const token = localStorage.getItem("token");
    console.log('chat id',chatId)

    connectSocket(chatId, token, (data) => {
      console.log("📩 Incoming:", data);

      if (data.type === "chat_message") {
        setMessages((prev) => [...prev, data]);
      }
    });

    return () => {
      closeSocket();
    };
  }, [chatId]);

  // ================= SEND MESSAGE =================

  console.log( appraisalsUserData?.bid_details?.bidder_id,appraisalsUserData?.appraisal_details?.appraised_by?.id, Number(chatId) )
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const payload = {
      type: "chat_message",
      data_type: "message",
      message: messageInput,
      from_id: appraisalsUserData?.bid_details?.bidder_id, 
      to_id: appraisalsUserData?.appraisal_details?.appraised_by?.id,
      chat_id:  Number(chatId)  ,
      file: null,
    };

    console.log("📤 Sending:", payload);

    sendSocketMessage(payload);

    // instant UI update
    setMessages((prev) => [...prev, payload]);

    setMessageInput("");
  };

  // ================= MODAL =================
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
    <div className="mt-16 min-h-screen p-6">
      <div className="grid grid-cols-12">
        
        {/* ================= USER SIDE ================= */}
        <div className="bg-gray-800 col-span-4">
          <div className="flex items-center gap-2 p-4 border rounded">
            
            <img
              onClick={() =>
                openProfileModal(
                  appraisalsUserData?.appraisal_details?.appraised_by?.id
                )
              }
              src={
                appraisalsUserData?.appraisal_details?.appraised_by
                  ?.profile_picture
                  ? `http://bidbaj.com${appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture}`
                  : "../../public/assets/image/dummy_profile.jpg"
              }
              alt="Profile"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-700 object-cover cursor-pointer"
            />

            <div>
              <h2 className="text-2xl font-bold text-white">
                {appraisalsUserData?.appraisal_details?.appraised_by?.name}
              </h2>

              <div className="flex items-center gap-2 text-gray-400 mt-1">
                <FaTachometerAlt className="text-[#769A7F]" />
                <span>
                  {appraisalsUserData?.appraisal_details?.milage}
                </span>
              </div>

              <span className="text-gray-400 text-lg font-bold">
                {appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}
              </span>
            </div>
          </div>
        </div>

        {/* ================= CHAT SIDE ================= */}
        <div className="bg-gray-700 col-span-8 flex flex-col h-[80vh]">
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded max-w-xs ${
                  msg.from_id === appraisalsUserData?.user?.id
                    ? "bg-green-400 ml-auto text-right"
                    : "bg-white"
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Type a message..."
            />

            <button
              onClick={handleSendMessage}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <ProfileModal
          userId={selectedUserId}
          onClose={closeProfileModal}
        />
      )}
    </div>
  );
};

export default Chat;







