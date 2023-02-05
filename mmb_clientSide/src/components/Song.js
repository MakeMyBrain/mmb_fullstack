import React, { useEffect, useState, useLayoutEffect, setState } from "react";
import full_logo from "../media/full_logo.PNG";
import "./Song.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import NavbarComp from './Navbar'
import Footer from './Footer'
import Chatapp from './Chatapp'


const Song = ({ song }) => {
  const [currSongIndex, setCurrSongIndex] = useState(0);
  
  useEffect(() => {}, [currSongIndex]);
  useLayoutEffect(() => {
    window.scrollTo(0,0)
}
  
  );
  console.log(song);
  const shuffledSong = song.sort((a, b) => 0.5 - Math.random());
  //Resuffle song=TODO
  const playNextSong = () => {
    if (currSongIndex < shuffledSong.length - 1)
      setCurrSongIndex(1 + currSongIndex);
    else setCurrSongIndex(0);
  };

  useEffect(() => {
    document.title = "Now Playing | MakeMyBrain"
}, [])

  return (
    <div id="page_color">
      <header id="header_song">
      <NavbarComp></NavbarComp>
      </header>
      <main  id="song_chat">
      <div>

        <h1 id="song_heading">Now Playing</h1>
        <ReactPlayer
          className="react_player"
          /*onEnded={}*/ playing={true}
          width="360px"
          height="0px"
          url={shuffledSong[currSongIndex].lind}
          onEnded={playNextSong}
        />
        <div id="player">
          <div id="song_name">{shuffledSong[currSongIndex].title}</div>
          <div id="singer_name">{shuffledSong[currSongIndex].singer}</div>
        </div>
        <button onClick={playNextSong} type="submit" id="click_button">
          Next Song
        </button>
        {/*<div id="notifications">You can play the music even <br/>after minimising your browser <br/>
          by going to ⋮ on top-right corner of your <br/>
          browser and selecting "Desktop Site".
  </div>*/}

      </div>
      <div id="chat-window">
        <Chatapp></Chatapp>
      </div>
      </main>
      <div id="spacing"></div>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
};

export default Song;
