
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
// import dummyProfile from "../../public/assets/image/dummy_profile.jpg"

  
  const UsersList = ({ setSelectedUsers }) => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedUsersState, setSelectedUsersState] = useState([]); // local state


  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/vehicle/api/v1/add/appraisal", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
    if (loading) {
    return <Loading />;
  }

  const users = user?.users_list || [];

  // 🔎 Search filter
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Select user
  const handleSelect = (id) => {
    let updatedUsers;

    if (selectedUsersState.includes(id)) {
      updatedUsers = selectedUsersState.filter((uid) => uid !== id);
    } else {
      updatedUsers = [...selectedUsersState, id];
    }

    setSelectedUsersState(updatedUsers); // update local state
    setSelectedUsers(updatedUsers); // send to AddVehicle.jsx
  };

  // ⭐ Selected user objects
  const selectedUserCards = users.filter((u) =>
    selectedUsersState.includes(u.id)

  );
  return (




<div className="p-8 max-w-6xl mx-auto space-y-8">
  {/* Header with glass effect */}
  <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-xl border border-white/20">
    <h1 className="text-white text-3xl font-light tracking-wide text-center">
      User Directory
      <span className="block text-sm font-medium text-white/60 mt-1">
        Total Users: {filteredUsers.length}
      </span>
    </h1>
  </div>

  {/* Premium Search Bar */}
  <div className="relative max-w-md mx-auto">
    <input
      type="text"
      placeholder="Search user..."
      className="w-full px-6 py-4 pl-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 shadow-lg"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <svg
      className="absolute left-5 top-4 h-5 w-5 text-white/50"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>

  {/* All Users - Horizontal Scroller */}
  <div className="relative">
    <h2 className="text-white/80 text-sm uppercase tracking-wider mb-3 px-2">
      All Users
    </h2>
    <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
      {filteredUsers.map((user) => {
        const isSelected = selectedUsersState.includes(user.id);
        return (
          <div
            key={user.id}
            onClick={() => handleSelect(user.id)}
            className={`
              min-w-[220px] cursor-pointer p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
              ${
                isSelected
                  ? "bg-gradient-to-br from-[#769A7F] to-[#5A7B63] border-white/30 shadow-xl"
                  : "bg-white/10 backdrop-blur-md border-white/10 hover:border-white/30 hover:bg-white/20"
              }
            `}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-white/20"
                  // src={`http://bidbaj.com${user?.profile_picture} `}
                  //  src={user?.profile_picture? `http://bidbaj.com${user.profile_picture}`: {dummyProfile}}
                   src={user?.profile_picture? `http://bidbaj.com${user.profile_picture}`: "../../public/assets/image/dummy_profile.jpg"}
                  alt={user.name}
                />
                {isSelected && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                    ✓
                  </div>
                )}
              </div>
              <p className="text-white font-medium text-lg">{user.name}</p>
              <p className="text-white/60 text-sm mt-1">ID: {user.id}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* Selected Users Section */}
  <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10">
    <h2 className="text-white/80 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
      Selected Users ({selectedUserCards.length})
    </h2>

    <div className="flex gap-6 flex-wrap">
      {selectedUserCards.map((user) => (
        <div
          key={user.id}
          className="group w-[220px] bg-gradient-to-br from-[#769A7F] to-[#5A7B63] p-6 rounded-2xl border border-white/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center">
            <img
              className="w-20 h-20 rounded-full object-cover ring-4 ring-white/30 mb-4"
              src={`http://bidbaj.com${user?.profile_picture}`}
              alt={user.name}
            />
            <p className="text-white font-medium text-lg">{user.name}</p>
            <p className="text-white/70 text-sm mt-1">ID: {user.id}</p>
          </div>
        </div>
      ))}
      {selectedUserCards.length === 0 && (
        <p className="text-white/40 italic">No users selected yet</p>
      )}
    </div>
  </div>
</div>
  );
};

export default UsersList;