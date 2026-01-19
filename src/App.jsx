
// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Home from './pages/Home'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Login from './pages/Login'
// import OtpVerify from './pages/OtpVerify'
// import Profile from './pages/Profile'
// import AdminPanel from './AdminPanel/AdminPanel'

// function App() {

//   return (
//     <>
//     <Navbar></Navbar>

//     <Routes>
//       <Route path="/" element={<Home></Home>} />
//       <Route path="/login" element={<Login></Login>} />
//       <Route path="/otp-verify" element={<OtpVerify></OtpVerify>} />
//       <Route path='/profile' element={<Profile></Profile>}/>
//       <Route path='/admin' element={<AdminPanel></AdminPanel>}/>

     
//     </Routes>

//       <Footer></Footer>
//     </>
//   )
// }

// export default App;




import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import OtpVerify from './pages/OtpVerify'
import Profile from './pages/Profile'
import AdminPanel from './AdminPanel/AdminPanel'

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
        <Route path="/otp-verify" element={<OtpVerify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

      {/* Show Footer only if NOT admin */}
      {!isAdminPage && <Footer />}
    </>
  )
}

export default App;
