import React, { Component } from "react";
import "./Contact.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { AxiosMultiPartPostData } from "../../services/AxiosConfig";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      number: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onReview = this.onReview.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onReview(e) {
    const { name, email, message, mumber } = this.state;

    if (name && email && message && mumber) {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("number", mumber);
      AxiosMultiPartPostData("ContactUs", formData)
        .then((result) => {
          //let responseJson = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { name, email, message, number } = this.state;
    return (
      <div>
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
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter Message'"
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
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter your name'"
                placeholder="Enter your name"
              />
              <input
                className="form-control"
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={this.onChange}
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter your email'"
                placeholder="Enter your email"
              />
              <input
                className="form-control"
                name="number"
                id="numer"
                type="text"
                value={number}
                onChange={this.onChange}
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter your phone number'"
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
      </div>
    );
  }
}
