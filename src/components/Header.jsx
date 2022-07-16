import React from "react";
import "./Header.css";
import light from "../assets/light.png";
import logoo from "../assets/logolinkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import Header__option from "./Header__option";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


function Header() {
  return (
    <div className="Header">
      <div className="Header__left">
        <img src={logoo} alt="" />
        <div className="Header__search">
          {/* search */}
          <SearchIcon />
          <input type="text" placeholder="SEARCH" />
        </div>
      </div>
      <div className="Header__right">
        <Header__option Icon={HomeIcon} Title="Home" />
        <Header__option Icon={ContactsIcon} Title="My Networks" />
        <Header__option Icon={BusinessCenterIcon} Title="Jobs" />
        <Header__option Icon={ForumIcon} Title="Messaging" />
        <Header__option Icon={NotificationsNoneIcon} Title="Notifications" />
        <Header__option  avatar= {light} Title="Me"/>
      </div>
    </div>
  );
}

export default Header;
