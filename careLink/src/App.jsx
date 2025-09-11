import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx'
import './Navbar.css'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Register from "./Register.jsx"; 
import Login from "./Login.jsx"; 
import Footer from "./Footer.jsx"; // ✅ import as component
import './Footer.css'


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<h1>Heyyy</h1>} />
          <Route path="/healthCard" element={<h1>Welcome to card</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App
