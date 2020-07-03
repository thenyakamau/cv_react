import React, { Component } from "react";
import "./Hire.css";
import { HireProvider } from "../../context/HireState";
import HireInitialPage from "./HireInitialPage";
import HireJob from "./HireJob";
import FreeLancingPage from "./FreeLancingPage";

export default class HireMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      page: 0,
      lanceJob: "",
    };
    this.nextPage = this.nextPage.bind(this);
    this.selectedLanceJob = this.selectedLanceJob.bind(this);
  }

  nextPage(value) {
    this.setState({ page: value });
  }

  selectedLanceJob(value) {
    this.setState({lanceJob: value});
    this.nextPage(2);
  }

  render() {
    const { page , lanceJob} = this.state;
    var currentPage;

    switch (page) {
      case 0:
        currentPage = <HireInitialPage nextPage={this.nextPage} selectedLanceJob = {this.selectedLanceJob}/>;
        break;
      case 1:
        currentPage = <HireJob nextPage={this.nextPage} />;
        break;
      case 2:
        currentPage = <FreeLancingPage nextPage={this.nextPage} lanceJob = {lanceJob}/>;
        break;
      default:
        currentPage = <HireInitialPage nextPage={this.nextPage} />;
        break;
    }

    return <HireProvider>{currentPage}</HireProvider>;
  }
}
