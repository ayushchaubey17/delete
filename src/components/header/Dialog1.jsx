import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { NavLink } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog1({setLogin,islogin}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };
  
  let handleLogout = ()=>{
    console.log(islogin)
    setLogin(pre => !pre);
    console.log(islogin);
  }

  const handleClose2 = () => {
    handleLogout();
    setOpen(false);
  };

  

  return (
    <React.Fragment>
      <h1 className='font-semibold' onClick={handleClickOpen}>
       LogOut
      </h1>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose1}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use HomelyStay service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure to Log Out
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Cancel</Button>
          <Button onClick={handleClose2}><NavLink to="/">Logout</NavLink></Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
