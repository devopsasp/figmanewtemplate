import React from "react";
import LoginPage from "./LoginPage";
import IntegrationPage from "./IntegrationPage";
import Attendance from "./Attendance";
import ShiftDetails from "./ShiftDetails";
import Company from "./Company";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import EmployeeDetails from "./EmployeeDetails";

function App() {
  return (
    <div>
      {/* <LoginPage /> */}
      <Outlet />
    </div>
  );
}

export default App;
