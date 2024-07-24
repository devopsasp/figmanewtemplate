import React, { useState } from "react";
import "./Styles.css";

const Company = () => {
  const [isCompany, setIsCompany] = useState(true);
  const [isBranch, setIsBranch] = useState(false);

  return (
    <div className="form-container">
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            checked={isCompany}
            onChange={() => setIsCompany(!isCompany)}
          />
          Company
        </label>
        <label>
          <input
            type="checkbox"
            checked={isBranch}
            onChange={() => setIsBranch(!isBranch)}
          />
          Branch
        </label>
      </div>

      <div className="form-section">
        <h2>Enter company Details</h2>
        <div className="form-grid">
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Address Line 1" />
          <input type="text" placeholder="Address Line 2" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Phone No" />
          <input type="text" placeholder="Email ID" />
          <input type="text" placeholder="Alternate Email" />
          <input type="text" placeholder="PF No" />
          <input type="text" placeholder="ESIC" />
          <input type="date" placeholder="Start Date" />
          <input type="date" placeholder="End Date" />
        </div>
        <button className="view-details-btn">View Existing Details</button>
        <button className="add-more-fields-btn">Add More Fields</button>
        <div className="automate-shift">
          <label>
            Automate Shift Rotation
            <input type="checkbox" />
          </label>
        </div>
        <div className="form-buttons">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
          <button className="reset-btn">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Company;
