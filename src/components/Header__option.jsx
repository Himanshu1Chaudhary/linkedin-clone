
import { Avatar } from "@mui/material";
import React from "react";
import "./Header__option.css";

function Header__option({avatar, Icon, Title }) {
  return (
  <div className="Header__option">
   {Icon && <Icon /> }
   { avatar && <Avatar className="Header__option_ava" src={avatar}/>}
   <h3 className="Header__ooption_title">{Title}</h3>
  </div>
  );
}

export default Header__option;
