import React from 'react'
import Image from 'next/image'
import logo from '../../assets/Instagram.jpeg'
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function index() {
  return (
    <div className='signup-cont'>
      <div className='signup-card'>
        <Image src={logo} />
        <TextField id="outlined-basic" label="Email" variant="outlined"
          margin='dense'
          fullWidth />
        <TextField id="outlined-basic" label="Password" variant="outlined"
          margin='dense'
          fullWidth />
        <TextField id="outlined-basic" label="Full Name" variant="outlined" 
          margin='dense'  
          fullWidth />
        <Button variant="outlined" 
          color="secondary" 
          fullWidth>
          <CloudUploadIcon />
          Upload Profile Image
        </Button>
      </div>
    </div>
  )
}

export default index
