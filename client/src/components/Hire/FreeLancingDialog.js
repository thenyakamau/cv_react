import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { HireContext } from "../../context/HireState";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
export default function FreeLancingDialog(props) {
  const { openDialog, formControl, onDialogChange } = props;
  const { transactionCost } = useContext(HireContext);

  return (
    <Dialog
      open={openDialog}
      onClose={formControl}
      aria-labelledby="form-dialog-title"
      PaperComponent={PaperComponent}
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        <center>Choose Job Category</center>
      </DialogTitle>
      <DialogContent>
        <div className="lance_objects">
          <section>
            {transactionCost.map((transaction, index) => {
              return (
                <div
                  key={index}
                  className="card"
                  onClick={() => onDialogChange(transaction)}
                >
                  <div className="lance_img">
                    <img src={transaction.file_path} alt="" />
                  </div>
                  <center className = "lance_objects_name">{transaction.type}</center>
                </div>
              );
            })}
          </section>
        </div>
      </DialogContent>
      <DialogActions>
        <center>
          <Button onClick={formControl} color="primary">
            Close
          </Button>
        </center>
      </DialogActions>
    </Dialog>
  );
}
