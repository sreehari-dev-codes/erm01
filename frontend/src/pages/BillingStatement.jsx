import React, { useState } from "react";
import "../styles/BillingStatement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const BillingStatement = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [popupMessage, setPopupMessage] = useState("");

    const handleSearchRecords = () => {
        if (!fromDate || !toDate) {
            setPopupMessage("Please fill in both FromDate and ToDate.");
        } else {
            setPopupMessage("Failed");
        }
    };

    const closePopup = () => setPopupMessage("");

    return (
        <div className="billing-statement-page">
            {/* Header Section */}
            <div className="header">
                <div className="header-left">
                    <img src="/logo.png" alt="Logo" className="logo" />
                     <span className="org-name">Oncolab Diagnostics LLC</span>
                </div>
                <div className="header-right">
                    <div className="breadcrumb">Accounts1 / BillingStatement</div>
                    <div className="icons">
                        <div className="notification">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="badge">19</span>
                        </div>
                        <div className="help">
                            <FontAwesomeIcon icon={faQuestionCircle} />
                        </div>
                         <div className="profile-icon">
                            <img src="/profile-pic.png" alt="Profile" />
                            <span>Thomas</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Date Input Section */}
            <div className="date-input-section">
                <div className="date-input">
                    <label htmlFor="fromDate">FromDate:</label>
                    <input
                        type="date"
                        id="fromDate"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                </div>

                <div className="date-input">
                    <label htmlFor="toDate">ToDate:</label>
                    <input
                        type="date"
                        id="toDate"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                </div>

                <button className="search-button" onClick={handleSearchRecords}>
                    Search Records
                </button>
            </div>

            {/* Popup Section */}
            {popupMessage && (
                <div className="popup">
                    <div className="popup-content">
                        <p>{popupMessage}</p>
                        <button onClick={closePopup} className="close-popup-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BillingStatement;
