import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GetSongsAction } from "../actions/songs";
import full_logo from "../media/full_logo.PNG";
import "./Moodselect.css";
import Song from "./Song";

const Moodselect = ({ OnclickTag }) => {
  const OnclickGo = (e) => {
    e.preventdefault();
    console.log(e.values);
  };

  return (
    <div id="page_color">
      <header id="header_song">
        <img src={full_logo} id="head_img" />
      </header>
      <form id="form_fill">
        <label id="form_title">How are you feeling?</label>
        <br />
        <input
          id="form_input"
          type="text"
          placeholder="I'm feeling depressed :("
        />
        <button onClick={OnclickGo} type="submit" id="click_button2">
          Go
        </button>
      </form>
      <div id="flex-container">
        <Link to="/song">
          <button
            onClick={() => OnclickTag("sadness")}
            /*Pass sadness to backend*/ id="click_button3"
          >
            Sad
          </button>
          <button
            onClick={() => OnclickTag("joy")}
            /*Pass joy to backend*/ id="click_button3"
          >
            Happy
          </button>
          <button
            onClick={() => OnclickTag("anger")}
            /*Pass anger to backend*/ id="click_button3"
          >
            Angry
          </button>
          <button
            onClick={() => OnclickTag("fear")}
            /*Pass fear to backend*/ id="click_button3"
          >
            Scared
          </button>
          <button
            onClick={() => OnclickTag("love")}
            /*Pass love to backend*/ id="click_button3"
          >
            Loved
          </button>
          <button
            onClick={() => OnclickTag("disgust")}
            /*Pass disgust to backend*/ id="click_button3"
          >
            Stressed
          </button>
        </Link>
        {/* <Song songs={songs} /> */}
      </div>
    </div>
  );
};

export default Moodselect;
