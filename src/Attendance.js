import React from "react";
import "./App.css";

function Attendance() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="workspace">
          <h2>HRM SYSTEM</h2>
          <div className="workspace-item">
            {/* <span>workspace</span>
            <h3>Sanjeevi</h3> */}
          </div>
        </div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Home</li>
            <li>Settings</li>
            <li>Account</li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="attendance">
          <h2>Attendance</h2>
          <button className="import-button">Import</button>
          <div className="search-container">
            <input type="text" placeholder="Search..." />
          </div>
          <button className="save-button">Save</button>
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee Code</th>
                <th>Date</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src="profile-picture-url"
                      alt=""
                      className="profile-pic"
                    />
                    Sanjeevi
                  </td>
                  <td>EMP001</td>
                  <td>26-08-2002</td>
                  <td>EMPLOYEE</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Attendance;
