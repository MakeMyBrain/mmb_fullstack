import React, { useEffect, useState, useLayoutEffect, setState } from "react";
import full_logo from "../media/full_logo.PNG";
import "./Song.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import NavbarComp from "./Navbar2";
import Navbar3 from "./Navbar3";
import Footer from "./Footer";
import Chatapp from "./Chatapp";
import Chat from "./Chat";
import kaira from "../media/kaira.png";
import Player from "./Player";

let done = false;

const Song = ({ song, syncCurrSongIndex }) => {
  // const [currSongIndex, setCurrSongIndex] = useState();
  // const [currPlay, setCurrPlay] = useState(1);

  // const syncCurrSongIndex = (index, isPlaying) => {
  //   // console.log("Syncing...");
  //   setCurrSongIndex(index);
  //   setCurrPlay(isPlaying);
  //   // console.log(currSongIndex, isPlaying);
  // };

  useEffect(() => {
    document.title = "Now Playing | MakeMyBrain";
    // console.log(song[currSongIndex]);
    // console.log(currPlay);
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  // console.log(song);
  const shuffledSong = song;
  // //Resuffle song=TODO
  // const playNextSong = () => {
  //   if (currSongIndex < shuffledSong.length - 1)
  //     setCurrSongIndex(1 + currSongIndex);
  //   else setCurrSongIndex(0);
  // };

  // Play and pause button
  // const [playing, setPlaying] = useState(1);
  // function play_pause() {
  //   if (playing === 1) {
  //     setPlaying(0);
  //   } else {
  //     setPlaying(1);
  //   }
  // }

  let songtitleList = [];
  for (let i = 0; i < song.length; i++) {
    // console.log(song[i].title);
    songtitleList[i] = song[i].title;
  }

  const TitleList = song.map((song) => (
    <div className="playlist-items">
      {song.title}
      <br />
    </div>
  ));

  return (
    <div id="newNavFlex2">
      <header>
        <NavbarComp></NavbarComp>
      </header>
      <main id="song_chat">
        <div>
          <h1 id="song_heading">Your Playlist</h1>
          {/* 
          <ReactPlayer
            className="react_player"
            playing={playing}
            width="360px"
            height="0px"
            url={shuffledSong[currSongIndex].lind}
            onEnded={playNextSong}
          />
          <div id="player">
            <div id="song_name">{shuffledSong[currSongIndex].title}</div>
            <div id="singer_name">{shuffledSong[currSongIndex].singer}</div>
          </div>
          <button onClick={play_pause} id="click_button">
            Play | Pause
          </button>
          <button onClick={playNextSong} type="submit" id="click_button">
            Next Song
          </button>
         */}
          {/*<div id="chat-window">
        <Chatapp></Chatapp>
</div>*/}
          <div id="playlist-box">{TitleList}</div>
        </div>
      </main>
      <footer className="nav3">
        <Navbar3></Navbar3>
      </footer>

      <footer id="player-box">
        <Player
          songList={shuffledSong}
          syncCurrSongIndex={syncCurrSongIndex}
        ></Player>
      </footer>
    </div>
  );
};

export default Song;
