import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
let m1 = "Added to wishlist";
let m2 = "Removed from wishlist";
export default function Snacbar({isLiked}) {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <button onClick={handleClick}><FavoriteBorderIcon/></button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={isLiked?m1:m2}
        action={action}
      />
    </div>
  );
}