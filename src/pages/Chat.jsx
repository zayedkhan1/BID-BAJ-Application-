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




/////////////////////////////////////////////////////////////message is going to backend///////////////////












































































// import { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import Loading from "../components/Loading";
// import { FaTachometerAlt } from "react-icons/fa";
// import ProfileModal from "../components/ProfileModal";

// // ✅ WebSocket imports
// import {
//   connectSocket,
//   sendSocketMessage,
//   closeSocket,
// } from "../services/websocket";

// const Chat = () => {
//   const { chatId } = useParams();
//       const location = useLocation();


//     const { appraisal_id } = location.state || {};



//   console.log("id sent form message.jsx",chatId)

//   const [appraisalsUserData, setAppraisalsUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   // ✅ Chat states
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");

//   console.log("sending appraisal id to api",{appraisal_id})

//   // ================= FETCH DATA =================
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


//   console.log("appraisal user data",appraisalsUserData)

//     const currentUserId = appraisalsUserData?.bid_details?.bidder_id;
//     console.log("current user id",  currentUserId)

// const formatTime = (timestamp) => {
//   if (!timestamp) return "";

//   const date = new Date(timestamp);
//   return date.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
// };
//   // ================= WEBSOCKET =================
//   useEffect(() => {
//     if (!chatId) return;

//     const token = localStorage.getItem("token");
//     console.log('chat id',chatId)

//     connectSocket(chatId, token, (data) => {
//       console.log("📩 Incoming:", data);

//       if (data.type === "chat_message") {
//         setMessages((prev) => [...prev, data]);
//       }
//     });

//     return () => {
//       closeSocket();
//     };
//   }, [chatId]);
//     console.log("messages data",messages)


//   // ================= SEND MESSAGE =================

//   console.log( appraisalsUserData?.bid_details?.bidder_id,appraisalsUserData?.appraisal_details?.appraised_by?.id, Number(chatId) )
//   const handleSendMessage = () => {
//     if (!messageInput.trim()) return;

//     const payload = {
//       type: "chat_message",
//       data_type: "message",
//       message: messageInput,
//       from_id: appraisalsUserData?.bid_details?.bidder_id, 
//       to_id: appraisalsUserData?.appraisal_details?.appraised_by?.id,
//       chat_id:  Number(chatId)  ,
//       file: null,
//     };
  
//     console.log("📤 Sending:", payload);

//     sendSocketMessage(payload);

//     // instant UI update
//     // setMessages((prev) => [...prev, payload]);

//     setMessageInput("");
//   };

//   // ================= MODAL =================
//   const openProfileModal = (userId) => {
//     setSelectedUserId(userId);
//     setShowModal(true);
//   };

//   const closeProfileModal = () => {
//     setShowModal(false);
//     setSelectedUserId(null);
//   };

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div className="mt-16 min-h-screen p-6">
//       <div className="grid grid-cols-12">
        
//         {/* ================= USER SIDE ================= */}
//         <div className="bg-gray-800 col-span-4">
//           <div className="flex items-center gap-2 p-4 border rounded">
            
//             <img
//               onClick={() =>
//                 openProfileModal(
//                   appraisalsUserData?.appraisal_details?.appraised_by?.id
//                 )
//               }
//               src={
//                 appraisalsUserData?.appraisal_details?.appraised_by
//                   ?.profile_picture
//                   ? `http://bidbaj.com${appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture}`
//                   : "../../public/assets/image/dummy_profile.jpg"
//               }
//               alt="Profile"
//               className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-700 object-cover cursor-pointer"
//             />

//             <div>
//               <h2 className="text-2xl font-bold text-white">
//                 {appraisalsUserData?.appraisal_details?.appraised_by?.name}
//               </h2>

//               <div className="flex items-center gap-2 text-gray-400 mt-1">
//                 <FaTachometerAlt className="text-[#769A7F]" />
//                 <span>
//                   {appraisalsUserData?.appraisal_details?.milage}
//                 </span>
//               </div>

//               <span className="text-gray-400 text-lg font-bold">
//                 {appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ================= CHAT SIDE ================= */}
//         <div className="bg-gray-700 col-span-8 flex flex-col h-[80vh]">
          
//           {/* Messages */}
    

//               {/* <div className="flex-1 overflow-y-auto p-4 space-y-2">
//                 {messages.map((msg, index) => {
//                   const isMyMessage = msg.from_id === currentUserId;

//                   return (
//                     <div
//                       key={index}
//                       className={`p-3 rounded-lg max-w-xs text-white ${
//                         isMyMessage ? "bg-green-500 ml-auto" : "bg-green-500 mr-auto"
//                       }`}
//                     >
//                       {msg.message}
//                     </div>
//                   );
//                 })}
//               </div> */}
// {/* updated message ui with naem and date */}
// <div className="flex-1 overflow-y-auto p-4 space-y-3">
//   {messages.map((msg, index) => {
//     const isMyMessage = Number(msg.from_id) === Number(currentUserId);
 

//     return (
//       <div
//         key={index}
//         className={`max-w-xs ${
//           isMyMessage ? "ml-auto text-right" : "mr-auto text-left"
//         }`}
//       >
//         {/* Name */}
//         <p className="text-xs text-gray-300 mb-1">
//           {isMyMessage ? msg.from_username || "You" : msg.from_username || "user"}
//         </p>

//         {/* Message Box */}
//         <div
//           className={`px-4 py-2 rounded-2xl text-white ${
//             isMyMessage ? "bg-green-500" : "bg-green-400"
//           }`}
//         >
//           <p>{msg.message}</p>

//           {/* Time */}
//           <p className="text-[10px] text-gray-200 mt-1">
//             {formatTime(msg.created_at)}
//           </p>
//         </div>
//       </div>
//     );
//   })}
// </div>



//           {/* Input */}
//           <div className="p-3 border-t flex gap-2">
//             <input
//               value={messageInput}
//               onChange={(e) => setMessageInput(e.target.value)}
//               className="flex-1 p-2 border rounded"
//               placeholder="Type a message..."
//             />

//             <button
//               onClick={handleSendMessage}
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= MODAL ================= */}
//       {showModal && (
//         <ProfileModal
//           userId={selectedUserId}
//           onClose={closeProfileModal}
//         />
//       )}
//     </div>
//   );
// };

// export default Chat;





















//////////////////  message showin previous message also///////////////

import { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { FaTachometerAlt } from "react-icons/fa";
import ProfileModal from "../components/ProfileModal";

import {
  connectSocket,
  sendSocketMessage,
  closeSocket,
} from "../services/websocket";

const Chat = () => {
  const { chatId } = useParams();
  const location = useLocation();
  const { appraisal_id } = location.state || {};

  const [appraisalsUserData, setAppraisalsUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const messagesEndRef = useRef(null);

  // ================= FETCH APPRAISAL =================
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

      const result = await response.json();
      setAppraisalsUserData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ================= FETCH MESSAGES =================
  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `/api/communication/api/v1/messages/${chatId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch messages");

      const data = await response.json();

      console.log("📥 API messages:", data);

      // ✅ ONLY SET (NO MERGE)
      setMessages(data.messages || []);
    } catch (error) {
      console.error("❌ Error fetching messages:", error);
    }
  };

  // ================= INITIAL LOAD =================
  useEffect(() => {
    if (appraisal_id) fetchDetails();
  }, [appraisal_id]);

  useEffect(() => {
    if (!chatId) return;

    console.log("🔥 Fetching messages for:", chatId);
    fetchMessages();
  }, [chatId]);

  const currentUserId = appraisalsUserData?.bid_details?.bidder_id;

  // ================= FORMAT TIME =================
  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ================= WEBSOCKET =================
  useEffect(() => {
    if (!chatId) return;

    const token = localStorage.getItem("token");

    connectSocket(chatId, token, (data) => {
      console.log("📩 Incoming:", data);

      if (data.type === "chat_message") {
        const newMessage = {
          id: data.id || Date.now(),
          message: data.message,
          from_id: data.from_id,
          to_id: data.to_id,
          chat: data.chat_id,
          timestamp: data.timestamp || new Date().toISOString(),
          from_username: data.from_username,
          to_username: data.to_username,
        };

        setMessages((prev) => {
          const exists = prev.some((m) => m.id === newMessage.id);
          if (exists) return prev;

          return [...prev, newMessage];
        });
      }
    });

    return () => closeSocket();
  }, [chatId]);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ================= SEND MESSAGE =================
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const payload = {
      type: "chat_message",
      data_type: "message",
      message: messageInput,
      from_id: appraisalsUserData?.bid_details?.bidder_id,
      to_id: appraisalsUserData?.appraisal_details?.appraised_by?.id,
      chat_id: Number(chatId),
      file: null,
    };

    console.log("📤 Sending:", payload);

    sendSocketMessage(payload);
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

  if (loading) return <Loading />;

  return (
    <div className="mt-16 min-h-screen p-6">
      <div className="grid grid-cols-12">

        {/* USER SIDE */}
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
              className="w-20 h-20 rounded-full cursor-pointer"
            />

            <div>
              <h2 className="text-xl font-bold text-white">
                {appraisalsUserData?.appraisal_details?.appraised_by?.name}
              </h2>

              <div className="flex items-center gap-2 text-gray-400">
                <FaTachometerAlt />
                <span>
                  {appraisalsUserData?.appraisal_details?.milage}
                </span>
              </div>

              <span className="text-gray-400 text-sm">
                {appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}
              </span>
            </div>
          </div>
        </div>

        {/* CHAT SIDE */}
        <div className="bg-gray-700 col-span-8 flex flex-col h-[80vh]">
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => {
              const isMyMessage =
                Number(msg.from_id) === Number(currentUserId);

              return (
                <div
                  key={msg.id || index}
                  className={`max-w-xs ${
                    isMyMessage ? "ml-auto text-right" : "mr-auto text-left"
                  }`}
                >
                  {/* Name */}
                  <p className="text-xs text-gray-300 mb-1">
                    {isMyMessage ? msg.from_username : msg.from_username}
                  </p>

                  {/* Message */}
                  <div
                    className={`px-4 py-2 rounded-2xl text-white ${
                      isMyMessage ? "bg-green-500" : "bg-green-400"
                    }`}
                  >
                    <p>{msg.message}</p>

                    {/* Time */}
                    <p className="text-[10px] text-gray-200 mt-1">
                      {formatTime(msg.timestamp || msg.created_at)}
                    </p>
                  </div>
                </div>
              );
            })}

            <div ref={messagesEndRef} />
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

export default Chat;









