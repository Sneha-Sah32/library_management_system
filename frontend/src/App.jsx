import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"
import StudentDashboard from "./pages/StudentDashboard";
// import Student from "./pages/student"

 function App(){
  return(
    <>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar/>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/admin" element={<admin/>}/>
            <Route path="/student" element={<StudentDashboard/>}/>

          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  )
}
export default App;