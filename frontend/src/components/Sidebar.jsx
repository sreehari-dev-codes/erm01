import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleRight,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const location = useLocation();
  const [isPrimaryMenuOpen, setIsPrimaryMenuOpen] = useState(true);
  const [isFinancialMISOpen, setIsFinancialMISOpen] = useState(false);

  const togglePrimaryMenu = () => {
    setIsPrimaryMenuOpen(!isPrimaryMenuOpen);
  };

  const toggleFinancialMIS = () => {
    setIsFinancialMISOpen(!isFinancialMISOpen);
  };

  return (
    <div className="sidebar" style={{ width: "220px", backgroundColor: "#f0f0f0", padding: "20px" }}>
      {/* Primary Menu */}
      <div
        onClick={togglePrimaryMenu}
        style={{ cursor: "pointer", display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <FontAwesomeIcon icon={faStar} style={{ marginRight: "10px", color: "#ffcc00" }} />
        <span style={{ fontWeight: "bold", color: "#000" }}>Primary Menu</span>
        <FontAwesomeIcon
          icon={isPrimaryMenuOpen ? faCaretUp : faCaretDown}
          style={{ marginLeft: "auto", marginRight: "5px" }}
        />
      </div>
      {isPrimaryMenuOpen && (
        <ul style={{ listStyle: "none", paddingLeft: "20px", marginBottom: "10px" }}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: "8px" }} />
              Rider Tracking
            </Link>
          </li>
          <li className={location.pathname === "/workstation" ? "active" : ""}>
            <Link to="/workstation" style={{ textDecoration: "none", color: "#000" }}>
              <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: "8px" }} />
              Workstation Management
            </Link>
          </li>
          <li className={location.pathname === "/yearlyPage" ? "active" : ""}>
            <Link to="/yearlyPage" style={{ textDecoration: "none", color: "#000" }}>
              <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: "8px" }} />
              Yearly Consolidated Report
            </Link>
          </li>
        </ul>
      )}

      {/* Financial MIS Reports */}
      <div
        onClick={toggleFinancialMIS}
        style={{ cursor: "pointer", display: "flex", alignItems: "center", marginTop: "10px" }}
      >
        <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: "10px", color: "#000" }} />
        <span style={{ fontWeight: "bold", color: "#000" }}>Financial MIS Reports</span>
        <FontAwesomeIcon
          icon={isFinancialMISOpen ? faCaretUp : faCaretDown}
          style={{ marginLeft: "auto", marginRight: "5px" }}
        />
      </div>
      {isFinancialMISOpen && (
        <ul style={{ listStyle: "none", paddingLeft: "20px", marginTop: "8px" }}>
          <li className={location.pathname === "/billing-statement" ? "active" : ""}>
            <Link to="/billing-statement" style={{ textDecoration: "none", color: "#000" }}>
              Billing Statement
            </Link>
          </li>
          
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
