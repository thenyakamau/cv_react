import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }
  

export default function CustomSnackBar(props) {
    const {values, closeSnackBar} = props
    return(
        <Snackbar
        open={values.openSnackBar}
        anchorOrigin={values.snackPostion}
        onClose={closeSnackBar}
        autoHideDuration={6000}
        TransitionComponent={TransitionLeft}
      >
        {values.error === true ? (
          <Alert onClose={closeSnackBar} severity="error">
            {values.responseMessage}
          </Alert>
        ) : (
          <Alert onClose={closeSnackBar} severity="success">
            {values.responseMessage}
          </Alert>
        )}
      </Snackbar>
    );
}