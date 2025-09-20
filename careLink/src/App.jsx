// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx'
import './Navbar.css'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Register from "./Register.jsx"; 
import Login from "./Login.jsx"; 
import Footer from "./Footer.jsx"; // ✅ import as component
// import WorkerLogin from "./workerLogin.jsx";
import HomePage from './homePage.jsx';
import './Footer.css'
import './Register.css'
import WorkerLogin from './workerLogin.jsx'
import DoctorRegister from './DoctorRegister.jsx';
import WorkerRegister from './WorkerRegister.jsx';
// import WorkerLoginContainer from './WorkerLoginContainer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="/HomePage" element={<HomePage/>} /> */}
          <Route path="/healthCard" element={<h1>Welcome to card</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/WorkerLogin" element={<WorkerLogin />} />
          <Route path="/register/doctor" element={<DoctorRegister />} />
          <Route path="/register/worker" element={<WorkerRegister />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/workerLogin" element={<WorkerLoginContainer/>}/> */}
          {/* <Route path="/workerLogin" element={<WorkerLogin/>}></Route> */}
          {/* <Route path="/WorkerLoginContainer" element={<WorkerLoginContainer/>}/> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
