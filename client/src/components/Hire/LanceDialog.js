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
import CustomAlertDialog from "../../widgets/MyAlertDialog";

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

export default function LanceDialog(props) {
  const { openDialog, formControl, lanceJob, inputDescription } = props;
  const [professionality, setProfessionality] = useState("");
  const [server, setServer] = useState("");
  const [salary, setSalary] = useState(0);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [timeline, setTimeline] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const classes = useStyles();

  const { decodedProfession } = lanceJob;
  const level = [];
  for (let index = 0; index < decodedProfession.length; index++) {
    const levelName = decodedProfession[index].level;
    level.push(levelName);
  }

  let reducedLevel = RemoveDuplicates(level);
  let selectServer = [
    { label: "true", value: true },
    { label: "false", value: false },
  ];

  let selectUrgency = ["1 month", "2 months", "3 months"];

  function enterProfessionValue(e) {
    setServer("");
    setSalary("");
    setError("");
    setResponseMessage("");
    setProfessionality(e.target.value);
  }

  function enterServerValues(e) {
    setServer(e.target.value);
    setError("");
    setResponseMessage("");
    if (professionality) {
      for (let index = 0; index < decodedProfession.length; index++) {
        const element = decodedProfession[index];
        switch (professionality) {
          case "starter":
            if (professionality === element.level) {
              if (e.target.value === true) {
                if (element.server === true) return setSalary(element.cost);
              } else {
                console.log(element.server);
                if (element.server === false) return setSalary(element.cost);
              }
            }
            break;

          case "professional":
            if (professionality === element.level) {
              if (e.target.value === true) {
                if (element.server === true) return setSalary(element.cost);
              } else {
                if (element.server === false) return setSalary(element.cost);
              }
            }
            break;

          default:
            setError("warning");
            setResponseMessage("Set profession level first");
        }
      }
    } else {
      setError("warning");
      setResponseMessage("Set profession level first");
    }
  }

  function saveDescriptions(e) {
    if (professionality && salary && timeline) {
      let response = {
        j_name: lanceJob.type,
        professionality: professionality,
        server: server,
        salary: salary,
        timeline: timeline,
        availability: lanceJob.available,
        description: description,
      };
      inputDescription(response);
    } else {
      setError("warning");
      setResponseMessage("Please input all necessary fields");
    }
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
        <CustomAlertDialog error={error} responseMessage={responseMessage} />
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
          className={classes.textField}
          autoFocus
          select
          margin="dense"
          id="professionality"
          label="Select professionality"
          value={professionality}
          onChange={(e) => enterProfessionValue(e)}
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
          value={server}
          onChange={(e) => enterServerValues(e)}
          type="text"
          helperText="Please select your server options"
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
          type="text"
        />

        <TextField
          className={classes.textField}
          autoFocus
          margin="dense"
          id="availability"
          label="Availability"
          value={lanceJob.available}
          type="text"
        />

        <TextField
          className={classes.textField}
          autoFocus
          select
          margin="dense"
          id="server"
          label="TimeLine"
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          type="text"
          helperText="Please select your timeline"
        >
          {selectUrgency.map((urgency, index) => {
            return (
              <MenuItem key={index} value={urgency}>
                {urgency}
              </MenuItem>
            );
          })}
        </TextField>

        <TextField
          className={classes.textField}
          autoFocus
          margin="dense"
          id="Description"
          label="Job specifications (Optional)"
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
