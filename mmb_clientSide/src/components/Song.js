import React, { useEffect, useState, useLayoutEffect, setState } from "react";
import full_logo from "../media/full_logo.PNG";
import "./Song.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import NavbarComp from './Navbar'
import Footer from './Footer'
import Chatapp from './Chatapp'
import Chat from "./Chat";
import kaira from '../media/kaira.png'
import { Helmet } from "react-helmet";
import { FaPlay, FaAngleDoubleRight, FaAngleDoubleLeft, FaPause } from "react-icons/fa";


let done = false;

const Song = ({ song }) => {
  const [currSongIndex, setCurrSongIndex] = useState(0);
  
  useEffect(() => {}, [currSongIndex]);
  useLayoutEffect(() => {
    window.scrollTo(0,0)
}
  
  );
  console.log(song);
  const shuffledSong = song;
  //Resuffle song=TODO
  const playNextSong = () => {
    if (currSongIndex < shuffledSong.length - 1)
      setCurrSongIndex(1 + currSongIndex);
    else setCurrSongIndex(0);
  };

  useEffect(() => {
    document.title = "Now Playing | MakeMyBrain"
}, [])

// Play and pause button
const [playing, setPlaying] = useState(1)
function play_pause() {
  if (playing === 1) {
    setPlaying(0);
  }
  else {
    setPlaying(1)
  }
}


  return (
    <div id="page_color">
      {/* <header id="header_song">
      <NavbarComp></NavbarComp>
      </header> */}
      <main  id="song_chat">
      <div>

        <h1 id="song_heading">Now Playing</h1>
        <ReactPlayer
          className="react_player"
          /*onEnded={}*/ playing={playing}
          width="360px"
          height="0px"
          url={shuffledSong[currSongIndex].lind}
          onEnded={playNextSong}
        />
        <div id="player">
          <div id="song_name">{shuffledSong[currSongIndex].title}</div>
          <div id="singer_name">{shuffledSong[currSongIndex].singer}</div>
        </div >
        <button onClick={play_pause} id="click_button">
        <div id="player-btn">
        {playing ? <button onClick={play_pause} id="play-pause-back" className="fa-pause">
          <FaPause id="play-pause"/>
        </button> : <button onClick={play_pause} id="play-pause-back" className="fa-pause">
          <FaPlay id="play-pause"/>
        </button>}
        </div>
        </button>
        <button onClick={playNextSong} type="submit" id="click_button">
          Next Song
        </button>
        
        
        <div id="notifications">Vibe with the music and speak your heart out to Kaira - your AI companion. 
        Click on the icon in the bottom-right of your screen to begin.<br/>
        <img src={kaira} id='kaira-pic'/>
        </div>
        

      </div>
      {/*<div id="chat-window">
        <Chatapp></Chatapp>
</div>*/}
      </main>
      <div id="spacing"></div>
      

          <Helmet>
            <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
            </Helmet>
          {/* <header>
            <NavbarComp></NavbarComp>
          </header> */}
    <df-messenger
      intent="WELCOME"
      chat-title="KairaAI"
      agent-id="50e3a8a2-4074-4ca6-9d2f-385e7781eba5"
      language-code="en"
      expand="true"
      id="df-mess"
      chat-icon="https://drive.google.com/file/d/1GRSwxWQbAssuGCbv7W3s1M-x6AfHvJjd/view?usp=share_link"
    ></df-messenger>

      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
};

export default Song;
