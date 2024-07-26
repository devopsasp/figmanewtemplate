import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@material-ui/core";

export default function Company() {
  return (
    <Container maxWidth="md" sx={{ padding: "10px" }}>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <FormControlLabel control={<Checkbox />} label="Company" />
          <FormControlLabel control={<Checkbox />} label="Branch" />
        </Box>

        <Box
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
            p: 8,
            mb: 8,
            width: "1000px",
            justifyContent: "center",
          }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ flex: 1 }}>
              Enter Company Details
            </Typography>
            <Button variant="outlined" color="primary">
              View Existing Details
            </Button>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Company name"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Address Line 1"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Address Line 2"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="City"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="State"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Country"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Phone No"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Email id"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Pf No"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="ESIC"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Start Date"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="End Date"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={2}
            sx={{ mt: 2 }}>
            <Button variant="contained">Add More Fields</Button>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Switch />
            <Typography variant="body1">Automate Shift Rotation</Typography>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button variant="contained" color="success">
              Save
            </Button>
            <Button variant="contained" color="error">
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
