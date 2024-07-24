// src/EmployeeDetails.js
import React from "react";
import "./EmployeeDetails.css";

const EmployeeDetails = () => {
  return (
    <div className="container">
      <h2 className="center">Employee Details</h2>
      <hr />
      <h3 className="center">Enter Employee Details</h3>
      <div className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label>Employee Code</label>
            <input type="text" placeholder="Employee code" />
          </div>
          <div className="form-group">
            <label>Emp First Name</label>
            <input type="text" placeholder="Emp First Name" />
          </div>
          <div className="form-group">
            <label>Emp Middle Name</label>
            <input type="text" placeholder="Emp Middle Name" />
          </div>
          <div className="form-group">
            <label>Emp Last Name</label>
            <input type="text" placeholder="Emp Last Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>DateOfBirth</label>
            <input type="date" placeholder="DOB" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <input type="text" placeholder="Gender" />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input type="text" placeholder="Status" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Emp Full Name</label>
            <input type="text" placeholder="Emp Full Name" />
          </div>
          <div className="form-group">
            <label>Reader Id</label>
            <input type="text" placeholder="Reader Id" />
          </div>
          <div className="form-group">
            <label>OT Eligible</label>
            <input type="text" placeholder="OT Eligible" />
          </div>
          <div className="form-group">
            <label>PF No</label>
            <input type="text" placeholder="PF No" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>ESI No</label>
            <input type="text" placeholder="ESI No" />
          </div>
          <div className="form-group">
            <label>Basic Salary</label>
            <input type="text" placeholder="Basic Salary" />
          </div>
          <div className="form-group">
            <label>Bank Code</label>
            <input type="text" placeholder="Bank Code" />
          </div>
          <div className="form-group">
            <label>Bank Name</label>
            <input type="text" placeholder="Bank Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>IFSC Code</label>
            <input type="text" placeholder="IFSC Code" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div className="form-group">
            <label>PAN No</label>
            <input type="text" placeholder="PAN No" />
          </div>
          <div className="form-group">
            <label>Salary Type</label>
            <input type="text" placeholder="Salary Type" />
          </div>
        </div>
        <div className="add-more">
          <button>+ Add More Fields</button>
        </div>
        <div className="form-actions">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
          <button className="reset-btn">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
