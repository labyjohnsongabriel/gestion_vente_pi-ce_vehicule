import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Slidebar/Slidebar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Slidebar from "./Slidebar/Slidebar.jsx";
import Home from "./components/Home/Home.jsx";
import ProfileEdit from "./components/Profile/ProfileEdit.jsx";
import Login from "./Navbar/Login.jsx";
import Registre from "./Navbar/Registre.jsx";
import Dashboard from "./Page/Dashboard/Dashboard.jsx";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registre />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/sidebar" element={<Slidebar />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ProfileEdit" element={<ProfileEdit />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
