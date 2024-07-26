import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/system";
import loginImage from "./images/login.PNG";
import { Navigate, useNavigate } from "react-router-dom";
import { ButtonGroup } from "@material-ui/core";

const Root = styled("div")({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledContainer = styled(Container)(({ theme }) => ({
  boxShadow: "0 3px 5px rgba(0,0,0,0.2)",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
}));

const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  borderRadius: theme.spacing(1),
}));

const StyledImage = styled("img")({
  maxWidth: "200%",
  maxHeight: "200%",
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const TextFieldWrapper = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleonclick = () => {
    navigate("/IntegrationPage");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Root>
      <StyledContainer maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <StyledImage
                src={loginImage}
                width={450}
                height={400}
                alt="Login Illustration"
              />
            </ImageContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Form>
              <Typography variant="h4" gutterBottom>
                Sign In
              </Typography>
              <Typography variant="body2" gutterBottom>
                Don’t have an account? <Link href="#">Sign in</Link>
              </Typography>
              <TextFieldWrapper
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextFieldWrapper
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="dropdown-label">SelectedOption</InputLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={selectedOption}
                  onChange={handleDropdownChange}
                  label="">
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={10}>Branch</MenuItem>
                  <MenuItem value={20}>Employee</MenuItem>
                  <MenuItem value={30}>Admin</MenuItem>
                </Select>
              </FormControl>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleonclick}>
                Sign In
              </Button>
            </Form>
          </Grid>
        </Grid>
      </StyledContainer>
    </Root>
  );
};

export default LoginPage;
