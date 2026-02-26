import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"
import StudentDashboard from "./components/Dashboard/StudentDashboard.jsx";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import ResetOTP from "./pages/RestetOTP.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import Student from "./pages/Student.jsx";
import IssueBooks from "./pages/IssueBooks.jsx";
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
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/admindash" element={<AdminDashboard/>}/>
            <Route path="/studentdash" element={<StudentDashboard/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/forget" element={<ForgotPassword/>}/>
            <Route path="/newpass" element={<NewPassword/>}/>
            <Route path="/reset" element={<ResetOTP/>}/>
            <Route path="/issuebooks" element={<IssueBooks/>}/>

          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  )
}
export default App;