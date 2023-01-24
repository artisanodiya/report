import { Alert, Button, FormControl, Link, Pagination, TextField } from '@mui/material'
import React from 'react'
import Add_Employee from './Add_Employee'



const Login = () => {
  const a=()=>{
    alert("Test");
  }
  return (
    <div className='login-page'>
        <FormControl className='login-form'>
            <TextField label="Username" margin="dense"/>
            <TextField type="password" label="Password" margin="dense"/>
            <Button className='sign-in-btn' variant='contained' onClick={a}>Sign In</Button>
          </FormControl>  
    </div>
  )
}

export default Login