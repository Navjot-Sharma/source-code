import React from "react";
import { MdClear } from "react-icons/md";

import "./chip.css";

function AppChip(props) {
  return (
    <div className="app-chip">
      {props.children && "#" + props.children.toLowerCase()}
      <MdClear className="chip-cross" />
    </div>
  );
}

export default AppChip;
