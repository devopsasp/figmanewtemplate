import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Checkbox,
  Box,
  Badge,
  IconButton,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";

const data = [
  {
    name: "Priya",
    policy: "Annual Leave",
    status: "Approved",
    request: "Nov 22 - Nov 23",
    reason: "I need this leave",
  },
  {
    name: "Khaviya",
    policy: "Sick Leave",
    status: "Pending",
    request: "Oct 12 - Oct 15",
    reason: "I got Sick",
  },
  {
    name: "Vishnu",
    policy: "Client Visit",
    status: "Rejected",
    request: "Nov 24 - Nov 29",
    reason: "I have client Meeting",
  },
  {
    name: "Sanjeevi",
    policy: "Sick Leave",
    status: "Approved",
    request: "Oct 1 - Oct 2",
    reason: "I've got Fever",
  },
  {
    name: "Lalli",
    policy: "Casual Leave",
    status: "Pending",
    request: "Oct 19 - Oct 20",
    reason: "I need this leave",
  },
];

const statusColors = {
  Approved: "green",
  Pending: "yellow",
  Rejected: "red",
};

function LeaveRequest() {
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="stretch" alignItems="center" mb={2}>
        <Button variant="contained" color="primary">
          New Request{" "}
        </Button>
      </Box>
      <Grid
        display={"flex"}
        justifyContent={"stretch"}
        style={{
          background: "blue",
          height: "40px",
          width: "200px",
          textAlign: "center",
          color: "white",
          fontSize: "15px",
          lineHeight: "2.5",
        }}>
        <IconButton style={{ color: "whitesmoke" }}>
          <FilterList />
        </IconButton>
        <Typography textAlign={"center"} sx={{ paddingTop: "10px" }}>
          Filter Leave Request
        </Typography>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell style={{ textAlign: "left" }}>Employee Name</TableCell>
              <TableCell>Policy</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Request</TableCell>
              <TableCell>Reason</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.policy}</TableCell>
                <TableCell>
                  <Box display="flex" justifyContent="left">
                    <span
                      style={{
                        backgroundColor: statusColors[row.status],
                        color: "white",
                        width: "80px",
                        height: "20px",
                        textAlign: "center",
                        borderRadius: "10px",
                      }}>
                      {row.status}
                    </span>
                  </Box>
                </TableCell>
                <TableCell>{row.request}</TableCell>
                <TableCell>{row.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid sx={{ textAlign: "right", padding: "20px" }}>
        <Button variant="contained" color="success">
          Approve
        </Button>
        <Button
          variant="contained"
          color="error"
          style={{ marginLeft: "10px" }}>
          Reject
        </Button>
      </Grid>
    </Box>
  );
}

export default LeaveRequest;
