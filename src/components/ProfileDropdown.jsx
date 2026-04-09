import { useState, useRef, useEffect } from "react";
import { Link, Navigate, useNavigate} from "react-router-dom";
import { BiUserCircle, BiLogOut, BiTrash } from "react-icons/bi";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  //const navigate = useNavigate();
         const { logout } = useAuth();
  

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  //lgoout api call
  //   //actual api: http://bidbaj.com/user/api/v1/logout

//   //proxy server api: /api/user/api/v1/logout

//  const handleLogout = async () => {
//   const token = localStorage.getItem("token");



//   try {
//     const response = await fetch("http://bidbaj.com/user/api/v1/logout", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       // Remove token locally
//       localStorage.removeItem("token");
//       //localStorage.removeItem("user");

//       window.location.href = "/login";
//     } else {
//       console.error("Logout failed");
//     }
//   } catch (error) {
//     console.error("Logout error:", error);
//   }
// };

const handleLogout = async () => {


  // const token = localStorage.getItem("token");
  // try {
  //   const response = await fetch("/api/user/api/v1/logout", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (!response.ok) {
  //     console.error("Logout failed", response.status);
  //     const errData = await response.json();
  //     console.error(errData);
  //     return;
  //   }else{
  //         // Success
  //   localStorage.removeItem("token");
  //   window.location.href = "/login";

  //   }

  // } catch (error) {
  //   console.error("Logout error:", error);
  // }

// logout();              // 🔥 clears user + token
// Navigate("/login");
// toast.success("Logged out successfully!")

setShowLogoutModal(true);
};

const confirmLogout = () => {
  logout(); // clear auth
  toast.success("Logged out successfully!");
 navigate("/login");
};

const cancelLogout = () => {
  setShowLogoutModal(false);


};

  // const handleDeleteAccount = () => {
  //   if (confirm("Are you sure you want to delete your account?")) {
  //     console.log("Account deleted");
  //     navigate("/");
  //   }
  // };

  return (
    <> 
    <div className="relative" ref={dropdownRef}>
    
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#769A7F] hover:bg-[#769A7F] px-5 py-2.5 cursor-pointer rounded-full text-sm font-bold transition-all "

      >
        {/* <BiUserCircle className="text-lg" /> */}
        <FaUserCircle className="w-6 h-6" />
        <FaChevronDown className="w-4 h-4" />
        
        
        {/* <span>Profile</span> */}
      </button>
      

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-black/80 hover:bg-black/60 
backdrop-blur-md  rounded-xl shadow-xl border overflow-hidden z-50">
          <Link
            to="/profile"
            className="flex items-center text-white font-bold  gap-2 px-4 py-3 hover:bg-gray-600 text-sm"
            onClick={() => setOpen(false)}
          >
            <BiUserCircle />
            My Profile
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex text-white items-center font-bold gap-2 px-4 py-3 hover:bg-gray-600 text-sm text-left"
          >
            <BiLogOut />
            Logout
          </button>
       
              {/* DELETE BUTTON */}
          {/* <button
            onClick={handleDeleteAccount}
            className="w-full  flex items-center font-bold gap-2 px-4 py-3 hover:bg-gray-600 text-sm text-red-600 text-left"
          >
            <BiTrash />
            Delete Account
          </button> */}

        </div>
      )}
      


    </div>

    {showLogoutModal && (
  <div className="fixed mt-20 inset-0  flex items-center justify-center z-50 p-4">
    <div className="bg-gray-800 rounded-xl p-6 w-80 text-center shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-white">
        Do you want to log out?
      </h2>

      <div className="flex justify-center gap-4">
        <button
          onClick={confirmLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Yes
        </button>

        <button
          onClick={cancelLogout}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          No
        </button>
      </div>
    </div>
  </div>
)}
    

    </>
  );
};

export default ProfileDropdown;
