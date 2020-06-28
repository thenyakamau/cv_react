import React, { Component } from "react";
import "./Contact.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { AxiosPostData } from "../../services/AxiosConfig";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";
import SimpleBackdrop from "../../widgets/SimpleBackDrop";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      number: "",
      openSnackBar: false,
      error: false,
      responseMessage: "",
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onReview = this.onReview.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onReview(e) {
    const { name, email, message, number } = this.state;

    if (name && email && message && number) {
      this.setState({ loading: true });
      AxiosPostData("", {name, email, message, number})
        .then((result) => {
          let responseJson = result.data;
          this.setState({
            responseMessage: responseJson.message,
            openSnackBar: true,
            loading: false,
            error: false,
            name: "",
            email: "",
            number: "",
            message: "",
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
    }
  }

  closeSnackBar(e) {
    this.setState({ openSnackBar: false });
  }

  render() {
    const {
      name,
      email,
      message,
      number,
      error,
      responseMessage,
      openSnackBar,
    } = this.state;
    return (
      <div>
        <SimpleBackdrop open={this.state.loading} />
        <div className="contact_img">
          <img src="assets/icons/contact_image.webp" alt="" />
        </div>

        <div className="contact_section">
          <div className="contact_section_body">
            <textarea
              className="form-control w-100"
              name="message"
              id="message"
              cols="30"
              rows="9"
              value={message}
              onChange={this.onChange}
              onFocus="this.placeholder = ''"
              onBlur="this.placeholder = 'Enter Message'"
              placeholder="Enter Message"
            ></textarea>
            <div className="contact_section_body_details">
              <input
                className="form-control"
                name="name"
                id="name"
                type="text"
                value={name}
                onChange={this.onChange}
                onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Enter your name'"
                placeholder="Enter your name"
              />
              <input
                className="form-control"
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={this.onChange}
                onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Enter your email'"
                placeholder="Enter your email"
              />
              <input
                className="form-control"
                name="number"
                id="numer"
                type="text"
                value={number}
                onChange={this.onChange}
                onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Enter your phone number'"
                placeholder="Enter your phone number"
              />
              <Button
                variant="contained"
                color="primary"
                size="medium"
                endIcon={<ArrowForwardIcon />}
                onClick={this.onReview}
              >
                Send Email
              </Button>
            </div>
          </div>
          <div className="contact_section_address">
            <div className="">
              <div className="media contact-info">
                <HomeOutlinedIcon style={{ fontSize: 40 }} color="disabled" />
                <div className="media-body">
                  <label>Thogoto, Kikuyu</label>
                  <p>Kikuyu, 203</p>
                </div>
              </div>
              <div className="media contact-info">
                <PhoneAndroidOutlinedIcon
                  style={{ fontSize: 40 }}
                  color="disabled"
                />
                <div className="media-body">
                  <label>+254 (702) 192 312</label>
                  <p>Mon to Fri 6am to 11pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <EmailOutlinedIcon style={{ fontSize: 40 }} color="disabled" />
                <div className="media-body">
                  <label>thenyakamau@gmail.com</label>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Snackbar
          open={openSnackBar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={this.closeSnackBar}
          autoHideDuration={6000}
          TransitionComponent={TransitionLeft}
        >
          {error === true ? (
            <Alert onClose={this.closeSnackBar} severity="error">
              {responseMessage}
            </Alert>
          ) : (
            <Alert onClose={this.closeSnackBar} severity="success">
              {responseMessage}
            </Alert>
          )}
        </Snackbar>
      </div>
    );
  }
}
