// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import RiderPage from "./pages/RiderPage.jsx";
import WorkstationPage from "./pages/WorkstationPage.jsx";
import YearlyPage from "./pages/YearlyPage.jsx";
import BillingStatement from "./pages/BillingStatement.jsx";
import "./styles/Sidebar.css"; 

const App = () => {
  return (
    <Router>
      <div className="app" style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<RiderPage />} />
            <Route path="/workstation" element={<WorkstationPage />} />
            <Route path="/yearlyPage" element={<YearlyPage />} />
            <Route path="/billing-statement" element={<BillingStatement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
