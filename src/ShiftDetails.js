import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Box,
} from "@mui/material";

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
    <Container sx={{ marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add Shift Details
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddShift}
        sx={{ mb: 2, backgroundColor: "#2196f3" }} // Custom blue color
      >
        Add +
      </Button>
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <TextField label="Shift Name" placeholder="Name" />
        </FormControl>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pattern Code</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Unpaid Break</TableCell>
              <TableCell>Net Payable Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shifts.map((shift, index) => (
              <TableRow key={index}>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel>Pattern Code</InputLabel>
                    <Select
                      value={shift.patternCode}
                      onChange={(e) =>
                        handleChange(index, "patternCode", e.target.value)
                      }>
                      <MenuItem value="">Name</MenuItem>
                      {/* Add more options as needed */}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <TextField
                    type="time"
                    value={shift.startTime}
                    onChange={(e) =>
                      handleChange(index, "startTime", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="time"
                    value={shift.endTime}
                    onChange={(e) =>
                      handleChange(index, "endTime", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleChange(index, "unpaidBreak", "Add")}
                    sx={{ backgroundColor: "#2196f3" }} // Custom blue color
                  >
                    Add
                  </Button>
                </TableCell>
                <TableCell>{shift.netPayableHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, backgroundColor: "#2196f3" }} // Custom blue color
      >
        Add Shift
      </Button>
    </Container>
  );
}

export default ShiftDetails;
