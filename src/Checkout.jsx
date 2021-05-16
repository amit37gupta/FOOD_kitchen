import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const Textdial ={
      fontFamily:"system-ui",
      fontSize:"30px",
      color:"#000",
      paddingRight:"200px"
  }
  const TextDialog = {
    fontFamily: "system-ui",
    fontSize:"35px",
    paddingLeft:"250px",
    lineHeight:"0"

};
const Btnstyle ={
    color:"#ffffff",
    backgroundColor:"#3f51b5",
    marginTop:"100px",
    marginLeft:"200px"
}
  
  return (
    <div>
      <Button style={Btnstyle}
        onClick={handleClickOpen}>
        Checkout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <p style={TextDialog}>Checkout</p>
        <DialogContent>
          <DialogContentText style ={Textdial}>
            Thank you for your order.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
