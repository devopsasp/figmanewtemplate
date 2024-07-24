import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Grid,
  Typography,
  Select,
  MenuItem,
  IconButton,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import "./LeaveTravelPermissions.css";

const LeaveTravelPermissions = () => {
  const [categories, setCategories] = useState([
    { type: "Leave", name: "", days: "", rule: "Laps", encashment: "" },
  ]);

  const addCategory = () => {
    setCategories([
      ...categories,
      { type: "", name: "", days: "", rule: "Laps", encashment: "" },
    ]);
  };

  const deleteCategory = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

  return (
    <Container className="container">
      <Box
        className="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Typography variant="h6">Leave Travel and Other Permissions</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          className="back-button">
          Back
        </Button>
      </Box>
      <Box className="form-group">
        <Grid container spacing={2} className="header-row">
          <Grid item xs={2}>
            <Typography>Category Type</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Category Name</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Days Count</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Category Rule</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Encashment/Carry forward/Reimbursement</Typography>
          </Grid>
        </Grid>
        {categories.map((category, index) => (
          <Grid container spacing={2} className="form-row" key={index}>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={category.type}
                  onChange={(e) => {
                    const newCategories = [...categories];
                    newCategories[index].type = e.target.value;
                    setCategories(newCategories);
                  }}>
                  <MenuItem value="Leave">Leave</MenuItem>
                  <MenuItem value="Travel">Travel</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                label="Category Name"
                value={category.name}
                onChange={(e) => {
                  const newCategories = [...categories];
                  newCategories[index].name = e.target.value;
                  setCategories(newCategories);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                label="Days per Year"
                value={category.days}
                onChange={(e) => {
                  const newCategories = [...categories];
                  newCategories[index].days = e.target.value;
                  setCategories(newCategories);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Rule</InputLabel>
                <Select
                  value={category.rule}
                  onChange={(e) => {
                    const newCategories = [...categories];
                    newCategories[index].rule = e.target.value;
                    setCategories(newCategories);
                  }}>
                  <MenuItem value="Laps">Laps</MenuItem>
                  {/* Add other options as needed */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                label="Days"
                value={category.encashment}
                onChange={(e) => {
                  const newCategories = [...categories];
                  newCategories[index].encashment = e.target.value;
                  setCategories(newCategories);
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={() => deleteCategory(index)}>
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={addCategory}
          className="add-category-button">
          + Add Category
        </Button>
        <Box className="footer" display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" className="save-button">
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default LeaveTravelPermissions;
