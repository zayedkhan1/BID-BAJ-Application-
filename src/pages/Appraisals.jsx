
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { FaCheck, FaCheckDouble, FaEye, FaTrash } from "react-icons/fa";
import ProfileModal from "../components/ProfileModal";
import { formatMessageDate, formatMessageTime } from "../utility/utility";
import toast from "react-hot-toast";

const Appraisls = () => {

    const { userId } = useParams();
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const navigate = useNavigate();

    //  modal state for delete
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedAppraisalId, setSelectedAppraisalId] = useState(null);

    console.log("user id for next page", userId)


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


    console.log("apprisal id from message.jsx", messages[0]?.id)


    const goToChat = (chatId, appraisal_id) => {
        navigate(`/chat/${chatId}`,
            {
                state: {
                    appraisal_id: appraisal_id,

                }
            }
        )
    }

    console.log("Fetched Messages:", messages);

    console.log("sending appraisal id:", messages[0]?.id);


    // =====================DELETE API CALLING ===================
    const handleDelete = async () => {

        try {
            setLoading(true)
            const response = await fetch(
                `/api/vehicle/api/v1/appraisals/delete/${selectedAppraisalId}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.msg || "Delete failed");
            }


            // ✅ Update UI
            setMessages((prev) =>
                prev.filter((item) => item.id !== selectedAppraisalId)
            );

            // close modal
            setShowDeleteModal(false);
            setSelectedAppraisalId(null);

            toast.success("Apprisal deleted successfully !")


        } catch (error) {
            console.error("Delete Error:", error);
        }
        setLoading(false)

    };



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
                    <div>
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
                            key={item.id}
                            onClick={() => { goToChat(item?.message?.chat, item?.id) }}
                            className="max-w-3xl mx-auto bg-gray-800 border border-gray-700 p-6 rounded-xl mb-4 flex justify-between ">

                            <div key={item.id}>

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



                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();

                                            navigate(`/appraisalUserInfo/${item.id}`, {
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


                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedAppraisalId(item.id);
                                            setShowDeleteModal(true);
                                        }}
                                    >
                                        <FaTrash className="text-red-500 hover:text-red-700" />
                                    </button>

                                </div>

                            </div>



                        </div>


                    ))

                )}

            </div>
            {/* Delete modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-xl w-87.5 text-center shadow-lg">

                        <h2 className="text-xl font-bold mb-4 text-white">
                            Delete Appraisal
                        </h2>

                        <p className="text-gray-300 mb-6">
                            Are you sure you want to delete this appraisal?
                        </p>

                        <div className="flex justify-center gap-4">

                            {/* Cancel */}
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setSelectedAppraisalId(null);
                                }}
                                className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
                            >
                                Cancel
                            </button>

                            {/* Confirm Delete */}
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
                            >
                                Delete
                            </button>

                        </div>
                    </div>
                </div>
            )}


            {/* Profile modal */}
            {showModal && (
                <ProfileModal
                    userId={userId}
                    onClose={closeProfileModal}
                />
            )}
        </div>

    );
};

export default Appraisls;