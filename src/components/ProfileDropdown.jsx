import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle, BiLogOut, BiTrash } from "react-icons/bi";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    // logout logic here
    console.log("Logged out");
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account?")) {
      console.log("Account deleted");
      navigate("/");
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-500/25"
      
      >
        <BiUserCircle className="text-lg" />
        <span>Profile</span>
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

          <button
            onClick={handleDeleteAccount}
            className="w-full  flex items-center font-bold gap-2 px-4 py-3 hover:bg-gray-600 text-sm text-red-600 text-left"
          >
            <BiTrash />
            Delete Account
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
