import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import React from 'react'
import{Tabledata} from './table';
const style = {
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 5,
    margin : 'auto',
    p: 4,
    marginTop : '20px'
  };


  const stylez = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

const OneCard = ({history}) =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let{title,data,table} = history;
    return(
        <Box sx={style}>
        <Typography id="spring-modal-title" >
          Amount : ₹ {new Intl.NumberFormat().format(title.amount)}
        </Typography>
        <Typography id="spring-modal-description" sx={{ mt: 1 }}>
           Rate : {title.rate} %
        </Typography>
        <Typography id="spring-modal-description" sx={{ mt: 1 }}>
        Tenure : {title.tenure} Months
        </Typography>
        <Button variant="contained"  sx={{ mt: 1 }}  onClick={handleOpen}>EMI Table</Button>
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          <Box sx={stylez}>
           <Tabledata  tableData={table} />
          </Box>
      </Modal>
      </Box>
    )
}

export{OneCard};