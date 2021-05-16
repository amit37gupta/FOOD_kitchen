import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const BtnFirst = {
    color:"#ffffff",
    backgroundColor:"#3f51b5",
    marginTop:"15px",
    marginLeft:"15px",
}
const BtnSecond ={
    color:"#ffffff",
    backgroundColor:"#e91e63",
    marginTop:"15px",
    marginLeft:"15px",
}
  const Btnstyle ={
    color:"#ffffff",
    backgroundColor:"#3f51b5",
    marginTop:"100px",
    marginLeft:"200px"
}
const Spanstyle = {
  paddingLeft:"200px",
  marginRigth:"130px"
};


  return (
    <div>
      <Button style={Btnstyle} onClick={handleClickOpen}>
        Your Last Order Summary
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Order summary"}</DialogTitle>
        <DialogContent>
          <p>Coke:<span style ={Spanstyle}>2</span><label><Button style={BtnFirst} startIcon={<AddIcon/>}></Button>
            <Button style={BtnSecond} startIcon={<RemoveIcon/>}></Button></label></p>
          <p>Fries:<span style={Spanstyle}>1</span><label><Button style={BtnFirst} startIcon={<AddIcon/>}></Button>
            <Button style={BtnSecond} startIcon={<RemoveIcon/>}></Button></label></p>
          <p>Total(INR):<span style={Spanstyle}>200</span></p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style ={BtnFirst} >
            SAVE AND CHECKOUT
          </Button>
          <Button onClick={handleClose} style ={BtnSecond} >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}