import React from "react";
import { NavLink } from "react-router-dom";
import "./Index.scss";

const Header = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          backgroun: "rgba(211, 211, 211, 0.2);",
        }}
      >
        <div
          className={"Navbar"}
        >
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
          <NavLink
            to={"/login"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "33px",
              width: "8vw",
              background: "#4F23FF",
              border: "solid thin purple",
              padding: ".5vw .8vw .5vw .8vw",
              fontSize: "20px",
              textDecoration: "none",
              color: "white",
            }}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
