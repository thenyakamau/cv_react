import React, { Component } from "react";
import "./About.css";
import Divider from "@material-ui/core/Divider";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about_layout">
        <div className="container">
          <div className="about_container">
            <div className="about_links">
              <div className="about_image">
                <img src="assets/images/git_image.jpeg" alt="" />
              </div>
              <div className="about_social_buttons">
                <a href="https://www.facebook.com/james.thenya.3"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/james_thenya"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/thenyakamau/"><i className="fab fa-instagram"></i></a>
                <a href="https://github.com/thenyakamau"><i class="fab fa-github"></i></a>
                <a href="https://gitlab.com/thenyakamau"><i class="fab fa-gitlab"></i></a>
                <a href="https://linkedin.com/in/thenya-kamau-046230185"><i class="fab fa-linkedin"></i></a>
              </div>
              <div className="card about_worked_at">
                <center>
                  <h5>Worked at</h5>
                </center>
                <Divider />
                <a href="https://cms.softfy.co.ke/">
                  <div className="about_worked_for">
                    <div className="about_worked_for_title">
                      <i class="fas fa-briefcase"></i>
                      <label htmlFor="">Softfy Kenya</label>
                    </div>
                    <p>Android and Web Junior Developer</p>
                  </div>
                </a>
                <Divider />
                <a href="https://www.intsoftkenya.co.ke/">
                  <div className="about_worked_for">
                    <div className="about_worked_for_title">
                      <i class="fas fa-briefcase"></i>
                      <label htmlFor="">IntSoft Kenya</label>
                    </div>
                    <p>Android and Web Intern</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="about_body">
              <h2>About Thenya</h2>
              <p>
                My name is Thenya kamau a Bachelor of science in Mathematics and
                Computer Science degree holder at kirinyaga university. I am a
                full stack programmer who is on his journey to achieving
                knowlegde in this vast programming world. I can program in all
                basic fields ranging from mobile programming, web programming
                all the way to producing desktop apps.
              </p>
              <p>
                In terms of mobile programming I started off my journey with the
                production of android programs using android sdk with the
                language Java. I improved my skills and sort to enlarge my
                horizons thus I landed upon flutter which uses the dart language
                which did very much intrigue me. Using flutter I am able to
                deliver applications both for android and ios.
              </p>

              <p>
                As it is quite evident web programming is a diverse field which
                can be broken down into two field both front end rendering and
                server side implementation. When it comes to front end
                programming I use javascript with an accompaniment of libraries
                such as react which give the application a real time when
                compared to mobile application. With server side implementation
                I use both php with the laravel framework and javascript with
                the express framework interchangibly dependeing on the task
                handed to be and the amount of time allocated to the task.
              </p>

              <p>
                When it comes to desktop applications I tend to go a little old
                school with programs building the language using old langages
                such as java. The demand for desktop application maybe low but
                the intrigue for development keeps me here.
              </p>

              <p>
                I am still admittingly a novice when it comes to data structures
                and algorithm for it isn't that common to come around them.
                Hoowever, continous practice does lead to perfection. I cannot
                claim to be a great programmer because I am still in this
                journey trying to achieve my dream of being a great programmer.
                I hope you give me a chance to prove my self to you. Thank you.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
