import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    minWidth: 345,
  },
});

export default function CustomDialog(props) {
  const { values, handleClose } = props;
  const classes = useStyles();

  return (
    <Dialog
      className={classes.root}
      open={values.openSuccessDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {values.error === true ? "Something went Wrong" : "Request sent"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {values.responseMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
