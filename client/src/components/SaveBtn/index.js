import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <button className={`save-btn btn btn-${props.btntype} btn-sm`} {...props}>
    {props.children}
  </button>
);

export default SaveBtn;