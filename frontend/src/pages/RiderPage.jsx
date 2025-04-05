import React, { useState, useEffect } from "react";
import "../styles/RiderPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faQuestionCircle,
    faCaretDown,
    faTimes,
    faSync,
    faSave,
    faPrint,
    faEnvelopeOpenText,
    faEraser,
    faTruck,
    faSearch,
    faBug,
    faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

const RiderPage = () => {
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [countdown, setCountdown] = useState(9);
    const [riderName, setRiderName] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [errorModal, setErrorModal] = useState({ show: false, name: "" });

    const riderNames = [
        "Oncolab",
        "CDOncolab",
        "Muzaamil",
        "Safeer Karat",
        "Dr. Saeid Gholam Hossein Azizi",
        "Suha",
        "Wajahat Ali",
        "Gopika",
        "Anju John",
        "Ann Kathleen",
        "Rejish",
        "Muheenudeen M.K",
        "Erfan Alam",
        "Thomas",
        "Nileena V R",
        "Arsha K R",
    ];

    const handleAutoRefreshChange = () => {
        setAutoRefresh(!autoRefresh);
    };

    const handleDropdownClick = (name) => {
        setErrorModal({ show: true, name });
        setDropdownOpen(false);
    };

    const closeModal = () => {
        setErrorModal({ show: false, name: "" });
    };

    // Countdown timer effect
    useEffect(() => {
        let interval;
        if (autoRefresh) {
            setCountdown(9); // Reset countdown on toggle
            interval = setInterval(() => {
                setCountdown((prev) => (prev === 0 ? 9 : prev - 1));
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [autoRefresh]);

    return (
        <div className={`rider-page ${errorModal.show ? "blurred" : ""}`}>
            {/* Top Layer */}
            <div className="top-layer">
                <div className="left-section">
                    <img src="/logo.png" alt="Logo" className="logo" />
                    <span className="org-name">Oncolab Diagnostics LLC</span>
                </div>
                <div className="right-section">
                    <span className="breadcrumb">Accounts1 / Rider Tracking</span>
                    <div className="icons">
                        <div className="message-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="badge">14</span>
                        </div>
                        <div className="question-icon">
                            <FontAwesomeIcon icon={faQuestionCircle} className="top-icon" />
                        </div>
                        <div className="profile-icon">
                            <img src="/profile-pic.png" alt="Profile" />
                            <span>Thomas</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Layer */}
            <div className="second-layer">
                <button>
                    <FontAwesomeIcon icon={faSync} style={{ marginRight: "8px" }} />
                    Create
                </button>
                <button>
                    <FontAwesomeIcon icon={faSave} style={{ marginRight: "8px" }} />
                    Save
                </button>
                <button>
                    <FontAwesomeIcon icon={faPrint} style={{ marginRight: "8px" }} />
                    Print
                </button>
                <button>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} style={{ marginRight: "8px" }} />
                    Email
                </button>
                <button>
                    <FontAwesomeIcon icon={faEraser} style={{ marginRight: "8px" }} />
                    Clear
                </button>
                <button>
                    <FontAwesomeIcon icon={faSync} style={{ marginRight: "8px" }} />
                    Refresh
                </button>
                <button>
                    <FontAwesomeIcon icon={faTruck} style={{ marginRight: "8px" }} />
                    Dispatch
                </button>
                <button>
                    <FontAwesomeIcon icon={faSearch} style={{ marginRight: "8px" }} />
                    Fetch
                </button>
                <button>
                    <FontAwesomeIcon icon={faBug} style={{ marginRight: "8px" }} />
                    Report Issue
                </button>
                <button>
                    <FontAwesomeIcon icon={faTimesCircle} style={{ marginRight: "8px" }} />
                    Close
                </button>
            </div>

            {/* Third Layer */}
            <div className="third-layer">
                <label htmlFor="riderName">Rider Name:</label>
                <div className="dropdown">
                    <input
                        type="text"
                        id="riderName"
                        placeholder="Enter Rider Name"
                        value={riderName}
                        onChange={(e) => setRiderName(e.target.value)}
                        onFocus={() => setDropdownOpen(true)}
                    />
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className="dropdown-icon"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    />
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            {riderNames
                                .filter((name) =>
                                    name.toLowerCase().includes(riderName.toLowerCase())
                                )
                                .map((name, index) => (
                                    <li key={index} onClick={() => handleDropdownClick(name)}>
                                        {name}
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
                <div className="auto-refresh">
                    <label>
                        <input
                            type="checkbox"
                            checked={autoRefresh}
                            onChange={handleAutoRefreshChange}
                        />
                        Auto Refresh ({countdown}s)
                    </label>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>© Caredata Informatics | Support: +919600052472</p>
            </div>

            {/* Error Modal */}
            {errorModal.show && (
                <div className="error-modal">
                    <div className="modal-content">
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="close-btn"
                            onClick={closeModal}
                        />
                        <h3>{errorModal.name} is not taking any booking.</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RiderPage;
