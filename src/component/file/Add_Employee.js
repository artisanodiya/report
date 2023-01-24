import { Button, FormControl, InputLabel, TextField } from '@mui/material'
import React from 'react'

const Add_Employee = () => {
  return (
    <div>
       <div>Add_Employee</div> 
       <form>
            <p>id : </p>
           <div><InputLabel>Employee Name</InputLabel>: <TextField /></div>
           <FormControl className='add-emp'>
            <TextField label="Employee Name" margin="dense"/>
            <TextField label="Phone" margin="dense"/>
            <TextField label="Address" multiline margin="dense"/>
            <TextField label="Position" margin="dense"/>
            <TextField label="Joininh" margin="dense"/>
            <TextField label="Phone" margin="dense"/>
            <Button className='sign-in-btn' variant='contained'>Add Employee</Button>
            </FormControl>
       </form>
    </div>
  )
}

export default Add_Employee