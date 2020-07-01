import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";

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
            <div className="card">
              <div className="lance_img">
                <img src="assets/icons/ecommerce_image.webp" alt="" />
              </div>
              <center>E Commerce </center>
            </div>

            <div className="card">
              <div className="lance_img">
                <img src="assets/icons/single_web.webp" alt="" />
              </div>
              <center>Business</center>
            </div>

            <div className="card">
              <div className="lance_img">
                <img src="assets/icons/social_media.webp" alt="" />
              </div>
              <center>Social</center>
            </div>

            <div className="card">
              <div className="lance_img">
                <img src="assets/icons/travel_media.webp" alt="" />
              </div>
              <center>Travel</center>
            </div>

            <div className="card">
              <div className="lance_img">
                <img src="assets/icons/eduaction_web.webp" alt="" />
              </div>
              <center>Education</center>
            </div>

            <div className="card">
              <div className="lance_img">
                <img src="assets/icons/blogging_media.webp" alt="" />
              </div>
              <center>Blogs</center>
            </div>
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
