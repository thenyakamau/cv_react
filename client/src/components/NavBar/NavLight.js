import React from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

export default function NavLight(props) {
  const { menuItems } = props;
  return (
    <div className="nav_light fixed_asset">
      <div className="navigation_body">
        <ul>
          {menuItems.map((menuItem, index) => {
            return (
              <div key={index}>
                <li>
                  <Link className="nav_light_button" to={menuItem.link}>
                    {menuItem.name}
                  </Link>
                  <Divider />
                </li>
              </div>
            );
          })}
          <li>
            <a href="assets/utils/thenya cv.docx" download>
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
