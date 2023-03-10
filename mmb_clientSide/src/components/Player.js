import React, { useEffect, useState, useLayoutEffect, setState } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import './Player.css'

const Player = ({ songList }) => {
  const [currSongIndex, setCurrSongIndex] = useState(0);

  useEffect(() => { }, [currSongIndex]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }

  );
  console.log(songList);
  const shuffledSong = songList;
  //Resuffle song=TODO
  const playNextSong = () => {
    if (currSongIndex < shuffledSong.length - 1)
      setCurrSongIndex(1 + currSongIndex);
    else setCurrSongIndex(0);
  };
  const playLastSong = () => {
    if (currSongIndex < shuffledSong.length - 1)
      setCurrSongIndex(currSongIndex - 1);
    else setCurrSongIndex(0);
  };

  // useEffect(() => {
  //   document.title = "Now Playing | MakeMyBrain"
  // }, [])

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
  // //Extracting all songs name
  // let songtitleList = [];
  // for (let i = 0; i < songList.length; i++) {
  //   console.log(songList[i].title);
  //   songtitleList[i] = songList[i].title;
  // }

  // const TitleList = songList.map(songList => <>{songList.title}</>)
  return (
    <div id='player-box'>
      <ReactPlayer
        className="react_player"
          /*onEnded={}*/ playing={playing}
        width="0px"
        height="0px"
        url={shuffledSong[currSongIndex].lind}
        onEnded={playNextSong}
      />
      <div id="Player">
        <div id="Song_name">{shuffledSong[currSongIndex].title}</div>
        <div id="Singer_name">{shuffledSong[currSongIndex].singer}</div>
      </div>
      <div id="btnSection">
        <button onClick={playLastSong}><FaAngleDoubleLeft /></button>
        <button onClick={play_pause} ><FaPlay /></button>
        <button onClick={playNextSong}><FaAngleDoubleRight /></button>
      </div>
    </div>
  )
}

export default Player