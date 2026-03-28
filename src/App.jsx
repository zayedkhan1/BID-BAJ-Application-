


import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import OtpVerify from './pages/OtpVerify'
import Profile from './pages/Profile'
import AdminPanel from './AdminPanel/AdminPanel'
import AdminLogin from './AdminPanel/AdminLogin'

import Test from './pages/Test'
import Registration from './pages/Registration'
import AddVehicle from './pages/AddVehicle'
import Deals from './pages/Deals'
import Messages from './pages/Messages'
import AppraisalsUserInfo from './pages/AppraisalsUserInfo'
import ContactUs from './pages/ContactUs'
import Chat from './pages/Chat'

function App() {
  const location = useLocation();

  // check if admin page
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Show Navbar only if NOT admin */}
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/messages/:userId" element={<Messages/>} />
        <Route path="/appraisals/:appraisal_id" element={<AppraisalsUserInfo/>} />
        <Route path="/chat/:chatId" element={<Chat/>} />
            
        
           {/*Admin Routes */}
         <Route path="/admin" element={<AdminPanel />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route path="/test" element={<Test />} />

      </Routes>

      {/* Show Footer only if NOT admin */}
      {!isAdminPage && <Footer />}
    </>
  )
}

export default App;
