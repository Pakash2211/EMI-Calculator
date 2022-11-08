
import {  useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Showview = () =>{
    const data = useSelector((res)=>res);
    return(

        <Box sx={{ width: '90%' }}>
        <Stack spacing={2}>
          <Item>Monthly EMI : {data.monthlyEMI ?  `₹ ${new Intl.NumberFormat().format(data.monthlyEMI) }`: ""}</Item>
          <Item>Total Interest Amount :{data.intestamount ? `₹ ${new Intl.NumberFormat().format(data.intestamount) }` : "" }</Item>
          <Item>Total Amount Payable :{data.totalpayble ? `₹ ${new Intl.NumberFormat().format(data.totalpayble) }` : ""} </Item>
        </Stack>
      </Box>
    )
}

export{Showview};