import React, { Component } from "react";

export default class Canvas extends Component {
  render() {
    return (
      <div className="my_canvas">
        <div className="overlay"></div>
        <div className="canvas_background">
          <div className="card"></div>
        </div>
      </div>
    );
  }
}
