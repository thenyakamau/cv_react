import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import AboutMe from "./components/About/AboutMe";
import HireMe from "./components/Hire/HireMe";
import HireJob from "./components/Hire/HireJob";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="app_layout">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reach out to me" component={Contacts} />
          <Route path = "/about thenya" component = {AboutMe} />
          <Route path = "/hire thenya" component = {HireMe} />
          <Route path = "/hire for job" component = {HireJob} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
