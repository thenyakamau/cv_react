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
import MenuItem from "@material-ui/core/MenuItem";
import RemoveDuplicates from "../../utils/RemoveArrayDuplicates";

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

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: 8,
  },
  selectText: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function LanceDialog(props) {
  const { openDialog, formControl, lanceJob } = props;
  const [job, setJob] = useState("");
  const [professionality, setProfessionality] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState(0);
  const [description, setDescription] = useState("");

  const classes = useStyles();

  const { decodedProfession } = lanceJob;
  const level = [];
  for (let index = 0; index < decodedProfession.length; index++) {
    const levelName = decodedProfession[index].level;
    level.push(levelName);
  }

  let reducedLevel = RemoveDuplicates(level);
  let selectServer = [{"label":"true", "value": true}, {"label":"false", "value": false}];

  function saveDescriptions(e) {
    // const values = { job, locality, type, salary, description };
    // onDialogChange(values);
  }

  return (
    <Dialog
      open={openDialog}
      onClose={formControl}
      aria-labelledby="form-dialog-title"
      PaperComponent={PaperComponent}
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Add Details
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          This entails both the website and app
        </DialogContentText>
        <TextField
          className={classes.textField}
          autoFocus
          margin="dense"
          id="j_name"
          label="Enter Job Name"
          value={lanceJob.type}
          type="text"
        />
        <TextField
          className={classes.selectText}
          autoFocus
          select
          margin="dense"
          id="professionality"
          label="Select professionality"
          value={professionality}
          onChange={(e) => setProfessionality(e.target.value)}
          type="text"
          helperText="Please select your professionality"
        >
          {reducedLevel.map((level, index) => {
            return (
              <MenuItem key={index} value={level}>
                {level}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          className={classes.textField}
          autoFocus
          select
          margin="dense"
          id="server"
          label="Server support"
          value={type}
          onChange={(e) => setType(e.target.value)}
          type="text"
          helperText="Please select your professionality"
        >
          {selectServer.map((server, index) => {
            return (
              <MenuItem key={index} value={server.value}>
                {server.label}
              </MenuItem>
            );
          })}
        </TextField>
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
