import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField,
} from "@mui/material";

const leaveData = [
  {
    policy: "Annual Leave",
    status: "Approved",
    request: "Sep 22 - Sep 23",
    reason: "I need this leave",
    approvedBy: "Manager",
  },
  {
    policy: "Sick Leave",
    status: "Rejected",
    request: "Oct 12 - Oct 15",
    reason: "I got Sick",
    approvedBy: "HR",
  },
  {
    policy: "Client Visit",
    status: "Rejected",
    request: "Nov 24 - Nov 29",
    reason: "I have client Meeting",
    approvedBy: "HR",
  },
  {
    policy: "Sick Leave",
    status: "Approved",
    request: "Dec 1 - Dec 2",
    reason: "I’ve got Fever",
    approvedBy: "Manager",
  },
  {
    policy: "Casual Leave",
    status: "Approved",
    request: "Oct 19 - Oct 20",
    reason: "I need this leave",
    approvedBy: "HR",
  },
];

const statusStyles = {
  Approved: { color: "white", backgroundColor: "green" },
  Rejected: { color: "white", backgroundColor: "red" },
};

const LeaveEmployee = () => {
  return (
    <Box
      sx={{
        p: 4,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 1000,
        mx: "auto",
      }}>
      <Typography variant="h5" gutterBottom>
        Leave Requests (Employee)
      </Typography>
      <Box
        sx={{
          p: 4,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 1000,
          mx: "auto",
        }}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Employee Name"
            variant="outlined"
            // You can add a value and onChange handler here if needed
          />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Policy</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Request</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Approved by</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaveData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.policy}</TableCell>
                  <TableCell>
                    <Chip label={row.status} sx={statusStyles[row.status]} />
                  </TableCell>
                  <TableCell>{row.request}</TableCell>
                  <TableCell>{row.reason}</TableCell>
                  <TableCell>{row.approvedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body2" sx={{ marginTop: 2 }}></Typography>
      </Box>
    </Box>
  );
};

export default LeaveEmployee;
