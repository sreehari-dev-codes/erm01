import React, { useState } from "react";
import "../styles/WorkstationPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faQuestionCircle,
    faCaretDown,
    faFileExport,
    faPlus,
    faSave,
    faPrint,
    faEnvelopeOpenText,
    faEraser,
    faSyncAlt,
    faTruck,
    faDownload,
    faExclamationCircle,
    faTimes
} from "@fortawesome/free-solid-svg-icons";

const WorkstationPage = () => {
    const [workstationName, setWorkstationName] = useState("");
    const [ipAddress, setIpAddress] = useState("");
    const [dropdownStatusOpen, setDropdownStatusOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [isActive, setIsActive] = useState(false);

    const statusOptions = ["All", "Active", "Inactive"];

    const handleStatusClick = (status) => {
        setSelectedStatus(status);
        setDropdownStatusOpen(false);
    };

    return (
        <div className="workstation-page">
            {/* Top Layer */}
            <div className="top-layer">
                <div className="left-section">
                    <img src="/logo.png" alt="Logo" className="logo" />
                    <span className="org-name">Oncolab Diagnostics LLC</span>
                </div>
                <div className="right-section">
                    <span className="breadcrumb">Accounts1 / Workstation Master</span>
                    <div className="icons">
                        <div className="notification-icon">
                            <FontAwesomeIcon icon={faBell} />
                            <span className="badge">19</span>
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
                <button><FontAwesomeIcon icon={faPlus} /> Create</button>
                <button><FontAwesomeIcon icon={faSave} /> Save</button>
                <button><FontAwesomeIcon icon={faPrint} /> Print</button>
                <button><FontAwesomeIcon icon={faEnvelopeOpenText} /> Email</button>
                <button><FontAwesomeIcon icon={faEraser} /> Clear</button>
                <button><FontAwesomeIcon icon={faSyncAlt} /> Refresh</button>
                <button><FontAwesomeIcon icon={faTruck} /> Dispatch</button>
                <button><FontAwesomeIcon icon={faDownload} /> Fetch</button>
                <button><FontAwesomeIcon icon={faExclamationCircle} /> Issues</button>
                <button><FontAwesomeIcon icon={faTimes} /> Close</button>
            </div>

            {/* Third Layer */}
            <div className="third-layer">
                <div className="inline-input">
                    <label htmlFor="workstationName">Workstation Name:</label>
                    <input
                        type="text"
                        id="workstationName"
                        placeholder="Enter Workstation Name"
                        value={workstationName}
                        onChange={(e) => setWorkstationName(e.target.value)}
                    />
                </div>
                <div className="inline-input">
                    <label htmlFor="ipAddress">IP Address:</label>
                    <input
                        type="text"
                        id="ipAddress"
                        placeholder="Enter IP Address"
                        value={ipAddress}
                        onChange={(e) => setIpAddress(e.target.value)}
                    />
                </div>
                <div className="inline-input">
                    <input
                        type="checkbox"
                        id="isActive"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <label htmlFor="isActive">isActive</label>
                </div>
            </div>

            {/* List Controls */}
            <div className="list-controls">
                <div className="list-left">
                    <label className="workstation-list-label">Workstation List:</label>
                    <div className="status-dropdown">
                        <div
                            className="selected-status"
                            onClick={() => setDropdownStatusOpen(!dropdownStatusOpen)}
                        >
                            {selectedStatus}
                            <FontAwesomeIcon icon={faCaretDown} className="status-caret" />
                        </div>
                        {dropdownStatusOpen && (
                            <ul className="status-options">
                                {statusOptions.map((status, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleStatusClick(status)}
                                        className={selectedStatus === status ? "active-option" : ""}
                                    >
                                        {status}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="list-right">
                    <a href="/export-to-excel" className="export-link">
                        <FontAwesomeIcon icon={faFileExport} />
                        Export to Excel
                    </a>
                </div>
            </div>

            {/* Workstation List */}
            <div className="workstation-list">
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Edit</th>
                            <th>Workstation Name</th>
                            <th>IP Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="5" className="no-record">No Record Found</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>© Caredata Informatics | Support: +919600052472</p>
            </div>
        </div>
    );
};

export default WorkstationPage;
