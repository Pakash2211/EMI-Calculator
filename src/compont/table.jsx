import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tabledata = ({tableData}) =>{
   
    return(

        tableData.length ? (
            <TableContainer component={Paper} style={{padding : '3px'}}>
            <Table  aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Installment No </TableCell>
                  <TableCell align="center">EMI Amount (₹)</TableCell>
                  <TableCell align="center">Principal (₹)</TableCell>
                  <TableCell align="center">Interest (₹)</TableCell>
                  <TableCell align="center">Balance Amount (₹)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow
                    key={row.month}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                 
                    <TableCell align="center">{row.month}</TableCell>
                    <TableCell align="center">₹ {new Intl.NumberFormat().format(row.monthlyEMI)}</TableCell>
                    <TableCell align="center">₹ {new Intl.NumberFormat().format(row.priciple)}</TableCell>
                    <TableCell align="center">₹ {new Intl.NumberFormat().format(row.intrestEMI)}</TableCell>
                    <TableCell align="center">₹ {new Intl.NumberFormat().format(row.total)}</TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
           ) : (" ")
           
        )
}


export{Tabledata};