import React from 'react'
import Image from 'next/image'
import logo from '../../assets/Instagram.jpeg'
import TextField from "@mui/material/TextField";
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function index() {
  return (
    <div className='signup-container'>
      <div className='signup-card'>
        <Image src={logo} />
        <TextField 
          id="outlined-basic" 
          label="Email" 
          variant="outlined"
          margin='dense'
          fullWidth />
        <TextField 
          id="outlined-basic" 
          label="Password" 
          variant="outlined"
          margin='dense'
          fullWidth />
        <TextField 
          id="outlined-basic" 
          label="Full Name" 
          variant="outlined" 
          margin='dense'  
          fullWidth />
        <Button 
          variant="outlined" 
          color="secondary" 
          fullWidth>
          <CloudUploadIcon />
          Upload Profile Image
          <input hidden accept="image/*" type="file" />
        </Button>
        <Button style={{ marginTop: "1rem" }} variant="contained" fullWidth>
            Sign Up
        </Button>
        <div className="tnc">
          By signing up, you agree to our Terms, Conditions and Cookies
          policy.
        </div>
      </div>
      <div className="bottom-card">
          Already Have an account ? {" "}
          <span style={{ color: "blueviolet" }}>Login</span>
      </div>
    </div>
  )
}

export default index
