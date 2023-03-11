import React, { useEffect, useState, useLayoutEffect, setState } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaAngleDoubleRight, FaAngleDoubleLeft, FaPause } from "react-icons/fa";
import "./Player.css";
import { ToggleButton } from "react-bootstrap";

const Player = ({ songList, syncCurrSongIndex }) => {
  const [currSongIndex, setCurrSongIndex] = useState(0);
  const [currPlay, setCurrPlay] = useState(1);

  useEffect(() => {}, [currSongIndex]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  // console.log(songList);
  const shuffledSong = songList;
  //Resuffle song=TODO
  const playNextSong = () => {
    if (currSongIndex < shuffledSong.length - 1) {
      setCurrSongIndex(1 + currSongIndex);
      syncCurrSongIndex(1 + currSongIndex, currPlay);
    } else {
      setCurrSongIndex(0);
      syncCurrSongIndex(0, currPlay);
    }
  };
  const playLastSong = () => {
    if (currSongIndex < shuffledSong.length - 1) {
      setCurrSongIndex(currSongIndex - 1);
      syncCurrSongIndex(currSongIndex - 1, currPlay);
    } else {
      setCurrSongIndex(0);
      syncCurrSongIndex(0, currPlay);
    }
  };

  // useEffect(() => {
  //   document.title = "Now Playing | MakeMyBrain"
  // }, [])

  // Play and pause button
  const [playing, setPlaying] = useState(1);
  function play_pause() {
    if (playing === 1) {
      setPlaying(0);
      syncCurrSongIndex(currSongIndex, 0);
    } else {
      setPlaying(1);
      syncCurrSongIndex(currSongIndex, 1);
    }
  }

 
  
  // //Extracting all songs name
  // let songtitleList = [];
  // for (let i = 0; i < songList.length; i++) {
  //   console.log(songList[i].title);
  //   songtitleList[i] = songList[i].title;
  // }

  // const TitleList = songList.map(songList => <>{songList.title}</>)
  return (
    <div id="player-box">
      <ReactPlayer
        className="react_player"
        /*onEnded={}*/ playing={playing}
        width="0px"
        height="0px"
        url={shuffledSong[currSongIndex].lind}
        onEnded={playNextSong}
      />
      <div id="Player-flex">
        <div id="Song_name">{shuffledSong[currSongIndex].title}</div>
        <div id="Singer_name">{shuffledSong[currSongIndex].singer}</div>
      
      <div id="btnSection">
        <button onClick={playLastSong} id="player-btn">
          <FaAngleDoubleLeft />
        </button>
        {playing ? <button onClick={play_pause} id="play-pause-back" className="fa-pause">
          <FaPause id="play-pause"/>
        </button> : <button onClick={play_pause} id="play-pause-back" className="fa-pause">
          <FaPlay id="play-pause"/>
        </button>}
        {/* <button onClick={play_pause} id="play-pause-back" className="fa-pause">
          <FaPause id="play-pause"/>
        </button> */}
        <button onClick={playNextSong} id="player-btn">
          <FaAngleDoubleRight />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Player;
