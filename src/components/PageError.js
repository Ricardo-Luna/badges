import React from "react";
import "./styles/PageError.css";

function PageLoading(props) {
  return <div className="rotate-center"> {props.error.message}❌</div>;
}
export default PageLoading;
