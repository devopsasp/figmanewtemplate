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
import Sidebar from "./Sidebar";
import MainPage from "./nav";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import { Navigate, useNavigate } from "react-router-dom";

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

const IntegrationPage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "UserName", icon: <Avatar /> },
    {
      text: "DashBoard",
      icon: <Dashboard />,
      onClick: () => navigate("/Dashboard"),
    },
    { text: "Home", icon: <IntegrationInstructions /> },
    { text: "Settings", icon: <Settings /> },
    { text: "Account", icon: <AccountCircle /> },
    { text: "Logout", icon: <LogoutIcon /> },
  ];
  return (
    <div>
      <div>
        {" "}
        <Sidebar />
      </div>

      <div>
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
              <List>
                {menuItems.map((item, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={item.onClick}
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
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
              }}>
              <Container
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
                <Box sx={{ flexGrow: 2 }}>
                  <Card sx={{ height: "80%", p: 2 }}>
                    <Box
                      sx={{
                        border: "2px solid #1976d2",
                        borderRadius: "8px",
                        p: 8,
                        height: "70%",
                        bgcolor: "#9E9EDE",
                      }}>
                      <CardContent sx={{ textAlign: "center" }}>
                        <Grid container spacing={8}>
                          {cardItems.map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                              <Card sx={{ height: "100%" }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    p: 2,

                                    height: "100%",
                                  }}>
                                  <IconButton sx={{ mb: 2 }}>
                                    {item.icon}
                                  </IconButton>
                                  <Typography variant="h6">
                                    {item.text}
                                  </Typography>
                                </Box>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </CardContent>
                    </Box>
                  </Card>
                </Box>
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default IntegrationPage;
