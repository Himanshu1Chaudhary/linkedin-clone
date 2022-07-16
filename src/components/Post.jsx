import { Avatar } from "@mui/material";
import React from "react";
import Inputoption from "./Inputoption";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

import "./Post.css";

function Post({messages }) {
  return (
    <div className="Post">
      <div className="Post__header">
        <Avatar  />
        <div className="Post__info">
          <h2>Himanshu Chaudhary</h2>
        <p>Frontend Developer</p>
        </div>
      </div>
      <div className="Post__body">
        <p>{messages}</p>
      </div>
      <div className="Post__button">
        <Inputoption Icone={ThumbUpIcon} Title="like" colo="gray" />
        <Inputoption Icone={CommentIcon} Title="like" colo="gray" />
        <Inputoption Icone={ShareIcon} Title="like" colo="gray" />
        <Inputoption Icone={SendIcon} Title="like" colo="gray" />
      </div>
    </div>
   
     
    
  )



}

export default Post;
