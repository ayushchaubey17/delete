import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
  import 'react-toastify/dist/ReactToastify.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Dialouge() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      <FavoriteBorderIcon/>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add to cart
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon  />
          
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            For Making it Add to cart you need to login or signUp Page
          </Typography>
          <Typography gutterBottom>
           Then Only you can add items to cart
           </Typography>
          <Typography gutterBottom>
            First proceed gor login page.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button  autoFocus >
          <NavLink to="/login" > Login</NavLink> 
          </Button>
          
          <Button autoFocus >
          <NavLink to="/signup" > SignUp</NavLink> 
          </Button>
          
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}