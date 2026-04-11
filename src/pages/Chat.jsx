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













// import { useEffect, useState, useRef } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import Loading from "../components/Loading";
// import { FaTachometerAlt } from "react-icons/fa";
// import ProfileModal from "../components/ProfileModal";

// import {
//   connectSocket,
//   sendSocketMessage,
//   closeSocket,
// } from "../services/websocket";
// import { formatChatTime } from "../utility/utility";

// const Chat = () => {
//   const { chatId } = useParams();
//   const location = useLocation();
//   const { appraisal_id } = location.state || {};

//   const [appraisalsUserData, setAppraisalsUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");

//   const messagesEndRef = useRef(null);

//   // ================= FETCH APPRAISAL =================
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

//       const result = await response.json();
//       setAppraisalsUserData(result);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= FETCH MESSAGES =================
//   const fetchMessages = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         `/api/communication/api/v1/messages/${chatId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (!response.ok) throw new Error("Failed to fetch messages");

//       const data = await response.json();

//       console.log("📥 API messages:", data);

//       // ✅ ONLY SET (NO MERGE)
//       setMessages(data.messages || []);
//     } catch (error) {
//       console.error("❌ Error fetching messages:", error);
//     }
//   };

//   // ================= INITIAL LOAD =================
//   useEffect(() => {
//     if (appraisal_id) fetchDetails();
//   }, [appraisal_id]);

//   useEffect(() => {
//     if (!chatId) return;

//     console.log("🔥 Fetching messages for:", chatId);
//     fetchMessages();
//   }, [chatId]);

//   const currentUserId = appraisalsUserData?.bid_details?.bidder_id;


//   // ================= WEBSOCKET =================
//   useEffect(() => {
//     if (!chatId) return;

//     const token = localStorage.getItem("token");

//     connectSocket(chatId, token, (data) => {
//       console.log("📩 Incoming:", data);

//       if (data.type === "chat_message") {
//         const newMessage = {
//           id: data.id || Date.now(),
//           message: data.message,
//           from_id: data.from_id,
//           to_id: data.to_id,
//           chat: data.chat_id,
//           timestamp: data.timestamp || new Date().toISOString(),
//           from_username: data.from_username,
//           to_username: data.to_username,
//         };

//         setMessages((prev) => {
//           const exists = prev.some((m) => m.id === newMessage.id);
//           if (exists) return prev;

//           return [...prev, newMessage];
//         });
//       }
//     });

//     return () => closeSocket();
//   }, [chatId]);

//   // ================= AUTO SCROLL =================
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // ================= SEND MESSAGE =================
//   const handleSendMessage = () => {
//     if (!messageInput.trim()) return;

//     const payload = {
//       type: "chat_message",
//       data_type: "message",
//       message: messageInput,
//       from_id: appraisalsUserData?.bid_details?.bidder_id,
//       to_id: appraisalsUserData?.appraisal_details?.appraised_by?.id,
//       chat_id: Number(chatId),
//       file: null,
//     }; 

//     console.log("📤 Sending:", payload);

//     sendSocketMessage(payload);
//     setMessageInput("");
//   };
//     console.log("to id", appraisalsUserData?.bid_details?.bidder_id)

//   // ================= MODAL =================
//   const openProfileModal = (userId) => {
//     setSelectedUserId(userId);
//     setShowModal(true);
//   };

//   const closeProfileModal = () => {
//     setShowModal(false);
//     setSelectedUserId(null);
//   };

//   if (loading) return <Loading />;

//   return (
//     <div className="mt-16 min-h-screen p-6">
//       <div className="grid grid-cols-12">

//         {/* USER SIDE */}
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
//               className="w-20 h-20 rounded-full cursor-pointer"
//             />

//             <div>
//               <h2 className="text-xl font-bold text-white">
//                 {appraisalsUserData?.appraisal_details?.appraised_by?.name}
//               </h2>

//               <div className="flex items-center gap-2 text-gray-400">
//                 <FaTachometerAlt />
//                 <span>
//                   {appraisalsUserData?.appraisal_details?.milage}
//                 </span>
//               </div>

//               <span className="text-gray-400 text-sm">
//                 {appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* CHAT SIDE */}
//         <div className="bg-gray-700 col-span-8 flex flex-col h-[80vh]">
          
//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-3">
//             {messages.map((msg, index) => {
//               const isMyMessage =
//                 Number(msg.from_id) === Number(currentUserId);

//               return (
//                 <div
//                   key={msg.id || index}
//                   className={`max-w-xs ${
//                     isMyMessage ? "ml-auto text-right" : "mr-auto text-left"
//                   }`}
//                 >
//                   {/* Name */}
//                   <p className="text-xs text-gray-300 mb-1">
//                     {isMyMessage ? msg.from_username : msg.from_username}
//                   </p>

//                   {/* Message */}
//                   <div
//                     className={`px-4 py-2 rounded-2xl text-white ${
//                       isMyMessage ? "bg-green-500" : "bg-green-400"
//                     }`}
//                   >
//                     <p>{msg.message}</p>

//                     {/* Time */}
//                     <p className="text-[10px] text-gray-200 mt-1">
//                       {formatChatTime(msg.timestamp || msg.created_at)}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}

//             <div ref={messagesEndRef} />
//           </div>

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

//       {/* Modal */}
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


























///////////////////// chat with file and message ////////
































 

// import { useEffect, useState, useRef } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import Loading from "../components/Loading";
// import { FaChevronDown, FaChevronUp, FaPaperPlane, FaTachometerAlt } from "react-icons/fa";
// import ProfileModal from "../components/ProfileModal";

// import {
//   connectSocket,
//   sendSocketMessage,
//   closeSocket,
// } from "../services/websocket";
// import { formatChatTime } from "../utility/utility";
// import chat_logo from "../../public/assets/logo/chat_page_logo.png"
// import { FaPhoneAlt } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { IoMdInformation } from "react-icons/io";

// const Chat = () => {
//   const { chatId } = useParams();
//   const location = useLocation();
//   const { appraisal_id } = location.state || {};
//   const navigate = useNavigate();

//   const [appraisalsUserData, setAppraisalsUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");

//   //=================== BID MODAL STATES =========
//   const [showBidModal, setShowBidModal] = useState(true);
//     const [showOfferModal, setShowOfferModal] = useState(false);
//     const [offer, setOffer] = useState("");
  
//   // =================== CONFIRM MODAL STATER ===========
//   const [showConfirmModal, setShowConfirmModal] = useState(false);

//   //================= Accept MOdal state =============
//   const [showConfirmAcceptModal, setShowConfirmAcceptModal] = useState(false);


//   // ✅ NEW STATES
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const fileInputRef = useRef(null);

//   const messagesEndRef = useRef(null);




//   // ================= FETCH APPRAISAL =================
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

//       const result = await response.json();
//       setAppraisalsUserData(result);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   console.log("appraisal user data", appraisalsUserData);

//   // ================= FETCH MESSAGES =================
//   const fetchMessages = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         `/api/communication/api/v1/messages/${chatId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();
//       setMessages(data.messages || []);
//     } catch (error) {
//       console.error("❌ Error fetching messages:", error);
//     }
//   };

//   useEffect(() => {
//     if (appraisal_id) fetchDetails();
//   }, [appraisal_id]);

//   useEffect(() => {
//     if (chatId) fetchMessages();
//   }, [chatId]);

//   const currentUserId = appraisalsUserData?.bid_details?.bidder_id;

//   // ================= WEBSOCKET =================
//   useEffect(() => {
//     if (!chatId) return;

//     const token = localStorage.getItem("token");

//     connectSocket(chatId, token, (data) => {
//       if (data.type === "chat_message") {
//         const newMessage = {
//           id: data.id || Date.now(),
//           message: data.message,
//           from_id: data.from_id,
//           to_id: data.to_id,
//           chat: data.chat_id,
//           timestamp: data.timestamp || new Date().toISOString(),
//           from_username: data.from_username,
//         };

//         setMessages((prev) => {
//           const exists = prev.some((m) => m.id === newMessage.id);
//           if (exists) return prev;
//           return [...prev, newMessage];
//         });
//       }

//       if (data.type === "bid_update") {
//       // ✅ update UI for ALL users
//       fetchDetails();
//     }

//     });

//     return () => closeSocket();
//   }, [chatId]);

//   // ================= AUTO SCROLL =================
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // ================= FILE HANDLING =================
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);

//     const previewFiles = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));

//     setSelectedFiles((prev) => [...prev, ...previewFiles]);
//   };

//   const removeImage = (index) => {
//     setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   // ================= UPLOAD FILE =================
//   const uploadImages = async () => {
//     if (selectedFiles.length === 0) return;

//     const formData = new FormData();

//     formData.append("chat_id", Number(chatId));
//     formData.append(
//       "to_id",
//       appraisalsUserData?.appraisal_details?.appraised_by?.id
//     );

//     selectedFiles.forEach((item) => {
//       formData.append("images", item.file); // try images[] if needed
//     });

//     try {
//       const res = await fetch(
//         "/api/communication/api/v1/message/file",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: formData,
//         }
//       );

//       await res.json();
//       setSelectedFiles([]);
//       fetchMessages();
//     } catch (error) {
//       console.error("❌ Upload error:", error);
//     }
//   };

//   // ================= SEND MESSAGE =================
//   const handleSendMessage = () => {
//     if (!messageInput.trim()) return;

//     const payload = {
//       type: "chat_message",
//       data_type: "message",
//       message: messageInput,
//       from_id: appraisalsUserData?.bid_details?.bidder_id,
//       to_id: appraisalsUserData?.appraisal_details?.appraised_by?.id,
//       chat_id: Number(chatId),
//       file: null,
//     };

//     sendSocketMessage(payload);
//     setMessageInput("");
//   };

//   // ================= SEND BOTH =================
//   const handleSend = async () => {
//     if (selectedFiles.length > 0) {
//       await uploadImages();
//     }

//     if (messageInput.trim()) {
//       handleSendMessage();
//     }
//   };

// // ==================Send offer==============

  
 
//   const handleConfirmBid = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     const res = await fetch(
//       `/api/vehicle/api/v1/appraisal/bid/${appraisal_id}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           amount: Number(offer),   // ✅ amount
//           currency: "USD",         // ✅ currency added
//         }),
//       }
//     );

//     const data = await res.json();
//     console.log("Bid response:", data);
     
//   // ✅ IMPORTANT
//     await fetchDetails(); // update instantly for sende



//     // ✅ Close modals
//     setShowConfirmModal(false);
//     setShowOfferModal(false);

//     // ✅ Add message to chat
//     const bidMessage = {
//       id: Date.now(),
//        message: `💰 BID PLACED: $${offer}`,
//       from_id: currentUserId,
//       timestamp: new Date().toISOString(),
//       from_username: "You",
//     };

//     setMessages((prev) => [...prev, bidMessage]);

//     // ✅ Reset input
//     setOffer("");

//   } catch (error) {
//     console.error("❌ Bid error:", error);
//   }
// };



// //=================== BID Accept handler API function ===============
// const handleAcceptBid = async () => {
//   try {
//     const token = localStorage.getItem("token");

//     const res = await fetch(
//       `/api/vehicle/api/v1/appraisal/bid/accept/${appraisal_id}`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const data = await res.json();
//     console.log("Accept response:", data);

//     // close modal
//     setShowConfirmAcceptModal(false);

//     // optional: refresh data
//     await fetchDetails();

//     // navigate home
//     navigate("/");
//   } catch (error) {
//     console.error("❌ Accept error:", error);
//   }
// };

// // ============ BID ACCEPT BUTTON WORKFLOW ==========

// const bids = appraisalsUserData?.bid_details?.bids || [];

//  console.log("bids data", bids.length)
// const lastBid = bids[bids.length - 1];
// const currentBidUserId = appraisalsUserData?.bid_details?.bidder_id;


// console.log("current user ID", currentBidUserId)

// const isLastBidMine =
//   lastBid && Number(lastBid.bidder) === Number(currentBidUserId);








//   // ================= MODAL =================
//   const openProfileModal = (userId) => {
//     setSelectedUserId(userId);
//     setShowModal(true);
//   };

//   const closeProfileModal = () => {
//     setShowModal(false);
//     setSelectedUserId(null);
//   };

//   if (loading) return <Loading />;

//   return (
//    <div className="bg-gray-800">

//     <div className=" min-h-screen p-6">
//       <div className="grid grid-cols-12">

//         {/* LEFT SIDE */}
//       <div className="bg-gray-600 col-span-4 ">
//         <div className="p-2 flex justify-center items-center border-b-1">
//            <img src={chat_logo} alt="BIDBAJ"
//            className="w-60 h-15 object-contain "
           
//            />
          
//         </div>
//            <div className="flex items-center gap-2 p-4 border rounded">
//              <img
//                onClick={() =>
//                  openProfileModal(
//                    appraisalsUserData?.appraisal_details?.appraised_by?.id
//                  )
//                }
//                src={
//                  appraisalsUserData?.appraisal_details?.appraised_by
//                    ?.profile_picture
//                    ? `http://bidbaj.com${appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture}`
//                    : "../../public/assets/image/dummy_profile.jpg"
//                }
//                alt="Profile"
//                className="w-20 h-20 rounded-full cursor-pointer"
             
//               />

// {/* I want if i click on this div it will open me a modal uder the div where i will show my bid history and bid with Accept and Reject button */}
//               {/* <div>
//                <h2 className="text-xl font-bold text-white">
//                  {appraisalsUserData?.appraisal_details?.appraised_by?.name}
//                </h2>
//                <div className="flex items-center gap-2 text-gray-400">
//                  <FaTachometerAlt />
//                  <span>
//                    {appraisalsUserData?.appraisal_details?.milage}
//                  </span>
//                </div>
//                <span className="text-gray-400 text-sm">
//                  {appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}
//                </span>
//              </div> */}

//   {/* new div mor modal */}
//   <div
//     onClick={() => setShowBidModal(!showBidModal)}
//     className="cursor-pointer"
//   >


//              <div
//   className="cursor-pointer flex justify-between items-center"
// >
//   {/* Left content */}
//   <div>
//     <h2 className="text-xl font-bold text-white">
//       {appraisalsUserData?.appraisal_details?.appraised_by?.name}
//     </h2>

//     <div className="flex items-center gap-2 text-gray-400">
//       <FaTachometerAlt />
//       <span>
//         {appraisalsUserData?.appraisal_details?.milage}
//       </span>
//     </div>

//     <span className="text-gray-400 text-sm">
//       {appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}
//     </span>
//   </div>

  

// </div>
// {/* Right icon */}
//   <div className="ml-20">
//      <FaChevronDown
//     className={`text-gray-400 transition-transform duration-300 ${
//       showBidModal ? "rotate-180" : ""
//     }`}
//   />
//   </div>
 
//   </div>



//            </div>
//         {showBidModal && (
//   <div className=" p-4 bg-gray-800 rounded-lg shadow-lg">
    
//     {/* Bid History */}
//     <h3 className="text-white font-semibold mb-2">Bid History</h3>

//     <div className="space-y-2 text-gray-300">

//     <div className="flex justify-between">
//   <div className="max-h-20 overflow-y-auto w-full">
//     {appraisalsUserData?.bid_details?.bids.map((bidData, index) => (
//       <div key={index} className="border-b py-2 text-gray-300">
//         {bidData.text}
//       </div>
//     ))}


//   </div>

// </div>
//       <p className="text-2xl"><span className="text-blue-500 font-bold">{appraisalsUserData?.bid_details?.bid_name} : </span>${appraisalsUserData?.bid_details?.running_bid} </p>

     
//     </div>

//     {/* Action Buttons */}
//     <div className="flex gap-3 mt-4">
//       <button
      
//       // className="bg-green-600 px-4 py-1 rounded text-white"
    
//         onClick={() => setShowConfirmAcceptModal(true)}
//         disabled={isLastBidMine}
//   className={`px-4 py-1 rounded text-white ${
//     isLastBidMine
//       ? "bg-gray-400 cursor-not-allowed"
//       : "bg-green-600 cursor-pointer"
//   }`}
      
//       >
//         Accept
//       </button>
//       {/* accept modal */}
//       {showConfirmAcceptModal && (
// <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
//     <div className="bg-white p-6 rounded-xl shadow-lg w-80">
      
//       <h2 className="text-lg font-semibold text-center mb-4">
//         Confirm Accept Bid
//       </h2>

//       <p className="text-center mb-4">
//         Are you sure you want to accept this bid?
//       </p>

//       <div className="flex gap-3">
//         <button
//           onClick={() => setShowConfirmAcceptModal(false)}
//           className="w-full bg-gray-400 text-white py-2 rounded"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={handleAcceptBid}
//           className="w-full bg-green-600 text-white py-2 rounded"
//         >
//           Confirm
//         </button>
//       </div>
//     </div>
//   </div>
// )}
//       <button 
//         onClick={() => setShowOfferModal(true)}

//       className="bg-red-600 px-4 py-1 rounded text-white cursor-pointer">
//         Counter
//       </button>
//     </div>

//       {/* Modal */}
      
//       {showOfferModal && (
//         <div className=" mt-2 w-72 rounded-2xl  ">
//             <h2 className="text-xl text-gray-200 font-semibold mb-3">Enter Your Offer</h2>
//             <div className="flex items-center gap-4">
// {/* 
//   <input
//     type="number"
//     placeholder="$0.00"
//     value={offer}
//     onChange={(e) => setOffer(e.target.value)}
//     className="flex-1 border rounded-lg px-3 py-2 bg-white outline-none"
//   /> */}
//   <div className="relative w-full">
//   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-7   00 pointer-events-none">
//     $
//   </span>

//   <input
//     type="number"
//     placeholder="0.00"
//     value={offer}
//     onChange={(e) => setOffer(e.target.value)}
//     className="w-full border rounded-lg pl-8 pr-3 py-2 outline-none bg-white"
//   />
// </div>

//   <button
//      onClick={() => {
//     if (!offer) return;
//     setShowConfirmModal(true); // open confirm modal
//   }}
//     className="px-4 py-2 bg-orange-500 text-white rounded-lg whitespace-nowrap cursor-pointer"
  
//   >
//     Send
//   </button>
// {/* COnfirm Modal */}
//   {showConfirmModal && (
//   <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-xl shadow-lg z-50 w-80">
//     <h2 className="text-lg font-semibold mb-4 text-center">
//       Confirm Your Bid
//     </h2>

//     <p className="text-center mb-4">
//       You are bidding: <span className="font-bold">${offer}</span>
//     </p>

//     <div className="flex justify-between gap-3">
//       <button
//         onClick={() => setShowConfirmModal(false)}
//         className="w-full bg-gray-400 text-white py-2 rounded"
//       >
//         Cancel
//       </button>

//       <button
//         onClick={handleConfirmBid}
//         className="w-full bg-green-600 text-white py-2 rounded"
//       >
//         Confirm
//       </button>
//     </div>
//   </div>
// )}

// </div>
//            <p
//                 onClick={() => setShowOfferModal(false)}
//                 className="mt-4 text-gray-200 ml-20  cursor-pointer"
//               >
//                  <FaChevronUp/>
//               </p>
//             </div>
//       )}

//   </div>
// )}
//          </div>



//         {/* CHAT */}
//         <div className="bg-gray-700 col-span-8 flex flex-col h-[80vh]">
          
//           <div className="border-b flex items-center justify-end gap-4 py-6 px-6  ">
//             <p className="text-xl font-bold text-[#769A7F]"><FaPhoneAlt /></p>
//             <p className="text-2xl font-bold border rounded-full text-[#769A7F]"> <IoMdInformation /></p>
//             <p className="text-xl font-bold text-[#769A7F]"><BsThreeDotsVertical /></p>

//           </div>

//           {/* MESSAGES */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-3">
//   {messages.map((msg, index) => {
//     const isMyMessage =
//       Number(msg.from_id) === Number(currentUserId);

//     return (
//       <div
//         key={msg.id || index}
//         className={`max-w-xs ${
//           isMyMessage ? "ml-auto text-right" : "mr-auto text-left"
//         }`}
//       >
//         {/* ✅ NAME */}
//         <p className="text-xs text-gray-300 mb-1">
//           {isMyMessage
//             ? msg.from_username || "You"
//             : msg.from_username}
//         </p>

//         {/* ✅ MESSAGE BOX */}
//         <div
//           className={`px-3 py-2 rounded-2xl text-white ${
//             isMyMessage ? "bg-green-500" : "bg-green-400"
//           }`}
//         >
//           {/* ✅ TEXT */}
//           {msg.message && <p>{msg.message}</p>}

//           {/* ✅ 🔥 IMAGE SHOW */}
//           {msg.file && msg.file.length > 0 && (
//             <div className="mt-2 flex flex-col gap-2">
//               {msg.file.map((img, i) => {
              

//                 return (
//                   <img
//                     key={i}
//                     src={img.image_url}
//                     alt="chat-img"
//                     className="w-40 rounded-lg border"
//                   />
//                 );
//               })}
//             </div>
//           )}

//           {/* ✅ TIME */}
//           <p className="text-[10px] text-gray-200 mt-1">
//             {formatChatTime(msg.timestamp || msg.created_at)}
//           </p>
//         </div>
//       </div>
//     );
//   })}

//   <div ref={messagesEndRef} />
// </div>

//           {/* INPUT + PREVIEW */}
//           <div className="p-3 border-t flex flex-col gap-2">

//             {/* PREVIEW */}
//             {selectedFiles.length > 0 && (
//               <div className="flex gap-2">
//                 {selectedFiles.map((item, index) => (
//                   <div key={index} className="relative">
//                     <img
//                       src={item.preview}
//                       className="w-20 h-20 rounded"
//                     />
//                     <button
//                       onClick={() => removeImage(index)}
//                       className="absolute top-0 right-0 bg-red-500 text-white text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* INPUT ROW */}
//             <div className="flex gap-2">
//               <button
//                 onClick={() => fileInputRef.current.click()}
//                 className="bg-gray-500 border px-3 text-white rounded"
//               >
//                 +
//               </button>

//               <input
//                 type="file"
//                 multiple
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 className="hidden"
//               />

//               <input
//                 value={messageInput}
//                 onChange={(e) => setMessageInput(e.target.value)}
//                  onKeyDown={(e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSend(); // 🔥 send message or file
//     }
//   }}
//                 className="flex-1 p-2 border border-white rounded outline-none"
//                 placeholder="Type message..."
//               />

//               <button
//                 onClick={handleSend}
//                 className="bg-green-500 px-4 text-white rounded"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <ProfileModal userId={selectedUserId} onClose={closeProfileModal} />
//       )}
//     </div>
//      </div>
//   );
// };

// export default Chat;





///////////////// test chat desgine///////////////////////////




// import { useEffect, useState, useRef } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import Loading from "../components/Loading";
// import { FaChevronDown, FaChevronUp, FaPaperPlane, FaTachometerAlt, FaPhoneAlt, FaImage, FaSmile, FaCheck, FaCheckDouble } from "react-icons/fa";
// import { BsThreeDotsVertical, BsArrowLeft } from "react-icons/bs";
// import { IoMdInformation } from "react-icons/io";
// import ProfileModal from "../components/ProfileModal";
// import {
//   connectSocket,
//   sendSocketMessage,
//   closeSocket,
// } from "../services/websocket";
// import { formatChatTime } from "../utility/utility";
// import chat_logo from "../../public/assets/logo/chat_page_logo.png";

// const Chat = () => {
//   const { chatId } = useParams();
//   const location = useLocation();
//   const { appraisal_id } = location.state || {};
//   const navigate = useNavigate();

//   const [appraisalsUserData, setAppraisalsUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");
//   const [showBidModal, setShowBidModal] = useState(true);
//   const [showOfferModal, setShowOfferModal] = useState(false);
//   const [offer, setOffer] = useState("");
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [showConfirmAcceptModal, setShowConfirmAcceptModal] = useState(false);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const fileInputRef = useRef(null);
//   const messagesEndRef = useRef(null);
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

//   const fetchDetails = async () => {
//     try {
//       const response = await fetch(`/api/vehicle/api/v1/appraisal/${appraisal_id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       const result = await response.json();
//       setAppraisalsUserData(result);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchMessages = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(`/api/communication/api/v1/messages/${chatId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await response.json();
//       setMessages(data.messages || []);
//     } catch (error) {
//       console.error("❌ Error fetching messages:", error);
//     }
//   };

//   useEffect(() => {
//     if (appraisal_id) fetchDetails();
//   }, [appraisal_id]);

//   useEffect(() => {
//     if (chatId) fetchMessages();
//   }, [chatId]);

//   const currentUserId = appraisalsUserData?.bid_details?.bidder_id;

//   useEffect(() => {
//     if (!chatId) return;
//     const token = localStorage.getItem("token");
//     connectSocket(chatId, token, (data) => {
//       if (data.type === "chat_message") {
//         const newMessage = {
//           id: data.id || Date.now(),
//           message: data.message,
//           from_id: data.from_id,
//           to_id: data.to_id,
//           chat: data.chat_id,
//           timestamp: data.timestamp || new Date().toISOString(),
//           from_username: data.from_username,
//         };
//         setMessages((prev) => {
//           const exists = prev.some((m) => m.id === newMessage.id);
//           if (exists) return prev;
//           return [...prev, newMessage];
//         });
//       }
//       if (data.type === "bid_update") {
//         fetchDetails();
//       }
//     });
//     return () => closeSocket();
//   }, [chatId]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     const previewFiles = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));
//     setSelectedFiles((prev) => [...prev, ...previewFiles]);
//   };

//   const removeImage = (index) => {
//     setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   const uploadImages = async () => {
//     if (selectedFiles.length === 0) return;
//     const formData = new FormData();
//     formData.append("chat_id", Number(chatId));
//     formData.append("to_id", appraisalsUserData?.appraisal_details?.appraised_by?.id);
//     selectedFiles.forEach((item) => {
//       formData.append("images", item.file);
//     });
//     try {
//       await fetch("/api/communication/api/v1/message/file", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         body: formData,
//       });
//       setSelectedFiles([]);
//       fetchMessages();
//     } catch (error) {
//       console.error("❌ Upload error:", error);
//     }
//   };

//   const handleSendMessage = () => {
//     if (!messageInput.trim()) return;
//     const payload = {
//       type: "chat_message",
//       data_type: "message",
//       message: messageInput,
//       from_id: appraisalsUserData?.bid_details?.bidder_id,
//       to_id: appraisalsUserData?.appraisal_details?.appraised_by?.id,
//       chat_id: Number(chatId),
//       file: null,
//     };
//     sendSocketMessage(payload);
//     setMessageInput("");
//   };

//   const handleSend = async () => {
//     if (selectedFiles.length > 0) await uploadImages();
//     if (messageInput.trim()) handleSendMessage();
//   };

//   const handleConfirmBid = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await fetch(`/api/vehicle/api/v1/appraisal/bid/${appraisal_id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ amount: Number(offer), currency: "USD" }),
//       });
//       await fetchDetails();
//       setShowConfirmModal(false);
//       setShowOfferModal(false);
//       const bidMessage = {
//         id: Date.now(),
//         message: `💰 BID PLACED: $${offer}`,
//         from_id: currentUserId,
//         timestamp: new Date().toISOString(),
//         from_username: "You",
//       };
//       setMessages((prev) => [...prev, bidMessage]);
//       setOffer("");
//     } catch (error) {
//       console.error("❌ Bid error:", error);
//     }
//   };

//   const handleAcceptBid = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await fetch(`/api/vehicle/api/v1/appraisal/bid/accept/${appraisal_id}`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
//       });
//       setShowConfirmAcceptModal(false);
//       await fetchDetails();
//       navigate("/");
//     } catch (error) {
//       console.error("❌ Accept error:", error);
//     }
//   };

//   const bids = appraisalsUserData?.bid_details?.bids || [];
//   const lastBid = bids[bids.length - 1];
//   const currentBidUserId = appraisalsUserData?.bid_details?.bidder_id;
//   const isLastBidMine = lastBid && Number(lastBid.bidder) === Number(currentBidUserId);

//   const openProfileModal = (userId) => {
//     setSelectedUserId(userId);
//     setShowModal(true);
//   };

//   const closeProfileModal = () => {
//     setShowModal(false);
//     setSelectedUserId(null);
//   };

//   if (loading) return <Loading />;

//   return (
//     <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center font-sans">
//       <div className="w-full max-w-9xl mx-auto h-screen flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-none md:rounded-2xl my-0 md:my-4 bg-gray-800/50 backdrop-blur-sm">
        
//         {/* Mobile Header with Back & Sidebar Toggle */}
//         <div className="md:hidden flex items-center justify-between p-4 bg-gray-900/90 border-b border-gray-700">
//           <button onClick={() => navigate(-1)} className="text-gray-300 hover:text-white">
//             <BsArrowLeft size={24} />
//           </button>
//           <div className="flex items-center gap-3">
//             <img
//               src={appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture 
//                 ? `http://bidbaj.com${appraisalsUserData.appraisal_details.appraised_by.profile_picture}` 
//                 : "../../public/assets/image/dummy_profile.jpg"}
//               alt="Profile"
//               className="w-10 h-10 rounded-full object-cover border border-gray-600"
//             />
//             <div>
//               <h3 className="text-white font-semibold text-sm">{appraisalsUserData?.appraisal_details?.appraised_by?.name}</h3>
//               <p className="text-gray-400 text-xs">${appraisalsUserData?.bid_details?.running_bid}</p>
//             </div>
//           </div>
//           <button onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="text-gray-300 hover:text-white">
//             <BsThreeDotsVertical size={22} />
//           </button>
//         </div>

//         {/* Bid Sidebar - Desktop always visible, Mobile conditionally */}
//         <div className={`
//           ${mobileSidebarOpen ? 'fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md p-4 overflow-y-auto' : 'hidden'} 
//           md:relative md:block md:w-80 md:bg-gray-900/60 md:backdrop-blur-sm md:border-r md:border-gray-700
//           flex flex-col transition-all duration-300
//         `}>
//           {mobileSidebarOpen && (
//             <div className="flex justify-end mb-4 md:hidden">
//               <button onClick={() => setMobileSidebarOpen(false)} className="text-white bg-gray-800 p-2 rounded-full">
//                 ✕
//               </button>
//             </div>
//           )}
          
//           <div className="p-4 border-b border-gray-700 flex justify-center">
//             <img src={chat_logo} alt="BIDBAJ" className="w-40 h-auto object-contain" />
//           </div>

//           <div className="p-4 flex items-center gap-3 border-b border-gray-700">
//             <img
//               onClick={() => openProfileModal(appraisalsUserData?.appraisal_details?.appraised_by?.id)}
//               src={appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture 
//                 ? `http://bidbaj.com${appraisalsUserData.appraisal_details.appraised_by.profile_picture}` 
//                 : "../../public/assets/image/dummy_profile.jpg"}
//               alt="Profile"
//               className="w-16 h-16 rounded-full cursor-pointer border-2 border-green-500 object-cover"
//             />
//             <div className="flex-1 cursor-pointer" onClick={() => setShowBidModal(!showBidModal)}>
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h2 className="text-lg font-bold text-white">{appraisalsUserData?.appraisal_details?.appraised_by?.name}</h2>
//                   <div className="flex items-center gap-1 text-gray-400 text-xs">
//                     <FaTachometerAlt size={12} />
//                     <span>{appraisalsUserData?.appraisal_details?.milage}</span>
//                   </div>
//                   <span className="text-gray-500 text-xs">{appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}</span>
//                 </div>
//                 <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${showBidModal ? "rotate-180" : ""}`} />
//               </div>
//             </div>
//           </div>

//           {showBidModal && (
//             <div className="p-4 flex-1">
//               <div className="bg-gray-800/80 rounded-2xl p-4 shadow-inner">
//                 <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Bid History</h3>
//                 <div className="space-y-2 max-h-32 overflow-y-auto custom-scroll">
//                   {appraisalsUserData?.bid_details?.bids.map((bidData, index) => (
//                     <div key={index} className="text-gray-300 text-sm border-b border-gray-700 py-1">{bidData.text}</div>
//                   ))}
//                 </div>
//                 <div className="mt-4 pt-3 border-t border-gray-700">
//                   <p className="text-2xl font-bold text-white">
//                     <span className="text-green-400 text-sm font-medium">{appraisalsUserData?.bid_details?.bid_name} : </span>
//                     ${appraisalsUserData?.bid_details?.running_bid}
//                   </p>
//                 </div>
//                 <div className="flex gap-3 mt-5">
//                   <button
//                     onClick={() => setShowConfirmAcceptModal(true)}
//                     disabled={isLastBidMine}
//                     className={`flex-1 py-2 rounded-full font-semibold transition-all ${
//                       isLastBidMine ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white shadow-md"
//                     }`}
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => setShowOfferModal(true)}
//                     className="flex-1 py-2 rounded-full font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-md transition-all"
//                   >
//                     Counter
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {showOfferModal && (
//             <div className="p-4 mt-auto border-t border-gray-700 bg-gray-800/50">
//               <div className="bg-gray-800 rounded-xl p-3">
//                 <h3 className="text-white font-medium mb-2">Enter Your Offer</h3>
//                 <div className="flex gap-2">
//                   <div className="relative flex-1">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
//                     <input
//                       type="number"
//                       placeholder="0.00"
//                       value={offer}
//                       onChange={(e) => setOffer(e.target.value)}
//                       className="w-full bg-gray-700 text-white rounded-full pl-8 pr-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
//                     />
//                   </div>
//                   <button
//                     onClick={() => {
//                       if (!offer) return;
//                       setShowConfirmModal(true);
//                     }}
//                     className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
//                   >
//                     Send
//                   </button>
//                 </div>
//                 <button onClick={() => setShowOfferModal(false)} className="mt-2 text-gray-400 text-sm flex items-center gap-1 mx-auto">
//                   <FaChevronUp /> collapse
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Chat Area */}
//         <div className="flex-1 flex flex-col bg-gray-800/30 relative">
//           {/* Desktop Header */}
//           <div className="hidden md:flex items-center justify-between p-4 bg-gray-900/70 backdrop-blur-sm border-b border-gray-700">
//             <div className="flex items-center gap-3">
//               <img
//                 src={appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture 
//                   ? `http://bidbaj.com${appraisalsUserData.appraisal_details.appraised_by.profile_picture}` 
//                   : "../../public/assets/image/dummy_profile.jpg"}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <h2 className="text-white font-semibold">{appraisalsUserData?.appraisal_details?.appraised_by?.name}</h2>
//                 <p className="text-green-400 text-xs">Online</p>
//               </div>
//             </div>
//             <div className="flex gap-5 text-gray-300">
//               <FaPhoneAlt className="cursor-pointer hover:text-green-400" size={20} />
//               <IoMdInformation className="cursor-pointer hover:text-green-400" size={22} />
//               <BsThreeDotsVertical className="cursor-pointer hover:text-green-400" size={20} />
//             </div>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scroll bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] bg-opacity-5">
//             {messages.map((msg, index) => {
//               const isMyMessage = Number(msg.from_id) === Number(currentUserId);
//               return (
//                 <div key={msg.id || index} className={`flex ${isMyMessage ? "justify-end" : "justify-start"}`}>
//                   <div className={`max-w-[75%] md:max-w-[60%] ${isMyMessage ? "bg-green-600" : "bg-gray-700"} rounded-2xl px-4 py-2 shadow-md`}>
//                     {!isMyMessage && (
//                       <p className="text-xs text-green-300 mb-1 font-medium">{msg.from_username}</p>
//                     )}
//                     {msg.message && <p className="text-white text-sm break-words">{msg.message}</p>}
//                     {msg.file && msg.file.length > 0 && (
//                       <div className="mt-2 flex flex-wrap gap-2">
//                         {msg.file.map((img, i) => (
//                           <img key={i} src={img.image_url} alt="chat-img" className="w-32 rounded-lg border border-gray-600" />
//                         ))}
//                       </div>
//                     )}
//                     <div className="flex items-center justify-end gap-1 mt-1">
//                       <span className="text-[10px] text-gray-300">{formatChatTime(msg.timestamp || msg.created_at)}</span>
//                       {isMyMessage && <FaCheck className="text-[10px] text-gray-300" />}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-3 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700">
//             {selectedFiles.length > 0 && (
//               <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
//                 {selectedFiles.map((item, index) => (
//                   <div key={index} className="relative flex-shrink-0">
//                     <img src={item.preview} className="w-16 h-16 rounded-lg object-cover" alt="preview" />
//                     <button onClick={() => removeImage(index)} className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">✕</button>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div className="flex items-center gap-2">
//               <button onClick={() => fileInputRef.current.click()} className="text-gray-400 hover:text-green-400 transition p-2">
//                 <FaImage size={22} />
//               </button>
//               <input type="file" multiple ref={fileInputRef} onChange={handleFileChange} className="hidden" />
//               <input
//                 value={messageInput}
//                 onChange={(e) => setMessageInput(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     e.preventDefault();
//                     handleSend();
//                   }
//                 }}
//                 className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
//                 placeholder="Type a message..."
//               />
//               <button onClick={handleSend} className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-all shadow-lg">
//                 <FaPaperPlane size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {showModal && <ProfileModal userId={selectedUserId} onClose={closeProfileModal} />}
      
//       {showConfirmAcceptModal && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-700">
//             <h3 className="text-xl font-semibold text-white mb-2">Confirm Accept Bid</h3>
//             <p className="text-gray-300 mb-6">Are you sure you want to accept this bid?</p>
//             <div className="flex gap-3">
//               <button onClick={() => setShowConfirmAcceptModal(false)} className="flex-1 py-2 rounded-full bg-gray-700 text-white">Cancel</button>
//               <button onClick={handleAcceptBid} className="flex-1 py-2 rounded-full bg-green-600 text-white">Confirm</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showConfirmModal && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-700">
//             <h3 className="text-xl font-semibold text-white mb-2">Confirm Your Bid</h3>
//             <p className="text-gray-300 mb-4">You are bidding: <span className="text-green-400 font-bold">${offer}</span></p>
//             <div className="flex gap-3">
//               <button onClick={() => setShowConfirmModal(false)} className="flex-1 py-2 rounded-full bg-gray-700 text-white">Cancel</button>
//               <button onClick={handleConfirmBid} className="flex-1 py-2 rounded-full bg-green-600 text-white">Confirm</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chat;














///============================================= new desgine =====================================




















// import {useEffect,useState, useRef } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import Loading from "../components/Loading";
// import {
//   FaChevronDown,
//   FaChevronUp,
//   FaPaperPlane,
//   FaTachometerAlt,
//   FaPhoneAlt,
//   FaImage,
//   FaCheck,
// } from "react-icons/fa";
// import { BsThreeDotsVertical, BsArrowLeft,  BsMenuApp } from "react-icons/bs";
// import { IoMdInformation } from "react-icons/io";
// import ProfileModal from "../components/ProfileModal";
// import {
//   connectSocket,
//   sendSocketMessage,
//   closeSocket,
// } from "../services/websocket";
// import { formatChatTime } from "../utility/utility";
// import chat_logo from "../../public/assets/logo/chat_page_logo.png";

// const Chat = () => {
//   const { chatId } = useParams();
//   const location = useLocation();
//   const { appraisal_id } = location.state || {};
//   const navigate = useNavigate(); 

//   const [appraisalsUserData, setAppraisalsUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");

//   //============= BID MODAL ============
//   const [showBidModal, setShowBidModal] = useState(true);

//   // ======= offer modal =========
//   const [showOfferModal, setShowOfferModal] = useState(false);
//   const [offer, setOffer] = useState("");

//   // ============== confirmatoin modals ==============
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [showConfirmAcceptModal, setShowConfirmAcceptModal] = useState(false);
  
//   // ============= File upload state =====
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   //===========  BID History modal ======
  

//   //============Refs==============
//   const fileInputRef = useRef(null);
//   const messagesEndRef = useRef(null);

//   //===================== Mobile sidebar ===========
//   const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);




//   // =================== Fetch Appraisal Dataa =============

//   const fetchDetails = async () => {
//     try {
//       const response = await fetch(
//         `/api/vehicle/api/v1/appraisal/${appraisal_id}`,
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       const result = await response.json();
//       setAppraisalsUserData(result);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =================== Fetch Messages =============

//   const fetchMessages = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         `/api/communication/api/v1/messages/${chatId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       const data = await response.json();
//       setMessages(data.messages || []);
//     } catch (error) {
//       console.error("❌ Error fetching messages:", error);
//     }
//   };

//   useEffect(() => {
//     if (appraisal_id) fetchDetails();
//   }, [appraisal_id]);

//   useEffect(() => {
//     if (chatId) fetchMessages();
//   }, [chatId]);

//   const currentUserId = appraisalsUserData?.bid_details?.bidder_id;

//   console.log("appraisalsUserData", appraisalsUserData);
//   console.log("messages", messages);

//   // ========  WEBSOCKET CONNECTION =====


//   useEffect(() => {
//     if (!chatId) return;
//     const token = localStorage.getItem("token");
//     connectSocket(chatId, token, (data) => {
//       if (data.type === "chat_message") {
//         const newMessage = {
//           id: data.id || Date.now(),
//           message: data.message,
//           from_id: data.from_id,
//           to_id: data.to_id,
//           chat: data.chat_id,
//           timestamp: data.timestamp || new Date().toISOString(),
//           from_username: data.from_username,
         
//         };
//         setMessages((prev) => {
//           const exists = prev.some((m) => m.id === newMessage.id);
//           if (exists) return prev;
//           return [...prev, newMessage];
//         });
//       }
//        // if data type is bid update then fetch the details to get the updated bid info and show it in the ui
//       if (data.type === "bid_update") {
//         fetchDetails();
//       }
//     });
//     return () => closeSocket();
//   }, [chatId]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   console.log("wbsocket messages data",messages)

//   // ============== File upload handlers ==============

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     const previewFiles = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));
//     setSelectedFiles((prev) => [...prev, ...previewFiles]);
//   };

//   const removeImage = (index) => {
//     setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   const uploadImages = async () => {
//     if (selectedFiles.length === 0) return;
//     const formData = new FormData();
//     formData.append("chat_id", Number(chatId));
//     formData.append(
//       "to_id",
//       appraisalsUserData?.appraisal_details?.appraised_by?.id
//     );
//     selectedFiles.forEach((item) => {
//       formData.append("images", item.file);
//     });

//     // ==== file api call ===
//     try {
//       await fetch("/api/communication/api/v1/message/file", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         body: formData,
//       });
//       setSelectedFiles([]);
//       fetchMessages();
//     } catch (error) {
//       console.error("❌ Upload error:", error);
//     }
//   };

//   const handleSendMessage = () => {
//     if (!messageInput.trim()) return;
//     const payload = {
//       type: "chat_message",
//       data_type: "message",
//       message: messageInput,
//       from_id: appraisalsUserData?.bid_details?.bidder_id,
//       to_id: appraisalsUserData?.appraisal_details?.appraised_by?.id,
//       chat_id: Number(chatId),
//       file: null,
//     };
//     sendSocketMessage(payload);
//     setMessageInput("");
//   };

//   const handleSend = async () => {
//     if (selectedFiles.length > 0) await uploadImages();
//     if (messageInput.trim()) handleSendMessage();
//   };

//   // ================== Confirm Bid Handler ===============

//   const handleConfirmBid = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await fetch(`/api/vehicle/api/v1/appraisal/bid/${appraisal_id}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ amount: Number(offer), currency: "USD" }),
//       });
//       await fetchDetails();
//       setShowConfirmModal(false);
//       setShowOfferModal(false);
//       const bidMessage = {
//         id: Date.now(),
//         message: `💰 BID PLACED: $${offer}`,
//         from_id: currentUserId,
//         timestamp: new Date().toISOString(),
//         from_username: "You",
//       };
//       setMessages((prev) => [...prev, bidMessage]);
//       setOffer("");
//     } catch (error) {
//       console.error("❌ Bid error:", error);
//     }
//   };

//   console.log("data from bid post api",messages)


// // ================= Accept Bid Handler ===============

//   const handleAcceptBid = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await fetch(`/api/vehicle/api/v1/appraisal/bid/accept/${appraisal_id}`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setShowConfirmAcceptModal(false);
//       await fetchDetails();
//       navigate("/");
//     } catch (error) {
//       console.error("❌ Accept error:", error);
//     }
//   };

//   const bids = appraisalsUserData?.bid_details?.bids || [];
//   const lastBid = bids[bids.length - 1];
//   const currentBidUserId = appraisalsUserData?.bid_details?.bidder_id;
//   const isLastBidMine = lastBid && Number(lastBid.bidder) === Number(currentBidUserId);

//   const openProfileModal = (userId) => {
//     setSelectedUserId(userId);
//     setShowModal(true);
//   };

//   const closeProfileModal = () => {
//     setShowModal(false);
//     setSelectedUserId(null);
//   };

//   if (loading) return <Loading />;

//   return (
//     <div className="bg-gray-900 h-dvh flex flex-col overflow-hidden">
//       {/* Main container - full height on all devices */}
//       <div className="flex flex-1 min-h-0 w-full max-w-9xl mx-auto md:my-2 md:rounded-2xl md:overflow-hidden bg-gray-800 shadow-2xl">
        
//         {/* Bid Sidebar - Overlay on mobile, inline on desktop */}
//         <div
//           className={`
//             fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md transition-transform duration-300 transform
//             md:relative md:z-auto md:translate-x-0 md:w-100 md:bg-gray-900/60 md:backdrop-blur-sm md:border-r md:border-gray-700
//             flex flex-col
//             ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           `}
//         >
//           <div className="flex justify-between items-center p-4 border-b border-gray-700 md:hidden">
//             <img src={chat_logo} alt="BIDBAJ" className="w-32 h-auto" />
//             <button
//               onClick={() => setMobileSidebarOpen(false)}
//               className="text-white bg-gray-800 p-2 rounded-full"
//             >
//               ✕
//             </button>
//           </div>
//                     {/*  BIDBAJ LOGO */}
//           <div className="p-3 border-b border-gray-700 hidden md:flex justify-center">
//             <img src={chat_logo} alt="BIDBAJ" className="w-40 h-auto" />
//           </div>

//                   {/* PROFILE DIV */}
//           <div className="p-4 flex items-center gap-3 border-b border-gray-700">
//             <img
//               onClick={() =>
//                 openProfileModal(appraisalsUserData?.appraisal_details?.appraised_by?.id)
//               }
//               src={
//                 appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture
//                   ? `http://bidbaj.com${appraisalsUserData.appraisal_details.appraised_by.profile_picture}`
//                   : "../../public/assets/image/dummy_profile.jpg"
//               }
//               alt="Profile"
//               className="w-14 h-14 rounded-full cursor-pointer border-2 border-green-500 object-cover"
//             />
//             <div
//               className="flex-1 cursor-pointer"
//               onClick={() => setShowBidModal(!showBidModal)}
//             >
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h2 className="text-md font-bold text-white">
//                     {appraisalsUserData?.appraisal_details?.appraised_by?.name}
//                   </h2>
//                   <div className="flex items-center gap-1 text-gray-400 text-xs">
//                     <FaTachometerAlt size={12} />
//                     <span>{appraisalsUserData?.appraisal_details?.milage}</span>
//                   </div>
//                   <span className="text-gray-500 text-xs">
//                     {appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}
//                   </span>
//                 </div>
//                 <FaChevronDown
//                   className={`text-gray-400 transition-transform duration-300 ${
//                     showBidModal ? "rotate-180" : ""
//                   }`}
//                 />
//               </div>
//             </div>
//           </div>

//               {/* BID HISTORY AND BID_MODAL */}
 
//           {showBidModal && (
//             <div className="p-4 flex-1 overflow-y-auto">
//               <div className="bg-gray-800/80 rounded-2xl p-4">
//                 <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
//                   Bid History
//                 </h3>
//                 <div className="space-y-2 max-h-32 overflow-y-auto custom-scroll">
//                   {appraisalsUserData?.bid_details?.bids.map((bidData, index) => (
//                     <div
//                       key={index}
//                       className="text-gray-300 text-sm border-b border-gray-700 py-1"
//                     >
//                       {bidData.text}
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="mt-4 pt-3 border-t border-gray-700">
//                   {/* BIDDER  BID AND NAME */}
//                   <p className="text-xl font-bold text-white">
//                     <span className="text-green-400 text-sm font-medium">
//                       {appraisalsUserData?.bid_details?.bid_name} :{" "}
//                     </span>
//                     ${appraisalsUserData?.bid_details?.running_bid}
//                   </p>
//                 </div>

//                 {/* ACCEPT MODAL  */}
//                 <div className="flex gap-3 mt-5">
//                   <button
//                     onClick={() => setShowConfirmAcceptModal(true)}
//                     disabled={isLastBidMine}
//                     className={`flex-1 py-2 rounded-full font-semibold transition-all ${
//                       isLastBidMine
//                         ? "bg-gray-600 text-gray-400 cursor-not-allowed"
//                         : "bg-green-600 hover:bg-green-700 text-white shadow-md"
//                     }`}
//                   >
//                     Accept
//                   </button>

//                   {/* COUNTER OFFER MODAL */}
//                   <button
//                     onClick={() => setShowOfferModal(true)}
//                     className="flex-1 py-2 rounded-full font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-md transition-all"
//                   >
//                     Counter
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {showOfferModal && (
//             <div className="p-4 mt-auto border-t border-gray-700 bg-gray-800/50">
//               <div className="bg-gray-800 rounded-xl p-3">
//                 <h3 className="text-white font-medium mb-2">Enter Your Offer</h3>
//                 <div className="flex gap-2">
//                   <div className="relative flex-1">
//                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//                       $
//                     </span>
//                     <input
//                       type="number"
//                       placeholder="0.00"
//                       value={offer}
//                       onChange={(e) => setOffer(e.target.value)}
//                       className="w-full bg-gray-700 text-white rounded-full pl-8 pr-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
//                     />
//                   </div>
//                   <button
//                     onClick={() => {
//                       if (!offer) return;
//                       setShowConfirmModal(true);
//                     }}
//                     className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
//                   >
//                     Send
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => setShowOfferModal(false)}
//                   className="mt-2 text-gray-400 text-sm flex items-center gap-1 mx-auto"
//                 >
//                   <FaChevronUp /> collapse
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Chat Area */}
//         <div className="flex-1 flex flex-col min-h-0 bg-gray-800/30 relative">
//           {/* Mobile Header */}
//           <div className="md:hidden flex items-center justify-between p-3 bg-gray-900/90 border-b border-gray-700">
//             <button onClick={() => navigate(-1)} className="text-gray-300">
//               <BsArrowLeft size={24} />
//             </button>
//             <div className="flex items-center gap-2">
//               <img
//                 src={
//                   appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture
//                     ? `http://bidbaj.com${appraisalsUserData.appraisal_details.appraised_by.profile_picture}`
//                     : "../../public/assets/image/dummy_profile.jpg"
//                 }
//                 alt="Profile"
//                 className="w-8 h-8 rounded-full object-cover border border-gray-600"
//               />
//               <div>
//                 <h3 className="text-white font-semibold text-sm">
//                   {appraisalsUserData?.appraisal_details?.appraised_by?.name}
//                 </h3>
//                 <p className="text-green-400 text-xs">
//                   ${appraisalsUserData?.bid_details?.running_bid}
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={() => setMobileSidebarOpen(true)}
//               className="text-gray-300"
//             >
//               <BsMenuApp size={22} />
//             </button>
//           </div>

//           {/* Desktop Header */}
//           <div className="hidden md:flex items-center justify-between p-4 bg-gray-900/70 backdrop-blur-sm border-b border-gray-700">
//             <div className="flex items-center gap-3">
//               <img
//                 src={
//                   appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture
//                     ? `http://bidbaj.com${appraisalsUserData.appraisal_details.appraised_by.profile_picture}`
//                     : "../../public/assets/image/dummy_profile.jpg"
//                 }
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <h2 className="text-white font-semibold">
//                   {appraisalsUserData?.appraisal_details?.appraised_by?.name}
//                 </h2>
//                 <p className="text-green-400 text-xs">Online</p>
//               </div>
//             </div>
//             <div className="flex gap-5 text-gray-300">
//               <FaPhoneAlt className="cursor-pointer hover:text-green-400" size={20} />
//               <IoMdInformation className="cursor-pointer hover:text-green-400" size={22} />
//               <BsThreeDotsVertical className="cursor-pointer hover:text-green-400" size={20} />
//             </div>
//           </div>

//           {/* Messages */}
           
//            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scroll bg-[url('/assets/logo/navbar_logo.jpg')]  bg-no-repeat bg-center">
          
          
//             {messages.map((msg, index) => {
//               const isMyMessage = Number(msg.from_id) === Number(currentUserId);
//               return (
//                 <div
//                   key={msg.id || index}
//                   className={`flex ${isMyMessage ? "justify-end" : "justify-start"}`}
//                 >
                  
//                   <div
//                     className={`max-w-[85%] md:max-w-[70%] ${
//                       isMyMessage ? "bg-gray-600" : "bg-gray-700"
//                     } rounded-2xl px-3 py-2 shadow-md`}
//                   >
//                      {/* ✅ NAME */}
//         <p className="text-xs text-green-300 mb-1 font-medium">
//           {isMyMessage
//             ? msg.from_username || "You"
//             : msg.from_username}
//          </p>
//          {/* name */}

//                  {/* name (only one  was showing) */}

//                     {/* {!isMyMessage && (
//                       <p className="text-xs text-green-300 mb-1 font-medium">
//                         {  msg.from_username }
//                       </p>
//                     )} */}


//                     {msg.message && (
//                       <p className="text-white text-sm break-words whitespace-pre-wrap">
//                         {msg.message}
//                       </p>
//                     )}
//                     {msg.file && msg.file.length > 0 && (
//                       <div className="mt-2 flex flex-wrap gap-1">
//                         {msg.file.map((img, i) => (
//                           <img
//                             key={i}
//                             src={img.image_url}
//                             alt="chat-img"
//                             className="w-28 rounded-lg border border-gray-600"
//                           />
//                         ))}
//                       </div>
//                     )}
//                     <div className="flex items-center justify-end gap-1 mt-1">
//                       <span className="text-[10px] text-gray-300">
//                         {formatChatTime(msg.timestamp || msg.created_at)}
//                       </span>
//                       {isMyMessage && <FaCheck className="text-[10px] text-gray-300" />}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-2 md:p-3 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700">
//             {selectedFiles.length > 0 && (
//               <div className="flex gap-2 mb-2 overflow-x-auto pb-2">
//                 {selectedFiles.map((item, index) => (
//                   <div key={index} className="relative flex-shrink-0">
//                     <img
//                       src={item.preview}
//                       className="w-14 h-14 rounded-lg object-cover"
//                       alt="preview"
//                     />
//                     <button
//                       onClick={() => removeImage(index)}
//                       className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => fileInputRef.current.click()}
//                 className="text-gray-400 hover:text-green-400 transition p-2"
//               >
//                 <FaImage size={22} />
//               </button>
//               <input
//                 type="file"
//                 multiple
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//               <input
//                 value={messageInput}
//                 onChange={(e) => setMessageInput(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     e.preventDefault();
//                     handleSend();
//                   }
//                 }}
//                 className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm"
//                 placeholder="Type a message..."
//               />
//               <button
//                 onClick={handleSend}
//                 className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-all shadow-lg"
//               >
//                 <FaPaperPlane size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {showModal && (
//         <ProfileModal userId={selectedUserId} onClose={closeProfileModal} />
//       )}

//       {showConfirmAcceptModal && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-700">
//             <h3 className="text-xl font-semibold text-white mb-2">
//               Confirm Accept Bid
//             </h3>
//             <p className="text-gray-300 mb-6">
//               Are you sure you want to accept this bid?
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowConfirmAcceptModal(false)}
//                 className="flex-1 py-2 rounded-full bg-gray-700 text-white"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAcceptBid}
//                 className="flex-1 py-2 rounded-full bg-green-600 text-white"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showConfirmModal && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-700">
//             <h3 className="text-xl font-semibold text-white mb-2">
//               Confirm Your Bid
//             </h3>
//             <p className="text-gray-300 mb-4">
//               You are bidding:{" "}
//               <span className="text-green-400 font-bold">${offer}</span>
//             </p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowConfirmModal(false)}
//                 className="flex-1 py-2 rounded-full bg-gray-700 text-white"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmBid}
//                 className="flex-1 py-2 rounded-full bg-green-600 text-white"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chat;

























/////////// Perfect before Accept button //////////////////







import {useEffect,useState, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import {
  FaChevronDown,
  FaChevronUp,
  FaPaperPlane,
  FaTachometerAlt,
  FaPhoneAlt,
  FaImage,
  FaCheck,
} from "react-icons/fa";
import { BsThreeDotsVertical, BsArrowLeft,  BsMenuApp } from "react-icons/bs";
import { IoMdInformation } from "react-icons/io";
import ProfileModal from "../components/ProfileModal";
import {
  connectSocket,
  sendSocketMessage,
  closeSocket,
} from "../services/websocket";
import { formatChatTime, formatMessageDate } from "../utility/utility";
import chat_logo from "../../public/assets/logo/chat_page_logo.png";

const Chat = () => {
  const { chatId } = useParams();
  const location = useLocation();
  const { appraisal_id } = location.state || {};
  const navigate = useNavigate(); 

  const [appraisalsUserData, setAppraisalsUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  //============= BID MODAL ============
  const [showBidModal, setShowBidModal] = useState(true);

  // ======= offer modal =========
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [offer, setOffer] = useState("");

  // ============== confirmatoin modals ==============
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showConfirmAcceptModal, setShowConfirmAcceptModal] = useState(false);
  
  // ============= File upload state =====
  const [selectedFiles, setSelectedFiles] = useState([]);

  //===========  ACCEPT  DEAAL MODAL======
  const [bidAccepted, setBidAccepted] = useState(false);
const [acceptedBidInfo, setAcceptedBidInfo] = useState(null);


// ============ Image popup state =======
const [previewImage, setPreviewImage] = useState(null);
  

  //============Refs==============
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  //===================== Mobile sidebar ===========
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);




  // =================== Fetch Appraisal Dataa =============

  const fetchDetails = async () => {
    // try {
    //   const response = await fetch(
    //     `/api/vehicle/api/v1/appraisal/${appraisal_id}`,
    //     {
    //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    //     }
    //   );
    //   const result = await response.json();
    //   setAppraisalsUserData(result);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setLoading(false);
    // }

 try {
    const response = await fetch(
      `/api/vehicle/api/v1/appraisal/${appraisal_id}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    const result = await response.json();
    setAppraisalsUserData(result);

    console.log("Fetched appraisal details for api accept:", result);

    // ✅ MAIN FIX: read from backend
    if (result?.bid_details?.bid_accept_status === true) {
      setBidAccepted(true);

      setAcceptedBidInfo({
        amount: result?.bid_details?.running_bid,
        time: new Date().toLocaleTimeString(), // or backend দিলে better
        date: new Date().toLocaleDateString(),
      });
     }

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }

  };

  
  console.log("appraisalsUserData for finding bid accept status", appraisalsUserData);
 
  // =================== Fetch Messages =============

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `/api/communication/api/v1/messages/${chatId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error("❌ Error fetching messages:", error);
    }
  };

  useEffect(() => {
    if (appraisal_id) fetchDetails();
  }, [appraisal_id]);

  useEffect(() => {
    if (chatId) fetchMessages();
  }, [chatId]);

  const currentUserId = appraisalsUserData?.bid_details?.bidder_id;

  console.log("appraisalsUserData", appraisalsUserData);
  console.log("messages", messages);

  // ========  WEBSOCKET CONNECTION =====

  useEffect(() => {
    if (!chatId) return;
    const token = localStorage.getItem("token");
    connectSocket(chatId, token, (data) => {
      console.log("WebSocket data received:", data);
      if (data.type === "chat_message" && data.data_type !== "bid") {
        const newMessage = {
          id: data.id || Date.now(),
          message: data.message,
          from_id: data.from_id,
          to_id: data.to_id,
          chat: data.chat_id,
          timestamp: data.timestamp || new Date().toISOString(),
          from_username: data.from_username,
         
        };
        setMessages((prev) => {
          const exists = prev.some((m) => m.id === newMessage.id);
          if (exists) return prev;
          return [...prev, newMessage];
        });
      }
       // if data type is bid update then fetch the details to get the updated bid info and show it in the ui
      if (data.data_type === "bid") {
         fetchDetails();
      }
    });
    return () => closeSocket();
  }, [chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.log("wbsocket messages data",messages)

  // ============== File upload handlers ==============

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const previewFiles = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedFiles((prev) => [...prev, ...previewFiles]);
  };

  const removeImage = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImages = async () => {
    if (selectedFiles.length === 0) return;
    const formData = new FormData();
    formData.append("chat_id", Number(chatId));
    formData.append(
      "to_id",
      appraisalsUserData?.appraisal_details?.appraised_by?.id
    );
    selectedFiles.forEach((item) => {
      formData.append("images", item.file);
    });

    // ==== file api call ===
    try {
      await fetch("/api/communication/api/v1/message/file", {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: formData,
      });
      setSelectedFiles([]);
      fetchMessages();
    } catch (error) {
      console.error("❌ Upload error:", error);
    }
  };

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
    sendSocketMessage(payload);
    setMessageInput("");
  };

  const handleSend = async () => {
    if (selectedFiles.length > 0) await uploadImages();
    if (messageInput.trim()) handleSendMessage();
  };

  // ================== Confirm Bid Handler ===============

  const handleConfirmBid = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`/api/vehicle/api/v1/appraisal/bid/${appraisal_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: Number(offer), currency: "USD" }),
      });
 

      setOffer("");
        // ✅ 1. CLOSE MODAL FIRST
    setShowConfirmModal(false);
    setShowOfferModal(false);

    // ✅ 2. WAIT FOR UI TO UPDATE THEN FETCH
    setTimeout(async () => {
      await fetchDetails();
    }, 10);

    } catch (error) {
      console.error("❌ Bid error:", error);
    }
  };

  console.log("data from bid post api",messages)


// ================= Accept Bid Handler ===============

  const handleAcceptBid = async () => {
    // try {
    //   const token = localStorage.getItem("token");
    //   await fetch(`/api/vehicle/api/v1/appraisal/bid/accept/${appraisal_id}`, {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   setShowConfirmAcceptModal(false);
    //   await fetchDetails();
      
    // } catch (error) {
    //   console.error("❌ Accept error:", error);
    // }


     try {
    const token = localStorage.getItem("token");

    const res = await fetch(
      `/api/vehicle/api/v1/appraisal/bid/accept/${appraisal_id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

     const data = await res.json(); // 👈 important if backend returns accepted bid info

                  //    // ✅ PRINT FULL RESPONSE
    console.log("✅ ACCEPT API RESPONSE:", data);

    setShowConfirmAcceptModal(false);

    // ✅ 1. Mark bid accepted
    setBidAccepted(true);

    // ✅ 2. Store accepted bid info (fallback if API doesn’t return, use last bid)
    // const bids = appraisalsUserData?.bid_details?.bids || [];
    // const lastBid = bids[bids.length - 1];

    setAcceptedBidInfo({
       amount: data?.amount || lastBid?.amount,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    });

    // ✅ 3. Refresh data
    await fetchDetails();
  } catch (error) {
    console.error("❌ Accept error:", error);
  }



  // try {
  //   const token = localStorage.getItem("token");

  //   const res = await fetch(
  //     `/api/vehicle/api/v1/appraisal/bid/accept/${appraisal_id}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   const data = await res.json();

  //    // ✅ PRINT FULL RESPONSE
  //   console.log("✅ ACCEPT API RESPONSE:", data);

  //   setShowConfirmAcceptModal(false);

  //   // ✅ instant UI update
  //   if (data?.bid_accept_status===true) {
  //     setBidAccepted(true);

  //     setAcceptedBidInfo({
  //       amount: appraisalsUserData?.bid_details?.running_bid,
  //       time: new Date().toLocaleTimeString(),
  //       date: new Date().toLocaleDateString(),
  //     });
  //   }

  //   // ✅ sync with backend
  //   await fetchDetails();

  // } catch (error) {
  //   console.error("❌ Accept error:", error);
  // }

  };



  

 console.log("messages i found", messages);
  //fid last bid is mine or not
  const bids = appraisalsUserData?.bid_details?.bids || [];
  const lastBid = bids[bids.length - 1];
  const currentBidUserId = appraisalsUserData?.bid_details?.seller_id;
  const isLastBidMine = lastBid && Number(lastBid.bidder) === Number(currentBidUserId);

  console.log("current bidder id", currentBidUserId);
  console.log(" last bidder id", lastBid.bidder);


  //MODAL HANDLERS

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
    <div className="bg-gray-900 h-dvh flex flex-col overflow-hidden">
      {/* Main container - full height on all devices */}
      <div className="flex flex-1 min-h-0 w-full max-w-9xl mx-auto md:my-2 md:rounded-2xl md:overflow-hidden bg-gray-800 shadow-2xl">
        
        {/* Bid Sidebar - Overlay on mobile, inline on desktop */}
        <div
          className={`
            fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md transition-transform duration-300 transform
            md:relative md:z-auto md:translate-x-0 md:w-100 md:bg-gray-900/60 md:backdrop-blur-sm md:border-r md:border-gray-700
            flex flex-col
            ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700 md:hidden">
            <img src={chat_logo} alt="BIDBAJ" className="w-32 h-auto" />
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="text-white bg-gray-800 p-2 rounded-full"
            >
              ✕
            </button>
          </div>
                    {/*  BIDBAJ LOGO */}
          <div className="p-3 border-b border-gray-700 hidden md:flex justify-center">
            <img src={chat_logo} alt="BIDBAJ" className="w-40 h-auto" />
          </div>

                  {/* PROFILE DIV */}
          <div className="p-4 flex items-center gap-3 border-b border-gray-700">
            <img
              onClick={() =>
                openProfileModal(appraisalsUserData?.appraisal_details?.appraised_by?.id)
              }
              src={
                appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture
                  ? `http://bidbaj.com${appraisalsUserData.appraisal_details.appraised_by.profile_picture}`
                  : "../../public/assets/image/dummy_profile.jpg"
              }
              alt="Profile"
              className="w-14 h-14 rounded-full cursor-pointer border-2 border-green-500 object-cover"
            />
            <div
              className="flex-1 cursor-pointer"
              onClick={() => setShowBidModal(!showBidModal)}
            >
              <div className="flex justify-between items-center">
                <div>

                  {/* <h2 className="text-md font-bold text-white">
                    {appraisalsUserData?.appraisal_details?.appraised_by?.name}
                  </h2> */}
                   <span className="text-md font-bold text-white">
                    {appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}
                  </span>


                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <FaTachometerAlt size={12} />
                    <span>{appraisalsUserData?.appraisal_details?.milage}</span>
                  </div>
                  <span className="text-gray-500 text-xs">
                    created at: {formatMessageDate(appraisalsUserData?.appraisal_details?.created_at)}
                  </span>
                </div>
                <FaChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${
                    showBidModal ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>

              {/* BID HISTORY AND BID_MODAL */}
 
          {showBidModal && (
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="bg-gray-800/80 rounded-2xl p-4">
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                  Bid History
                </h3>
                <div className="space-y-2 max-h-32 overflow-y-auto custom-scroll">
                  {appraisalsUserData?.bid_details?.bids.map((bidData, index) => (
                    <div
                      key={index}
                      className="text-gray-300 text-sm border-b border-gray-700 py-1"
                    >
                      {bidData.text}
                    </div>
                  ))}
                </div>


                {bidAccepted && acceptedBidInfo && (
  <div className="mt-4 p-3 bg-green-900/30 border border-green-500 rounded-xl">
    <p className="text-green-400 font-semibold">
      ✔ Bid Accepted: ${appraisalsUserData?.bid_details?.running_bid}
    </p>
    <p className="text-gray-300 text-sm">
      Time: {acceptedBidInfo.time}
    </p>
    <p className="text-gray-300 text-sm">
      Date: {acceptedBidInfo.date}
    </p>
  </div>
)}

                {!bidAccepted && (



                
                <div className="mt-4 pt-3 border-t border-gray-700">
                  {/* BIDDER  BID AND NAME */}
                  <p className="text-xl font-bold text-white">
                    {
                      isLastBidMine  ? <span className="text-green-400 text-sm font-medium">
                      {appraisalsUserData?.bid_details?.bid_name} :{" "}
                    </span>:
                    <span className="text-blue-400 text-sm font-medium">
                      {appraisalsUserData?.bid_details?.bid_name} :{" "}
                    </span>
                    }
                    ${appraisalsUserData?.bid_details?.running_bid}
                  </p>
                </div>



                )}

                {/* ACCEPT MODAL  */}
                {!bidAccepted && (
                  
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => setShowConfirmAcceptModal(true)}
                    disabled={isLastBidMine}
                    className={`flex-1 py-2 rounded-full font-semibold transition-all ${
                      isLastBidMine
                        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 text-white shadow-md"
                    }`}
                  >
                    ACCEPT
                  </button>

                  {/* COUNTER OFFER MODAL */}
                  <button
                    onClick={() => setShowOfferModal(true)}
                    className="flex-1 py-2 rounded-full font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-md transition-all"
                  >
                    {
                      bids.length>0 ? "COUNTER" : "BID"
                    }
                  </button>
                </div>



                )}
              </div>
            </div>
          )}

          {showOfferModal && (
            <div className="p-4 mt-auto border-t border-gray-700 bg-gray-800/50">
              <div className="bg-gray-800 rounded-xl p-3">
                <h3 className="text-white font-medium mb-2">Enter Your Offer</h3>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={offer}
                      onChange={(e) => setOffer(e.target.value)}
                      className="w-full bg-gray-700 text-white rounded-full pl-8 pr-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <button
                    onClick={() => {
                      if (!offer) return;
                      setShowConfirmModal(true);
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                  >
                    Send
                  </button>
                </div>
                <button
                  onClick={() => setShowOfferModal(false)}
                  className="mt-2 text-gray-400 text-sm flex items-center gap-1 mx-auto"
                >
                  <FaChevronUp /> collapse
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col min-h-0 bg-gray-800/30 relative">
          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between p-3 bg-gray-900/90 border-b border-gray-700">
            <button onClick={() => navigate(-1)} className="text-gray-300">
              <BsArrowLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              <img
                src={
                  appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture
                    ? `http://bidbaj.com${appraisalsUserData.appraisal_details.appraised_by.profile_picture}`
                    : "../../public/assets/image/dummy_profile.jpg"
                }
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border border-gray-600"
              />
              <div>
                <h3 className="text-white font-semibold text-sm">
                  {appraisalsUserData?.appraisal_details?.appraised_by?.name}
                </h3>
                <p className="text-green-400 text-xs">
                  ${appraisalsUserData?.bid_details?.running_bid}
                </p>
              </div>
            </div>
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="text-gray-300"
            >
              <BsMenuApp size={22} />
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between p-4 bg-gray-900/70 backdrop-blur-sm border-b border-gray-700">
            <div className="flex items-center gap-3">
              <img
                src={
                  appraisalsUserData?.appraisal_details?.appraised_by?.profile_picture
                    ? `http://bidbaj.com${appraisalsUserData.appraisal_details.appraised_by.profile_picture}`
                    : "../../public/assets/image/dummy_profile.jpg"
                }
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex items-center gap-2">
                <h2 className="text-white font-semibold">
                  {appraisalsUserData?.appraisal_details?.appraised_by?.name}
                </h2>
                <p className="text-gray-100">[...{appraisalsUserData?.appraisal_details?.vin_no?.slice(-6)}]</p>
              </div>
            </div>
            <div className="flex gap-5 text-gray-300">
              <FaPhoneAlt className="cursor-pointer hover:text-green-400" size={20} />
              <IoMdInformation className="cursor-pointer hover:text-green-400" size={22} />
              <BsThreeDotsVertical className="cursor-pointer hover:text-green-400" size={20} />
            </div>
          </div>

          {/* Messages */}

           
       

           {/* <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scroll bg-[url('/assets/logo/navbar_logo.jpg')]  bg-no-repeat bg-center"> */}
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scroll relative">
  {/* ✅ Background Layer */}
  <div className="absolute inset-0 pointer-events-none ">
  <div className="fixed inset-0 md:ml-100 bg-[url('/assets/logo/navbar_logo.jpg')] bg-no-repeat bg-center bg-[length:100px] md:bg-[length:200px] opacity-30"></div>
</div>




            {messages.map((msg, index) => {
              const isMyMessage = Number(msg.from_id) === Number(currentUserId);
              return (
                <div
                  key={msg.id || index}
                  className={`flex ${isMyMessage ? "justify-start" : "justify-end"}`}
                >
                  
                  <div
                    className={`max-w-[85%] md:max-w-[70%] ${
                      isMyMessage ? "bg-gray-600" : "bg-gray-700"
                    } rounded-2xl px-3 py-2 shadow-md`}
                  >

                     {/* ✅ NAME */}
        <p className="text-xs text-green-300 mb-1 font-medium">
          {isMyMessage
            ? msg.from_username || "You"
            : msg.from_username}
         </p>
        
                   {/* fetch messages  and show it in frontend */}
                   
                    {msg.message && (
                      <p className="text-white text-sm break-words whitespace-pre-wrap">
                        {msg.message}
                      </p>
                    )}

                    {msg.file && msg.file.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {msg.file.map((img, i) => (
                          <img
                            key={i}
                            src={img.image_url}
                            alt="chat-img"
                            //for image preview on click
                              onClick={() => setPreviewImage(img.image_url)}

                            className="w-28 rounded-lg border border-gray-600"
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-gray-300">
                        {formatChatTime(msg.timestamp || msg.created_at)}
                      </span>
                      {isMyMessage && <FaCheck className="text-[10px] text-gray-300" />}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
            
          </div>

          {/* Input Area */}
          {!bidAccepted && (
 
           <div className="p-2 md:p-3 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700">
            {selectedFiles.length > 0 && (
              <div className="flex gap-2 mb-2 overflow-x-auto pb-2">
                {selectedFiles.map((item, index) => (
                  <div key={index} className="relative flex-shrink-0">
                    <img
                      src={item.preview}
                      className="w-14 h-14 rounded-lg object-cover"
                      alt="preview"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-center gap-2">
              <button
                onClick={() => fileInputRef.current.click()}
                className="text-gray-400 hover:text-green-400 transition p-2"
              >
                <FaImage size={22} />
              </button>
              <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-sm"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-all shadow-lg"
              >
                <FaPaperPlane size={18} />
              </button>
            </div>
          </div> 

          )}



        </div>

      </div>
     
 {/* image preview modal */}

      {previewImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={() => setPreviewImage(null)}
  >
    <div className="relative max-w-3xl w-full">
      {/* Close Button */}
      <button
        onClick={() => setPreviewImage(null)}
        className="absolute -top-10 right-0 text-white text-2xl"
      >
        ✕
      </button>

      {/* Big Image */}
      <img
        src={previewImage}
        alt="preview"
        className="w-full max-h-[80vh] object-contain rounded-lg"
      />
    </div>
  </div>
)}
      {/* Modals */}
      {showModal && (
        <ProfileModal userId={selectedUserId} onClose={closeProfileModal} />
      )}

      {showConfirmAcceptModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-2">
              Confirm Accept Bid
            </h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to accept this bid?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmAcceptModal(false)}
                className="flex-1 py-2 rounded-full bg-gray-700 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleAcceptBid}
                className="flex-1 py-2 rounded-full bg-green-600 text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Bid Modal */}

      {showConfirmModal && (


        
    <div className="fixed inset-0 bg-black/60 z-50 p-4 flex justify-center items-start">
  
  <div className="bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-xl border border-gray-700 
                  transform transition-all duration-300 translate-y-0 animate-slideDown">

    <h3 className="text-xl font-semibold text-white mb-2">
      Confirm Your Bid
    </h3>

    <p className="text-gray-300 mb-4">
      You are bidding:{" "}
      <span className="text-green-400 font-bold">${offer}</span>
    </p>

    <div className="flex gap-3">
      <button
         onClick={() => setShowConfirmModal(false)}
        className="flex-1 py-2 rounded-full bg-gray-700 text-white"
      >
        Cancel
      </button>

      <button
         onClick={handleConfirmBid}
        className="flex-1 py-2 rounded-full bg-green-600 text-white"
      >
        Confirm Bid
      </button>
    </div>

  </div>
</div>
      )}
    </div>
  
  );
};

export default Chat;









