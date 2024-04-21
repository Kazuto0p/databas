import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Change import to useNavigate

export const Login = () => {
  const [oname, setOname] = useState("");
  const [opass, setOpass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Change useHistory to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3006/login', {
        oname,
        opass
      });
      if (response.data === "success") {
        setMessage("Login successful");
        navigate('/homepage'); // Change history.push to navigate
      } else {
        setMessage("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <Box
        style={{ marginTop: "100px", marginLeft: '550px' }}
        height={350}
        width={300}
        my={4}
        display="drop"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '10px solid black' }}
      >
        <br></br><br></br>
        <Typography variant="h4"> Login Page</Typography><br></br>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant='outlined'
            value={oname}
            onChange={(e) => setOname(e.target.value)}
          /><br></br><br></br>
          <TextField
            label="Enter password"
            type='password'
            variant='outlined'
            value={opass}
            onChange={(e) => setOpass(e.target.value)}
          /><br></br><br></br>
          <Button type="submit" variant='contained' color='secondary'>
            <Link to='/Cards' style={{ textDecoration: "none", color: "black" }}>Login</Link>
          </Button><br></br><br></br>
        </form>
        {message && <Typography>{message}</Typography>}
        <br></br><br></br>
      </Box>
    </div>
  );
}

export default Login;
