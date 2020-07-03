import React, { Component } from "react";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";
import HireDialog from "./HireDialog";
import { AxiosPostData } from "../../services/AxiosConfig";
import CustomDialog from "../../widgets/MyDialog";
import CustomAlertDialog from "../../widgets/MyAlertDialog";

export default class HireJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "",
      responseMessage: "",
      openDialog: false,
      error: "",
      openSuccessDialog: false,
      name: "",
      email: "",
      number: "",
      description: {},
    };
    this.formControl = this.formControl.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDialogChange = this.onDialogChange.bind(this);
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

  closeSuccessDialog(e) {
    this.setState({ openSuccessDialog: false });
    const { nextPage } = this.props;
    nextPage(0);
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
            loading: false,
            error: false,
            openSuccessDialog: true,
          });
        })
        .catch((error) => {
          this.setState({
            responseMessage: "Something went wrong",
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
      error,
      name,
      email,
      number,
      openSuccessDialog,
    } = this.state;
    const dialogValues = { responseMessage, openSuccessDialog, error };
    const { nextPage } = this.props;

    return (
      <div className="hire_job_layout">
        <SimpleBackdrop open={loading} />
        <div className="hire_job_body">
          <div className="hire_job_image">
            <img src="assets/icons/hire_job.webp" alt="" />
            <div className="url_link">
              <label className="url_label" onClick={() => nextPage(0)}>
                Go Back
              </label>
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
        <CustomDialog
          values={dialogValues}
          handleClose={this.closeSuccessDialog}
        />
      </div>
    );
  }
}
