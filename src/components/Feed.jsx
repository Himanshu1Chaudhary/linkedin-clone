import React, { useEffect, useState } from "react";
import "./Feed.css";
import Inputoption from "./Inputoption";
import Post from "./Post";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import { getSpeedDialActionUtilityClass } from "@mui/material";


function Feed() {

  const [posts, setPosts] = useState(["hi"]);

  const [input, setInput] = useState('');

const changeHandler =(e) =>{
  setInput(e.target.value);
}
const clickHandler =(e) =>{
  e.preventDefault();
  setPosts([input, ...posts]);
  setInput('')
}

return (
        <div className="Feed">
      <div className="Feed__inputcontainer">
        <div className="Feed__input">
          <form>
            <input type="text" onChange={changeHandler} value={input} placeholder="Write a post" />
            <button  type="submit" onClick={clickHandler}>SEND</button>
          </form>
        </div>
        <div className="Feed__inputoption">
          <Inputoption
            Icone={AddPhotoAlternateIcon}
            Title="Photos"
            colo="#7085F9"
          />
          <Inputoption Icone={VideoLibraryIcon} Title="Video" colo="#E7A33E" />
          <Inputoption Icone={EventNoteIcon} Title="Event" colo="#C0CBCD" />
          <Inputoption
            Icone={ArticleIcon}
            Title="Write Article"
            colo="#7FC15E"
          />
        </div>
      </div>
      {
        posts.map((post)=>(
          <Post messages={post} />
        ))
      }
 
    </div>
  );
}
export default Feed;
