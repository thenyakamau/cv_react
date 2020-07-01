import React from 'react';

export default function CustomAlertDialog(props) {

    const {error, responseMessage} = props;

    let myAlertDialog;
    if (error === false) {
      myAlertDialog = (
        <div data-form-alert="true">
          <div
            data-form-alert-success="true"
            className="alert alert-form alert-success text-xs-center"
          >
            {responseMessage}
          </div>
        </div>
      );
    } else if (error === true) {
      myAlertDialog = (
        <div data-form-alert="true">
          <div
            data-form-alert-success="true"
            className="alert alert-form alert-danger text-xs-center"
          >
            {responseMessage}
          </div>
        </div>
      );
    } else if (error === "warning") {
      myAlertDialog = (
        <div data-form-alert="true">
          <div
            data-form-alert-success="true"
            className="alert alert-form alert-warning text-xs-center"
          >
            {responseMessage}
            
          </div>
         
        </div>
      );
    } else {
      myAlertDialog = <div></div>;
    }

    return (
        <div>
            {myAlertDialog}
        </div>
    );
}