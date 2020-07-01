import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import "./Hire.css";
import HireDialog from "./HireDialog";
import { AxiosPostData } from "../../services/AxiosConfig";
import CustomDialog from "../../widgets/MyDialog";
import CustomSnackBar from "../../widgets/MySnackBar";
import CustomAlertDialog from "../../widgets/MyAlertDialog";

export default class HireJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "",
      responseMessage: "",
      openDialog: false,
      error: "",
      openSnackBar: false,
      openSuccessDialog: false,
      snackPostion: { vertical: "bottom", horizontal: "center" },
      redirectPage: false,
      name: "",
      email: "",
      number: "",
      description: {},
    };
    this.formControl = this.formControl.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDialogChange = this.onDialogChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.closeSuccessDialog = this.closeSuccessDialog.bind(this);
    this.saveJobApplication = this.saveJobApplication.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ error: "" });
  }

  onDialogChange(values) {
    this.formControl();
    this.setState({ description: values });
  }

  formControl() {
    const { openDialog } = this.state;

    if (openDialog === true) {
      this.setState({ openDialog: false });
    } else {
      this.setState({ openDialog: true });
    }
  }

  closeSnackBar(e) {
    this.setState({ openSnackBar: false });
  }

  closeSuccessDialog(e) {
    this.setState({ openSuccessDialog: false, redirectPage: true });
  }

  saveJobApplication(e) {
    this.setState({ error: "" });
    const { name, email, number, description } = this.state;
    const body = { name, email, number, description };
    if (name && email && number && description) {
      this.setState({ loading: true });
      AxiosPostData("job", body)
        .then((result) => {
          let responseJson = result.data;
          this.setState({
            responseMessage: responseJson.message,
            openSnackBar: true,
            loading: false,
            error: false,
            openSuccessDialog: true,
          });
        })
        .catch((error) => {
          this.setState({
            responseMessage: "Something went wrong",
            openSnackBar: true,
            loading: false,
            error: true,
          });
        });
    } else {
      this.setState({
        error: "warning",
        responseMessage: "Please input all necessary fields",
      });
    }
  }

  render() {
    const {
      responseMessage,
      openDialog,
      loading,
      description,
      openSnackBar,
      error,
      snackPostion,
      name,
      email,
      number,
      openSuccessDialog,
      redirectPage
    } = this.state;
    const snackValues = { error, responseMessage, openSnackBar, snackPostion };
    const dialogValues = { responseMessage, openSuccessDialog, error };

    if (redirectPage) {
      return (
        <Redirect
          to={{
            pathname: "/hire thenya",
            state: { from: this.props.location.state },
          }}
        />
      );
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
              <CustomAlertDialog
                error={error}
                responseMessage={responseMessage}
              />
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
                    value={name}
                    onChange={this.onChange}
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
                    value={email}
                    onChange={this.onChange}
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
                    id="number"
                    placeholder="Phone Number"
                    type="text"
                    className="input @error('number') is-invalid @enderror"
                    name="number"
                    required
                    autocomplete="number"
                    value={number}
                    onChange={this.onChange}
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
                    value={description.description}
                    onChange={this.formControl}
                    onClick={this.formControl}
                  />
                </div>
              </div>

              <input
                type="submit"
                className="btn_login"
                value="Hire Now"
                onClick={this.saveJobApplication}
              />
            </div>
          </div>
        </div>
        <HireDialog
          openDialog={openDialog}
          formControl={this.formControl}
          onDialogChange={this.onDialogChange}
        />
        <CustomSnackBar
          values={snackValues}
          closeSnackBar={this.closeSnackBar}
        />
        <CustomDialog
          values={dialogValues}
          handleClose={this.closeSuccessDialog}
        />
      </div>
    );
  }
}
