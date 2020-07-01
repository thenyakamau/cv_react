import React, { Component } from "react";
import { Link } from "react-router-dom";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import "./Hire.css";
import HireDialog from "./HireDialog";
import { AxiosPostData } from "../../services/AxiosConfig";

export default class HireJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "",
      returnMessage: "",
      openDialog: false,
      error: false,
      openSnackBar: false,
      name: "",
      email: "",
      p_number: "",
      description: {},
    };
    this.formControl = this.formControl.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDialogChange = this.onDialogChange.bind(this);
    this.saveJobApplication = this.saveJobApplication.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onDialogChange(values) {
    this.formControl();
    this.setState({description: values});
  }

  formControl() {
    const { openDialog } = this.state;

    if (openDialog === true) {
      this.setState({ openDialog: false });
    } else {
      this.setState({ openDialog: true });
    }
  }

  saveJobApplication(e) {
      const {name, email, p_number, description} = this.state;
      const body = {name, email, p_number, description};
      if(name && email && p_number && description) {
          this.setState({loading: true});
          AxiosPostData('', body)
          .then((result)=>{
            let responseJson = result.data;
            this.setState({
              returnMessage: responseJson.message,
              openSnackBar: true,
              loading: false,
              error: false,
              name: "",
              email: "",
              number: "",
              message: "",
            });
          })
      }
  }

  render() {
    const { returnMessage, openDialog, loading , description} = this.state;
    let myAlertDialog;
    if (returnMessage === "success") {
      myAlertDialog = (
        <div data-form-alert="true">
          <div
            data-form-alert-success="true"
            className="alert alert-form alert-success text-xs-center"
          >
            Thanks for reaching out! We'll get back to you soon
          </div>
        </div>
      );
    } else if (returnMessage === "error") {
      myAlertDialog = (
        <div data-form-alert="true">
          <div
            data-form-alert-success="true"
            className="alert alert-form alert-danger text-xs-center"
          >
            Please check your credentials
          </div>
        </div>
      );
    } else if (returnMessage === "warning") {
      myAlertDialog = (
        <div data-form-alert="true">
          <div
            data-form-alert-success="true"
            className="alert alert-form alert-warning text-xs-center"
          >
            Please input all necessary fields
          </div>
        </div>
      );
    } else {
      myAlertDialog = <div></div>;
    }

    return (
      <div className="hire_job_layout">
        <SimpleBackdrop open={loading} />
        <div className="hire_job_body">
          <div className="hire_job_image">
            <img src="assets/icons/hire_job.webp" alt="" />
            <div className="url_link">
              <Link className="url_label" to="/hire thenya">
                Go Back
              </Link>
            </div>
          </div>
          <div className="hire_job_container">
            <div className="input_container">
              <h2>Hire Job</h2>
              <br />
              {myAlertDialog}
              <div className="login_input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input
                    id="name"
                    placeholder="Company Name"
                    type="text"
                    className="input @error('name') is-invalid @enderror"
                    name="name"
                    required
                    autocomplete="name"
                    autofocus
                  />
                </div>
              </div>

              <div className="login_input-div one">
                <div className="i">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="div">
                  <input
                    id="email"
                    placeholder="Company Email"
                    type="email"
                    className="input @error('email') is-invalid @enderror"
                    name="email"
                    required
                    autocomplete="email"
                    autofocus
                  />
                </div>
              </div>

              <div className="login_input-div one">
                <div className="i">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="div">
                  <input
                    id="p_number"
                    placeholder="Phone Number"
                    type="text"
                    className="input @error('p_number') is-invalid @enderror"
                    name="p_number"
                    required
                    autocomplete="number"
                    autofocus
                  />
                </div>
              </div>

              <div class="login_input-div one">
                <div class="i">
                  <i class="fas fa-briefcase"></i>
                </div>
                <div class="div">
                  <input
                    placeholder="Job description"
                    type="text"
                    name="job"
                    required
                    autofocus
                    value = {description.description}
                    onChange={this.formControl}
                    onClick={this.formControl}
                  />
                </div>
              </div>

              <input type="submit" className="btn_login" value="Hire Now" onClick = {this.saveJobApplication}/>
            </div>
          </div>
        </div>
        <HireDialog openDialog={openDialog} formControl={this.formControl} onDialogChange = {this.onDialogChange}/>
      </div>
    );
  }
}
