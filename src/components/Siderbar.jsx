import React from "react";
import { Avatar } from "@mui/material";
import colorpic from "../assets/color_powder_blast.jpg";
import "./Sidebar.css";

function Siderbar() {


const skills=(topic) =>{
  return(
  <div className="Sidebar__skills">
    <span className="hash">#</span>
    <p>{topic}</p>
  </div>
  )

}

  return (
    <div className="Sidebar">
      <div className="Sidebar__top">
        <img src={colorpic} alt="" />
        <Avatar className="Sidebar__avatar" />
        <h2>HIMANSHU CHAUDHARY</h2>
        <h4>himanshuchaudhary031099@gmail.com</h4>
      </div>
      <div className="Sidebar__stats">
        <div className="Sidebarstat">
          <p>Who Viewed You</p>
          <p className="Siderbar__number" >100</p>
        </div>
        <div className="Sidebarstat">
          <p>Views on Post</p>
          <p className="Siderbar__number">1002</p>
        </div>
      </div>
      <div className="Sidebar__button">
        <p>Recent</p>
        {skills("HTML")}
        {skills("CSS")}
        {skills("BOOTSTRAP")}
        {skills("JAVASCRIPT")}
        {skills("REACT JS")}
        {skills("TYPESCRIPT")}
          
      </div>
    </div>
  );
}

export default Siderbar;
