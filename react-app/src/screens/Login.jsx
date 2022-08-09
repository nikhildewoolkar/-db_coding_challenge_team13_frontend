import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { hostNameUrl } from "../config/api";
import "../styles/login.css";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const navigate = useNavigate();

  // React States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate("/books");
    }
  }, [navigate, isSubmitted]);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    // Find user login info
    let body = {
      username: uname.value,
      password: pass.value
    }

    axios({
        method: 'post',
        url: `${hostNameUrl}/api/token`,
        data: body
    })
    .then(function (response) {
        console.log(response);
        localStorage.setItem('username', uname.value);

        //Setting JWT Token to local storage
        localStorage.setItem('user_token', response.data.token);

        //Setting User ID to local storage
        localStorage.setItem('user_id', response.data.user_id);

        setIsSubmitted(true);
    })
    .catch(function (error) {
        console.log(error);
        setOpen(true);
    });
  };

  return (
    <div className="app">
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Wrong Credentials!
        </Alert>
      </Snackbar>
      <div className="login-text">FIC Bond Tracker</div>
      <div className="login-form">
        <div className="title">Sign In</div>
        {/* Login Form */}
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
