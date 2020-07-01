import React, { Component } from "react";
import "./Hire.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import FreeLancingDialog from "./FreeLancingDialog";

export default class HireMe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
    }
    this.formControl = this.formControl.bind(this);
    this.onDialogChange = this.onDialogChange.bind(this);
  }

  onDialogChange(values) {
    this.formControl();
    //this.setState({ description: values });
  }

  formControl() {
    const { openDialog } = this.state;

    if (openDialog === true) {
      this.setState({ openDialog: false });
    } else {
      this.setState({ openDialog: true });
    }
  }

  render() {
    const {openDialog } = this.state;
    return (
      <div className="hire_layout">
        <div className="hire_details">
          <div className="hire_body">
            <center>
              <h4>Job Hiring</h4>
            </center>
            <p>
              Considering hiring me for a full time job then click the button
              below you can also check the fields that i have experience in by
              clicking the other button. i have an average of one year
              experience as of now in the working environment i would be glad to
              be part of your company given the chance.
            </p>

            <div className="hire_details_buttons">
              <Link to="/hire for job">
                <Button variant="outlined" color="primary" size="large">
                  Hire Me
                </Button>
              </Link>

              <Button
                className="hire_details_button"
                variant="outlined"
                size="large"
              >
                Details
              </Button>
            </div>
          </div>
          <div className="hire_details_image">
            <img src="assets/icons/hire_job.webp" alt="" />
          </div>
        </div>

        <div className="hire_details">
          <div className="hire_details_image">
            <img src="assets/icons/hire_lancer.webp" alt="" />
          </div>
          <div className="hire_body">
            <center>
              <h4>Free Lancing Job</h4>
            </center>
            <p>
              Need to build a site for your business and dont know how to or
              need to automate solution to reach out to your customer click the
              button below and book yourself a website price ranges depending on
              type of website and industry the website will be serving. Time
              constraints also contribute to the price.
            </p>

            <div className="hire_details_buttons">
              <Button variant="outlined" color="primary" size="large" onClick = {this.formControl}>
                Book Me
              </Button>
              <Button
                className="hire_details_button"
                variant="outlined"
                size="large"
              >
                Details
              </Button>
            </div>
          </div>
        </div>
        <FreeLancingDialog openDialog = {openDialog} formControl = {this.formControl} onDialogChange = {this.onDialogChange}/>
      </div>
    );
  }
}
