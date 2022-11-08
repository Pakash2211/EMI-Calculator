import React from 'react';
import {updateData} from '../redux/action';
import { useDispatch } from 'react-redux';
import {FormControl,TextField,Select,InputLabel,MenuItem, Button} from '@mui/material';
const Userform = () =>{

    const[userdata,setUserdata] = React.useState({ amount : "",
    rate : "",
    tenure : "3"})
    const{amount,rate,tenure} = userdata;
    
    const dispatch = useDispatch();

    // manage input and take and store in userData
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setUserdata({...userdata,[name]:value});
    }


    const handleClick = () =>{
      dispatch(updateData(userdata));
    }

    return(
<FormControl style={{width : "400px",marginBottom : '100px'}}>
        <FormControl>
       <TextField fullWidth label="Amount(₹)" id="fullWidth" style={{padding : '-10px'}} value={amount} onChange={handleChange} name = "amount"/>
      </FormControl>
      <FormControl fullWidth style={{marginTop : "10px",marginBottom : "10px"}}>
      <InputLabel id="demo-simple-select-label">Tenure(Month)</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={tenure}
        label="Tenure(Month)"
        name = "tenure"
        onChange={handleChange}
      >
        <MenuItem value="3">3 Months</MenuItem>
        <MenuItem value="6">6 Months</MenuItem>
        <MenuItem value="9">9 Months</MenuItem>
        <MenuItem value="12">12 Months</MenuItem>
        <MenuItem value="18">18 Months</MenuItem>
        <MenuItem value="24">24 Months</MenuItem>
      </Select>
    </FormControl>
    <FormControl>
       <TextField fullWidth label="Rates%(p.a)" id="fullWidth"  value={rate} onChange={handleChange} name = "rate"/>
      </FormControl>
      <Button variant="contained" disableElevation  style={{marginTop : "10px"}} onClick={handleClick}>
  Calculate
</Button>
    </FormControl>
    )
}


export{Userform};