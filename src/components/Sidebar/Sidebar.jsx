import React from "react";
import { NavLink } from "react-router-dom";
import navLink from "../../assets/dummy-data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <i class="ri-taxi-fill"></i> 
          <a href="/">Grab</a>
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLink.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                    <i className={item.icon}></i>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__bottom">
          <span>
            <i class="ri-login-circle-line"> Logout</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
