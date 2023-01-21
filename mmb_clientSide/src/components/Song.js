import React, { useEffect, useState } from "react";
import full_logo from "../media/full_logo.PNG";
import "./Song.css";
import ReactPlayer from "react-player";

const Song = ({ song }) => {
  const [currSongIndex, setCurrSongIndex] = useState(0);

  useEffect(() => {}, [currSongIndex]);

  console.log(song);
  const shuffledSong = song.sort((a, b) => 0.5 - Math.random());
  //Resuffle song=TODO
  const playNextSong = () => {
    if (currSongIndex < shuffledSong.length - 1)
      setCurrSongIndex(1 + currSongIndex);
    else setCurrSongIndex(0);
  };
  return (
    <div id="page_color">
      <header id="header_song">
        <img src={full_logo} id="head_img" />
      </header>
      <main>
        <h1 id="song_head">Now Playing</h1>
        <ReactPlayer
          className="react_player"
          /*onEnded={}*/ playing={true}
          width="360px"
          height="0px"
          url={shuffledSong[currSongIndex].lind}
        />
        <div id="player">
          <div id="song_name">{shuffledSong[currSongIndex].title}</div>
          <div id="singer_name">{shuffledSong[currSongIndex].singer}</div>
        </div>
        <button onClick={playNextSong} type="submit" id="click_button">
          Next Song
        </button>
      </main>
    </div>
  );
};

export default Song;
