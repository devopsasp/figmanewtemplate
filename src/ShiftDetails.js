import React, { useState } from "react";
import "./ShiftDetails.css";
function ShiftDetails() {
  const [shifts, setShifts] = useState([
    {
      patternCode: "",
      startTime: "",
      endTime: "",
      unpaidBreak: "",
      netPayableHours: "0:00 Hrs",
    },
  ]);

  const handleAddShift = () => {
    setShifts([
      ...shifts,
      {
        patternCode: "",
        startTime: "",
        endTime: "",
        unpaidBreak: "",
        netPayableHours: "0:00 Hrs",
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    setShifts(
      shifts.map((shift, i) => {
        if (i === index) {
          return { ...shift, [field]: value };
        }
        return shift;
      })
    );
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Add Shift Deatils</h2>
        <button className="button" onClick={handleAddShift}>
          Add +
        </button>
      </div>
      <div className="form-group">
        <label htmlFor="shift-name">Shift Name</label>
        <input
          type="text"
          id="shift-name"
          name="shift-name"
          placeholder="Name"
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Pattern Code</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Unpaid Break</th>
            <th>Net Payable Hours</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift, index) => (
            <tr key={index}>
              <td>
                <select
                  value={shift.patternCode}
                  onChange={(e) =>
                    handleChange(index, "patternCode", e.target.value)
                  }>
                  <option value="">Name</option>
                </select>
              </td>
              <td>
                <input
                  type="time"
                  value={shift.startTime}
                  onChange={(e) =>
                    handleChange(index, "startTime", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="time"
                  value={shift.endTime}
                  onChange={(e) =>
                    handleChange(index, "endTime", e.target.value)
                  }
                />
              </td>
              <td>
                <button
                  className="button"
                  onClick={() => handleChange(index, "unpaidBreak", "Add")}>
                  Add
                </button>
              </td>
              <td>{shift.netPayableHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button">Add Shift</button>
    </div>
  );
}

export default ShiftDetails;
