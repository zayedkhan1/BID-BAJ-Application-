import React, { useState } from 'react';
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaHandshake, 
  FaChartBar, 
  FaCog, 
  FaBell, 
  FaSearch, 
  FaChevronDown, 
  FaChevronRight,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaHome,
  FaCalendar,
  FaShoppingBag,
  FaFileContract,
  FaUserPlus,
  FaUserCog,
  FaPercent,
  FaUser
} from 'react-icons/fa';
import { 
  BsGraphUp,
  BsWallet2
} from 'react-icons/bs';
import { IoIosSettings } from "react-icons/io";
import adminLogo from '../assets/images/navbar-logo.jpg'
import { Link } from 'react-router-dom';


const AdminPanel = () => {
      const [open, setOpen] = useState(false);
      const [activeItem, setActiveItem] = useState(" ");


  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDealsMenuOpen, setIsDealsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const toggleDealsMenu = () => setIsDealsMenuOpen(!isDealsMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isSidebarCollapsed ? 'lg:w-20' : 'lg:w-64'}
        fixed lg:relative z-50 w-64 h-full bg-gray-800 border-r border-gray-700
        transition-all duration-300 ease-in-out lg:translate-x-0
      `}>
        
        {/* Logo Section */}
        
        <Link 
        to='/'
        className="flex items-center justify-between p-5 border-b border-gray-700">
          {!isSidebarCollapsed ? (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                {/* <span className="font-bold text-xl">BB</span> */}
                <img  src={adminLogo} alt="" />
              </div>
              <div>
                <h1 className=" font-bold ">
                  BIDBAJ
                </h1>
                <p className="text-xs text-gray-400">Admin Panel</p>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto">
              {/* <span className="font-bold text-xl">BB</span> */}
              <img  src={adminLogo} alt="" />
            </div>
          )}
          
          {/* Close button for mobile */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-700"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </Link>

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-8rem)]">
          {/* Dashboard */}
          {/* <NavItem 
            icon={<FaTachometerAlt />}
            label="Dashboard"
            active={true}
            collapsed={isSidebarCollapsed}
          /> */}

          <NavItem 
        
  icon={<FaTachometerAlt />}
  label="Dashboard"
  active={activeItem === "Dashboard"}
  collapsed={isSidebarCollapsed}
  onClick={() => setActiveItem("Dashboard")}
/>

          {/* Users Menu with Submenu */}
         {/* Users Menu with Submenu */}
<div>
  <button
    onClick={() => {
      toggleUserMenu();
      setActiveItem("Users");
    }}
    className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200
      ${activeItem === "Users" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}
    `}
  >
    <div className="flex items-center space-x-3">
      <FaUsers className="w-5 h-5 text-gray-400" />
      {!isSidebarCollapsed && <span>Users</span>}
    </div>

    {!isSidebarCollapsed && (
      <FaChevronDown
        className={`transition-transform duration-200 ${
          isUserMenuOpen ? "rotate-180" : ""
        }`}
      />
    )}
  </button>

  {/* User Submenu */}
  {isUserMenuOpen && !isSidebarCollapsed && (
    <div className="ml-10 mt-1 space-y-2 animate-slideDown">
      <SubMenuItem
        icon={<FaUsers />}
        label="User List"
        active={activeItem === "User List"}
        onClick={() => setActiveItem("User List")}
      />

      <SubMenuItem
        icon={<FaUserCog />}
        label="Approve User"
        active={activeItem === "Approve User"}
        onClick={() => setActiveItem("Approve User")}
      />

      <SubMenuItem
        icon={<FaUserPlus />}
        label="Create Users"
        active={activeItem === "Create Users"}
        onClick={() => setActiveItem("Create Users")}
      />
    </div>
  )}
</div>


          {/* Deals Menu with Submenu */}
       {/* Deals Menu with Submenu */}
<div>
  <button
    onClick={() => {
      toggleDealsMenu();
      setActiveItem("Deals");
    }}
    className={`flex items-center justify-between w-full p-3 rounded-lg transition-all duration-200
      ${activeItem === "Deals" ? "bg-gray-700 text-white" : "hover:bg-gray-700"}
    `}
  >
    <div className="flex items-center space-x-3">
      <FaHandshake className="w-5 h-5 text-gray-400" />
      {!isSidebarCollapsed && <span>Deals</span>}
    </div>

    {!isSidebarCollapsed && (
      <FaChevronDown
        className={`transition-transform duration-200 ${
          isDealsMenuOpen ? "rotate-180" : ""
        }`}
      />
    )}
  </button>

  {/* Deals Submenu */}
  {isDealsMenuOpen && !isSidebarCollapsed && (
    <div className="ml-10 mt-1 space-y-2 animate-slideDown">
      <SubMenuItem
        icon={<FaSearch />}
        label="Search Deals"
        active={activeItem === "Search Deals"}
        onClick={() => setActiveItem("Search Deals")}
      />

      <SubMenuItem
        icon={<FaShoppingBag />}
        label="Apraisal Lists"
        active={activeItem === "Apraisal Lists"}
        onClick={() => setActiveItem("Apraisal Lists")}
      />

      <SubMenuItem
        icon={<FaChartBar />}
        label="Reports"
        active={activeItem === "Deal Reports"}
        onClick={() => setActiveItem("Deal Reports")}
      />
    </div>
  )}
</div>


          {/* Other Menu Items */}
          {/* <NavItem 
            icon={<BsGraphUp />}
            label="Analytics"
            collapsed={isSidebarCollapsed}
          /> */}
          <NavItem 
  icon={<BsGraphUp />}
  label="Analytics"
  active={activeItem === "Analytics"}
  collapsed={isSidebarCollapsed}
  onClick={() => setActiveItem("Analytics")}
/>
          {/* <NavItem 
            icon={<FaChartBar />}
            label="Reports"
            collapsed={isSidebarCollapsed}
          /> */}
          {/* <NavItem 
            icon={<BsWallet2 />}
            label="Transactions"
            collapsed={isSidebarCollapsed}
          /> */}

          <NavItem 
  icon={<BsWallet2 />}
  label="Transactions"
  active={activeItem === "Transactions"}
  collapsed={isSidebarCollapsed}
  onClick={() => setActiveItem("Transactions")}
/>
          {/* <NavItem 
            icon={<FaPercent />}
            label="Discounts"
            collapsed={isSidebarCollapsed}
          />
          <NavItem 
            icon={<FaCalendar />}
            label="Calendar"
            collapsed={isSidebarCollapsed}
          /> */}
          
          {/* Settings */}
          {/* <div className="pt-4 border-t border-gray-700">
            <NavItem 
              icon={<FaCog />}
              label="Settings"
              collapsed={isSidebarCollapsed}
            />
          </div> */}
        </nav>

        {/* User Profile at Bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <FaUserCircle className="w-6 h-6" />
            </div>
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">Admin User</p>
                <p className="text-xs text-gray-400 truncate">admin@bidbaj.com</p>
              </div>
            )}
          </div>
        </div> */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-700"
              >
                <FaBars className="w-5 h-5" />
              </button>
              
              <button
                onClick={toggleSidebar}
                className="hidden lg:block p-2 rounded-lg hover:bg-gray-700"
              >
                <FaBars className="w-5 h-5" />
              </button>
              
              {/* Search Bar */}
              {/* <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-gray-700 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div> */}
            </div>
            
            <div className="flex items-center space-x-4">
                {/* Bell button */}
              {/* <button className="relative p-2 rounded-lg hover:bg-gray-700">
                <FaBell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button> */}
              


              {/* Admin User Dropdown */}

              {/* <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
                <FaUserCircle className="w-8 h-8" />
                <span className="hidden md:inline">Admin</span>
                <FaChevronDown className="hidden md:inline w-4 h-4" />
              
              </button> */}
               <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
      >
        <FaUserCircle className="w-8 h-8" />
        <span className="hidden md:inline">Admin</span>
        <FaChevronDown className="hidden md:inline w-4 h-4" />
      </button>

      {/* Sub Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-lg shadow-lg">
          <button
            className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
            onClick={() => {
              console.log("Logout clicked");
              // logout logic here
            }}
          >
         <span className='flex items-center justify-center'>
              <IoIosSettings className="w-4 h-4 mr-2" />
            Settings
         </span>
          </button>
          <button
            className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
            onClick={() => {
              console.log("Logout clicked");
              // logout logic here
            }}
          >
         <span className='flex items-center justify-center'> <FaSignOutAlt className="w-4 h-4 mr-2" />
            Logout</span>
          </button>
        </div>
      )}
    </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto h-[calc(100vh-5rem)]">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Users"
              value="1,248"
              change="+12.5%"
              icon={<FaUsers className="w-8 h-8 text-blue-400" />}
              color="from-blue-500 to-blue-600"
            />
            <StatCard
              title="Total Deals"
              value="342"
              change="+8.2%"
              icon={<FaHandshake className="w-8 h-8 text-green-400" />}
              color="from-green-500 to-green-600"
            />
            <StatCard
              title="Revenue"
              value="$42.8K"
              change="+23.1%"
              icon={<BsWallet2 className="w-8 h-8 text-purple-400" />}
              color="from-purple-500 to-purple-600"
            />
            <StatCard
              title="Success Rate"
              value="94.2%"
              change="+2.4%"
              icon={<BsGraphUp className="w-8 h-8 text-orange-400" />}
              color="from-orange-500 to-orange-600"
            />
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <ActivityItem
                user="John Doe"
                action="placed a bid"
                item="Marcedi Benz C300"
                time="2 minutes ago"
                type="bid"
              />
              <ActivityItem
                user="Sarah Smith"
                action="won the auction"
                item="Audi A6"
                time="1 hour ago"
                type="win"
              />
              <ActivityItem
                user="Mike Johnson"
                action="listed a new item"
                item="Toyota Corolla"
                time="3 hours ago"
                type="listing"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

// Reusable Components ---->(old navitem)
// const NavItem = ({ icon, label, active = false, collapsed }) => (
//   <button className={`
//     flex items-center w-full p-3 rounded-lg transition-all duration-200
//     ${active ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'hover:bg-gray-700'}
//   `}>
//     <div className="flex items-center space-x-3">
//       <span className="w-5 h-5">{icon}</span>
//       {!collapsed && <span>{label}</span>}
//     </div>
//   </button>
// );


const NavItem = ({ icon, label, active = false, collapsed, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center w-full p-3 rounded-lg transition-all duration-200
      ${active 
        ? 'bg-gradient-to-br from-[#769A7F] via-[#769A7F] to-[#769A7F] text-white' 
        : 'hover:bg-gray-700'
      }
    `}
  >
    <div className="flex items-center space-x-3">
      <span className="w-5 h-5">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </div>
  </button>
);



// old-submenu

// const SubMenuItem = ({ icon, label }) => (
//   <button className="flex items-center space-x-3 w-full p-2 pl-4 rounded-lg hover:bg-gray-700 transition-all duration-200">
//     <span className="w-4 h-4 text-gray-400">{icon}</span>
//     <span className="text-sm">{label}</span>
//   </button>
// );



const SubMenuItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center space-x-3 w-full p-2 rounded-lg text-sm transition-all duration-200
      ${active ? "bg-gradient-to-br from-[#769A7F] via-[#769A7F] to-[#769A7F] text-white" : "hover:bg-gray-700 text-gray-300"}
    `}
  >
    <span className="w-4 h-4">{icon}</span>
    <span>{label}</span>
  </button>
);


const StatCard = ({ title, value, change, icon, color }) => (
  <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-400 text-sm mb-2">{title}</p>
        <p className="text-2xl font-bold mb-1">{value}</p>
        <p className="text-green-400 text-sm">{change}</p>
      </div>
      <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
        {icon}
      </div>
    </div>
  </div>
);

const ActivityItem = ({ user, action, item, time, type }) => {
  const getTypeColor = () => {
    switch(type) {
      case 'bid': return 'bg-blue-500';
      case 'win': return 'bg-green-500';
      case 'listing': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="flex items-center p-4 rounded-lg hover:bg-gray-750 transition-colors duration-200">
      <div className={`w-2 h-2 rounded-full ${getTypeColor()} mr-4`}></div>
      <div className="flex-1">
        <p className="font-medium">
          <span className="text-blue-300">{user}</span> {action} <span className="text-white">{item}</span>
        </p>
        <p className="text-sm text-gray-400">{time}</p>
      </div>
      <FaChevronRight className="w-4 h-4 text-gray-400" />
    </div>
  );
};

export default AdminPanel;

























//  <div>
//             <button
//               onClick={toggleUserMenu}
        
//               className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
//             >
//               <div className="flex items-center space-x-3">
//                 <FaUsers className="w-5 h-5 text-gray-400" />
//                 {!isSidebarCollapsed && <span>Users</span>}
//               </div>
//               {!isSidebarCollapsed && (
//                 <FaChevronDown className={`transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
//               )}
//             </button>
            
//             {/* User Submenu */}
//             {isUserMenuOpen && !isSidebarCollapsed && (
//               <div className="ml-10 mt-1 space-y-2 animate-slideDown">
//                  <SubMenuItem 
//                   icon={<FaUsers />}
//                   label="User List"
//                   onClick={() => setActiveItem("Users")}
//                 /> 
        
//                 <SubMenuItem 
//                   icon={<FaUserCog /> }
//                   label="Approve User"
//                 />
//                 <SubMenuItem 
//                   icon={<FaUserPlus />}
//                   label="Create Users"
//                 />
//               </div>
//             )}
//           </div>

















//    <div>
//             <button
//               onClick={toggleDealsMenu}
//               className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
//             >
//               <div className="flex items-center space-x-3">
//                 <FaHandshake className="w-5 h-5 text-gray-400" />
//                 {!isSidebarCollapsed && <span>Deals</span>}
//               </div>
//               {!isSidebarCollapsed && (
//                 <FaChevronDown className={`transition-transform duration-200 ${isDealsMenuOpen ? 'rotate-180' : ''}`} />
//               )}
//             </button>
            
//             {/* Deals Submenu */}
//             {isDealsMenuOpen && !isSidebarCollapsed && (
//               <div className="ml-10 mt-1 space-y-2 animate-slideDown">
//                 <SubMenuItem 
//                   icon={<FaSearch />}
//                   label="Search Deals"
//                 />
//                 <SubMenuItem 
//                   icon={<FaShoppingBag />}
//                   label="Apraisal Lists"
//                 />
//                 <SubMenuItem 
//                   icon={<FaChartBar />}
//                   label="Reports"
//                 />
//               </div>
//             )}
//           </div>