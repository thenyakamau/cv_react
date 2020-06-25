import React, { Component } from "react";

export default class Descriptions extends Component {
  render() {
    return (
      <div className="description_layout">
        <section className="use_sasu padding_top">
          <div class="description_layout_container">
            <div class="single_feature">
              <div class="single_feature_part">
                <center>
                  <img src="assets/icons/flutter.png" alt="" />
                  <h4>Mobile development</h4>
                </center>
                <p>
                  As a developer i am able to create applications for both android and ios using flutter.
                   I also do know how to use the android sdk with java. 
                  I can create both the interface, stable api and  also implement logic within the app
                </p>
              </div>
            </div>
            <div class="single_feature">
              <div class="single_feature_part">
                <center>
                  <img src="assets/icons/javascript.png" alt="" />
                  <h4>Web Development</h4>
                </center>
                <p>
                  I am well versed with web development techniques and also error handling. 
                  I can comfortably use javascript and i am familiar with its functionality. 
                  I use the react library to create web interfaces and also logic within the website.
                </p>
              </div>
            </div>
            <div class="single_feature">
              <div class="single_feature_part">
                <center>
                  <img src="assets/icons/nodejs.png" alt="" />
                  <h4>Server-Side Development</h4>
                </center>
                <p>
                  When it comes to server side programming i am torn between two languages both php and javascript. 
                  I am quite efficient with php alongside its framework laravel which i have used for a while. 
                  May be new to node js using express.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
