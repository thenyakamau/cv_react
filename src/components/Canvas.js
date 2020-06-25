import React, { Component } from "react";
import './Home.css'

export default class Canvas extends Component {
  render() {
    return (
      <div className="my_canvas">
        <div className="overlay"></div>
        <div className="canvas_background">
          <div className="card">
            <center>
              {/* <h1>welcome to james cv</h1> */}
            </center>
          </div>
        </div>
      </div>
    );
  }
}
