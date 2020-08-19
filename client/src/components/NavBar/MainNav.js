import React from "react";
import { Link } from "react-router-dom";

export default function MainNav(props) {
  const { menuItems } = props;
  return (
    <div className="main_nav">
      <div className="navigation_body">
        <ul>
          {menuItems.map((menuItem, index) => {
            return (
              <div key={index}>
                <li>
                  <Link to={menuItem.link}>{menuItem.name}</Link>
                </li>
              </div>
            );
          })}
          <li>
            <a href="assets/utils/thenya cv.docx" download>
              Download Cv
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
