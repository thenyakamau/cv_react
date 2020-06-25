import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav_card">
        <div className="card">
          <nav>
            <div className="nav_logo">
              <Link to="/">welcome to thenya's cv</Link>
            </div>
            <div className="navigation_body">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="assets/utils/thenya cv.docx" download>
                    Download Cv
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
