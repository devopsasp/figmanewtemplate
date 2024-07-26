import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import IntegrationPage from "./IntegrationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeaveRequest from "./LeaveRequest";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import EmployeeDetails from "./EmployeeDetails";
import Company from "./Company";
import ShiftDetails from "./ShiftDetails";
import Attendance from "./Attendance";
import LeaveApply from "./LeaveApply";
import LeaveEmployee from "./LeaveEmployee";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/IntegrationPage" element={<IntegrationPage />} />
          <Route path="/LeaveRequest" element={<LeaveRequest />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/LeaveApply" element={<LeaveApply />} />
          <Route path="/LeaveEmployee" element={<LeaveEmployee />} />
          {/* <Route
            path="/LeaveTravelPermission"
            element={<LeaveTravelPermissions />}
          /> */}
          <Route path="/EmployeeDetails" element={<EmployeeDetails />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/ShiftDetails" element={<ShiftDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
