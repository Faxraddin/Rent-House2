import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Index.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { noAuth } from "../../store/userReducer";
const Header = () => {
  const [auth, setAuth] = useState(null);

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch();
  

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={"Navbar"}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "1.5vw" }}>Logo</h2>
            <div>
              <ul
                style={{
                  display: "flex",
                  gap: "3vw",
                  alignItems: "center",
                }}
              >
                <NavLink className={"Navpage"} to={"/"}>
                  Home Page
                </NavLink>
                <NavLink className={"Navpage"} to={"/opportunities"}>
                  Opportunities
                </NavLink>
                <NavLink className={"Navpage"} to={"/about"}>
                  About
                </NavLink>
                <NavLink className={"Navpage"} to={"/forum"}>
                  Forum
                </NavLink>
                <NavLink className={"Navpage"} to={"/owner"}>
                  Apartment owner
                </NavLink>
              </ul>
            </div>
          </div>

          {isAuth ? (
            <Link className="authButton" to={"/"} onClick={dispatch(noAuth)}>
              Logout
            </Link>
          ) : (
            <Link to={"/login"} className="authButton">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
