import React, { useState } from "react";
import "../styles/YearlyPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faQuestionCircle,
  faFilePdf,
  faFileExport,
  faCaretDown,
  faPlus,
  faSave,
  faPrint,
  faEnvelopeOpenText,
  faBroom,
  faSync,
  faTruck,
  faDownload,
  faBug,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const YearlyPage = () => {
  const [dropdownYearOpen, setDropdownYearOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2025-2026");
  const [selectedEntity, setSelectedEntity] = useState("client");

  const years = ["2021-2022", "2022-2023", "2023-2024", "2024-2025"];

  const handleYearSelection = (year) => {
    setSelectedYear(year);
    setDropdownYearOpen(false);
  };

  return (
    <div className="yearly-page">
      {/* Top Layer */}
      <div className="top-layer">
        <div className="left-section">
          <img src="/logo.png" alt="Logo" className="logo" />
          <span className="org-name">Oncolab Diagnostics LLC</span>
        </div>
        <div className="right-section">
          <span className="breadcrumb">Accounts1 / Yearly Consolidated Report</span>
          <div className="icons">
            <div className="message-icon">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="badge">19</span>
            </div>
            <div className="question-icon">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </div>
            <div className="profile-icon">
              <img src="/profile-pic.png" alt="Profile" />
              <span>Thomas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Layer with Icons */}
      <div className="second-layer">
        <button><FontAwesomeIcon icon={faPlus} /> Create</button>
        <button><FontAwesomeIcon icon={faSave} /> Save</button>
        <button><FontAwesomeIcon icon={faPrint} /> Print</button>
        <button><FontAwesomeIcon icon={faEnvelopeOpenText} /> Email</button>
        <button><FontAwesomeIcon icon={faBroom} /> Clear</button>
        <button><FontAwesomeIcon icon={faSync} /> Refresh</button>
        <button><FontAwesomeIcon icon={faTruck} /> Dispatch</button>
        <button><FontAwesomeIcon icon={faDownload} /> Fetch</button>
        <button><FontAwesomeIcon icon={faBug} /> Report Issue</button>
        <button><FontAwesomeIcon icon={faTimes} /> Close</button>
      </div>

      {/* Filter Section */}
      <div className="report-filter-section">
        <div className="report-title">
          <h2>Yearly Consolidated Report</h2>
        </div>

        <div className="filter-controls">
          {/* Entity Dropdown */}
          <div className="dropdown-control">
            <label>Entity:</label>
            <select
              value={selectedEntity}
              onChange={(e) => setSelectedEntity(e.target.value)}
            >
              <option value="client">Client</option>
              <option value="doctor">Doctor</option>
              <option value="walkin">WalkIn</option>
              <option value="selectall">SelectAll</option>
            </select>
          </div>

          {/* Report Type Dropdown */}
          <div className="dropdown-control">
            <label>ReportType:</label>
            <select>
              <option value="total">Total</option>
              <option value="op2">Collection</option>
              <option value="op3">Outstanding</option>
            </select>
          </div>

          {/* Financial Year Dropdown */}
          <div className="financial-year-section">
            <label htmlFor="year-dropdown">Select Financial Year:</label>
            <div className="dropdown">
              <div
                className="selected-year"
                onClick={() => setDropdownYearOpen(!dropdownYearOpen)}
              >
                {selectedYear}
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
              </div>
              {dropdownYearOpen && (
                <ul className="dropdown-menu">
                  {years.map((year, index) => (
                    <li
                      key={index}
                      onClick={() => handleYearSelection(year)}
                      className={selectedYear === year ? "active-option" : ""}
                    >
                      {year}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Report Table */}
      <div className="report-section">
        <table>
          <thead>
            <tr>
              {selectedEntity === "client" ? (
                <>
                  <th>Referral Name</th>
                  <th>January</th>
                  <th>February</th>
                  <th>March</th>
                  <th>April</th>
                  <th>May</th>
                  <th>June</th>
                  <th>July</th>
                  <th>August</th>
                  <th>September</th>
                  <th>October</th>
                  <th>November</th>
                  <th>December</th>
                  <th>Total</th>
                </>
              ) : (
                <>
                  <th>Sl.No</th>
                  <th>January</th>
                  <th>February</th>
                  <th>March</th>
                  <th>April</th>
                  <th>May</th>
                  <th>June</th>
                  <th>July</th>
                  <th>August</th>
                  <th>September</th>
                  <th>October</th>
                  <th>November</th>
                  <th>December</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {selectedEntity === "client" ? (
              <>
                <tr>
                  <td>ASH TREE CLINIC L.L.C</td>
                  <td>0</td>
                  <td>0</td>
                  <td>2031</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>2031</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td>0</td>
                  <td>0</td>
                  <td>2031</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>2031</td>
                </tr>
              </>
            ) : (
              <tr>
                <td colSpan="13" style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="export-section">
          <a href="/export-to-pdf" className="export-link">
            <FontAwesomeIcon icon={faFilePdf} />
            Export to PDF
          </a>
          <a href="/export-to-excel" className="export-link">
            <FontAwesomeIcon icon={faFileExport} />
            Export to Excel
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© Caredata Informatics | Support: +919600052472</p>
      </div>
    </div>
  );
};

export default YearlyPage;
