import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import ViewListIcon from "@material-ui/icons/ViewList";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MainNav from "./MainNav";
import NavLight from "./NavLight";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { name: "Home", link: "/" },
        { name: "Contact", link: "/reach out to me" },
        { name: "Hire", link: "/hire thenya" },
        { name: "About", link: "/about thenya" },
      ],
      mainIcon: "sandwitch",
    };
  }

  componentDidMount() {
    const nav_light = document.querySelector(".nav_light");
    nav_light.style.display = "none";

    document.querySelector("#nav_logo_icon").addEventListener("click", (e) => {
      const { mainIcon } = this.state;
      if (mainIcon === "sandwitch") {
        this.setState({ mainIcon: "back" });
        nav_light.style.display = "block";
      } else {
        this.setState({ mainIcon: "sandwitch" });
        nav_light.style.display = "none";
      }
    });
    // window.addEventListener("click", (e) => {
    //   if (mainIcon === "sandwitch") {
    //     nav_light.style.display = "none";
    //     this.setState({ mainIcon: "sandwitch" });
    //   }
    // });
  }

  render() {
    const { menuItems, mainIcon } = this.state;
    return (
      <div className="nav_card">
        <nav>
          <div className="nav_logo">
            <div id="nav_logo_icon">
              {mainIcon === "sandwitch" ? <ViewListIcon /> : <ArrowBackIcon />}
            </div>
            <Link to="/">welcome to thenya's cv</Link>
          </div>
          <MainNav menuItems={menuItems} />
        </nav>
        <div className="nav_light_layout">
          <NavLight menuItems={menuItems} />
        </div>
      </div>
    );
  }
}
