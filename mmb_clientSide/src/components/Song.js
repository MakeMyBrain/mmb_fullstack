import React, { useEffect, useState, useLayoutEffect, setState } from "react";
import full_logo from "../media/full_logo.PNG";
import "./Song.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import NavbarComp from './Navbar2'
import Navbar3 from "./Navbar3";
import Footer from './Footer'
import Chatapp from './Chatapp'
import Chat from "./Chat";
import kaira from '../media/kaira.png'
import Player from "./Player";

let done = false;

const Song = ({ song }) => {
  const [currSongIndex, setCurrSongIndex] = useState(0);

  useEffect(() => { }, [currSongIndex]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
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
    <div id="newNavFlex2">

      <header>
        <NavbarComp></NavbarComp>
      </header>
      <main id="song_chat">
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
          </div>
          <button onClick={play_pause} id="click_button">Play | Pause</button>
          <button onClick={playNextSong} type="submit" id="click_button">
            Next Song
          </button>
        </div>
        {/*<div id="chat-window">
        <Chatapp></Chatapp>
</div>*/}
      </main>
      <footer className="nav3">
        <Navbar3></Navbar3>
      </footer>

      <footer id="player-box">
        <Player songList={shuffledSong}></Player>
      </footer>



    </div>
  );
};

export default Song;
