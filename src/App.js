import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Password from "./components/Password/password";
import Dashboard from "./components/Dashboard/dashboard";
import Reportlostitem from "./components/Reportlostitem/reportlostitem";
import Navbar from "./components/Navbar/navbar";
import Advert from "./components/Advert/advert";
import Reportfounditem from "./components/Reportfounditem/reportfounditem";
import Subscription from "./components/Subscription/subscription";
import Payment from "./components/Payment/payment";
import Details from "./components/Detail/detail";
import Allmissitem from "./components/Allmissitem/allmissitem";
import Founditems from "./components/Founditems/founditems";
import Help from "./components/Help/help";
import Gallery from "./components/Gallery/gallery";
import Document from "./components/Gallery/Documents/document";
import Images from "./components/Gallery/Images/images";
import Qrcode from "./components/Gallery/Qrcode/qrcode";
import Videos from "./components/Gallery/Videos/videos";
import Chatscreen from "./components/Chatscreen/chatscreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Advert />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<Password />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report-lost-item" element={<Reportlostitem />} />
          <Route path="/report-found-item" element={<Reportfounditem />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/view-details" element={<Details />} />
          <Route path="/all-missing-items" element={<Allmissitem />} />
          <Route path="/found-items" element={<Founditems />} />
          <Route path="/help" element={<Help />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/documents" element={<Document />} />
          <Route path="/images" element={<Images />} />
          <Route path="/item-tag" element={<Qrcode />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/chat" element={<Chatscreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
