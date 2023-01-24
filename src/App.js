import './App.css';
import { TextField, Button, Select, MenuItem, InputLabel } from '@mui/material';
import Login from './component/file/Login';
import Add_Employee from './component/file/Add_Employee';
import Sidebar from './component/file/Sidebar';
function App() {
  return (
    <div className="App">
    {
      // <Button>text</Button>
      
      // <TextField />
      // <InputLabel id='demo-simple-select-label'>Age</InputLabel>
      // <Select label="age" labelId='demo-simple-select-label'>
      //   <MenuItem value="10">10</MenuItem>
      //   <MenuItem value="20">20</MenuItem>
      //   <MenuItem value="30">30</MenuItem>
      // </Select>
    }
      <Login />
     <Sidebar />
    </div>
  );
}

export default App;
