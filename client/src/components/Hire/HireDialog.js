import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

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

const useStyles = makeStyles({
  textField: {
    margin: 8,
  },
});

export default function HireDialog(props) {
  const { openDialog, formControl, onDialogChange } = props;
  const [job, setJob] = useState("");
  const [locality, setLocality] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState(0);
  const [description, setDescription] = useState("");

  const classes = useStyles();

  function saveDescriptions(e) {
    const values = { job, locality, type, salary, description };
    onDialogChange(values);
  }

  return (
    <Dialog
      open={openDialog}
      onClose={formControl}
      aria-labelledby="form-dialog-title"
      PaperComponent={PaperComponent}
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Add Job Details
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can enter your job details here
        </DialogContentText>
        <TextField
          className={classes.textField}
          autoFocus
          margin="dense"
          id="j_name"
          label="Enter Job Name"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          type="text"
        />
        <TextField
          className={classes.textField}
          autoFocus
          margin="dense"
          id="j_locality"
          label="Enter job locality"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
          type="text"
        />
        <TextField
          className={classes.textField}
          autoFocus
          margin="dense"
          id="j_type"
          label="Job Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          type="text"
        />
        <TextField
          className={classes.textField}
          autoFocus
          margin="dense"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Ksh.</InputAdornment>
            ),
          }}
          id="salary"
          label="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          type="text"
        />
        <TextField
          className={classes.textField}
          autoFocus
          margin="dense"
          id="Description"
          label="Job Description"
          type="text"
          multiline
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={formControl} color="primary">
          Cancel
        </Button>
        <Button onClick={saveDescriptions} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
