import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Instructor from "./components/Instructor";
import Courses from "./components/Courses";

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]">
      <Navbar />

      {/* Scroll Fix */}
      <ScrollToTop />

      {/* ✅ Toast Container (GLOBAL) */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>


      <AppContent />
    </Router>
  );
}

export default App;