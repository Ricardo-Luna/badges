import React from "react";
import logo from "../images/logo.svg";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div>
      <h1 className="NotFound" >
          404: Not Found
          <img src={logo} alt="NotFound"/>
          </h1>
     
    </div>
  )
}
export default NotFound;
