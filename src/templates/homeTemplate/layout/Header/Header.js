import React from "react";
import "./Header.scss";
import logo from "../../../../assets/img/logo_2.png";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="header_content ">
        <div className="header_top ">
          <div className="header_detail  ">
            <div className="col-span-10"></div>
            <div className="header_signIn ">
              <p>Sign In</p>
            </div>
            <div className="header_signUp ">
              <p>Sign Up</p>
            </div>
          </div>
        </div>
        <div className="header_bot">
          <nav className="">
            <div className="header_logo">
              <NavLink to="/home">
                <img className="w-2/3" src={logo} alt="" />
              </NavLink>
            </div>
            <div className="header_nav">
              <ul className="">
                <li className="nav_item ">
                  <NavLink className="nav-link" to="#">
                    Lịch Chiếu <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink className="nav-link" to="#">
                    Cụm Rạp
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink className="nav-link" to="#">
                    Sắp Chiếu
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink
                    className="nav-link"
                    activeClassName="header_active"
                    to="/news"
                  >
                    Tin Tức
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
