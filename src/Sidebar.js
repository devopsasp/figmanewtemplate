import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Box,
  InputAdornment,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Search,
  Settings,
  AccountCircle,
  Dashboard,
  IntegrationInstructions,
} from "@mui/icons-material";
import WorkIcon from "@mui/icons-material/Work";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PolicyIcon from "@mui/icons-material/Policy";
import PeopleIcon from "@mui/icons-material/People";

// import LoginForm from "../Authentication/Login";
import { useState } from "react";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { Navigate, useNavigate } from "react-router-dom";

// import { postRequest } from "../../serverconfiguration/requestcomp";
// import { ServerConfig } from "../../serverconfiguration/serverconfig";
// import { REPORTS } from "../../serverconfiguration/controllers";
// import MainPage from "../src/nav";
// import IntegrationPage from "../LoginPage/Integration";

// Define custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color for primary elements
    },
    secondary: {
      main: "#dc004e", // Red color for secondary elements
    },
    background: {
      default: "#f4f6f8", // Light background color
    },
    text: {
      primary: "#333", // Dark text color
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#000000", // Black background for Drawer
          color: "#ffffff", // White text color
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Card shadow
          borderRadius: "8px", // Rounded corners
          backgroundColor: "#ffffff", // White background for Card
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#1976d2", // Icon color
        },
      },
    },
  },
});

const cardItems = [
  { text: "Setup", icon: <WorkIcon /> },
  { text: "Attendance", icon: <TodayIcon /> },
  { text: "Leave", icon: <AssignmentIcon /> },
  { text: "Shift", icon: <AccessTimeIcon /> },
  { text: "Payslip", icon: <ReceiptIcon /> },
  { text: "Settings", icon: <Settings /> },
  { text: "Policy", icon: <PolicyIcon /> },
  { text: "Employee", icon: <PeopleIcon /> },
];

const Sidebar = (props) => {
  const navigate = useNavigate();

  //     const [login, setLogin] = useState(false);
  //     const [user, setUser] = useState("");
  //     const isLoggedIn = sessionStorage.getItem("user") !== null;

  //   const [employeeImage, setEmployeeImage] = useState("");
  //   const [userName,setUsername] = useState(null);

  // useEffect(() => {
  //     async function getData() {
  //       const response = await postRequest(ServerConfig.url, REPORTS, {
  //         query: select * from employeeimage where employeecode='${sessionStorage.getItem("user")}'
  //       });
  //       if (response.data && response.data.length > 0) {
  //         setEmployeeImage(response.data[0].image);
  //       }
  //         // const user = sessionStorage.getItem("user");
  //         // setUsername(user);
  //     }
  //     getData();
  //   }, []);

  //   function changeState(state) {
  //     setLogin(state);
  //   }
  const menuItems = [
    { text: "UserName", icon: <Avatar /> },
    {
      text: "DashBoard",
      icon: <Dashboard />,
      onClick: () => navigate("/LeaveRequest"),
    },
    { text: "Home", icon: <IntegrationInstructions /> },
    { text: "Settings", icon: <Settings /> },
    { text: "Account", icon: <AccountCircle /> },
  ];
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          flexShrink: 0,
          overflow: "none",
          margin: "left",
          top: 64, // Adjust this value to move the sidebar down
          ["& .MuiDrawer-paper"]: {
            width: 200,
            boxSizing: "border-box",
            marginTop: 8,
          },
        }}>
        {/* <List>
      <ListItem button>
        <ListItemIcon><Home /></ListItemIcon>
        <ListItemText primary="Overview" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><People /></ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><BarChart /></ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><Settings /></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon><AccountCircle /></ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><Error /></ListItemIcon>
        <ListItemText primary="Error" />
      </ListItem>
    </List> */}

        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex", height: "100vh" }}>
            <Drawer
              variant="permanent"
              sx={{
                width: 200,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: 200,
                  boxSizing: "border-box",
                  bgcolor: "#000000", // Black background color for Drawer
                  color: "#ffffff", // White text color
                },
              }}>
              {/* <Typography
                padding={"10px"}
                display={"flex"}
                textAlign={"center"}>
                {employeeImage ? (
                  <Avatar src={employeeImage} />
                ) : (
                  sessionStorage.getItem("user") && (
                    <Avatar>{sessionStorage.getItem("user").charAt(0)}</Avatar>
                  )
                )}
                <div style={{ textAlign: "center", padding: "10px" }}>
                  {sessionStorage.getItem("user")}
                </div>
              </Typography> */}
              <Typography>
                <IconButton>
                  <Avatar />
                </IconButton>
                User008
              </Typography>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem
                    button
                    key={index}
                    sx={{
                      "&:hover": {
                        bgcolor: "#333333", // Darker shade on hover
                      },
                    }}>
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ color: "inherit" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: "white", // Blue background color for main content
                p: 3,
                height: "100vh",
                // overflow: "auto",
                display: "flex",
                flexDirection: "column",
              }}>
              {/* <Container
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
            <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
              Integration
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search Integration..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3, bgcolor: "#ffffff" }} // Ensure the input field has a white background for readability
            />
            <Box sx={{ flexGrow: 1 }}>
              <Card sx={{ height: "70%", p: 2 }}>
                <Box
                  sx={{
                    border: "2px solid #1976d2",
                    borderRadius: "8px",
                    p: 10,
                    height: "70%",
                    bgcolor: "#9E9EDE",
                  }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Grid container spacing={2}>
                      {cardItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <Card sx={{ height: "100%" }}>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 4,
                                height: "100%",
                              }}>
                              <IconButton sx={{ mb: 2 }}>
                                {item.icon}
                              </IconButton>
                              <Typography variant="h6">{item.text}</Typography>
                            </Box>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          </Container> */}
            </Box>
          </Box>
        </ThemeProvider>
      </Drawer>
    </>
  );
};

export default Sidebar;
