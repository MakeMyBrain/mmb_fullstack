import React, { useState, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetSongsAction } from "../actions/songs";
import full_logo from "../media/full_logo.PNG";
import "./Moodselect.css";
import Song from "./Song";
import NavbarComp from './Navbar2'
import Footer from './Footer'

const Moodselect = ({ OnclickTag }) => {
  const OnclickGo = (e) => {
    e.preventdefault();
    console.log(e.values);
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
}
  
  );

  useEffect(() => {
    document.title = "Choose your mood | Music for your mood | MakeMyBrain"
}, [])
  return (
    <div id="newNavFlex">

      <header>
      <NavbarComp></NavbarComp>
      </header>

      
      <div>
      <h1 id="mood_heading">How are you feeling?</h1>
      <div id="flex-container">
        <Link to="/song">
          <button style={{background:'#6f0025'}}
            onClick={() => OnclickTag("sadness")}
            /*Pass sadness to backend*/ id="click_button3"
          >
            Sad
          </button>
          <button style={{background:'#cc9c00'}}
            onClick={() => OnclickTag("joy")}
            /*Pass joy to backend*/ id="click_button3"
          >
            Happy
          </button>
          <button style={{background:'#150074'}}
            onClick={() => OnclickTag("anger")}
            /*Pass anger to backend*/ id="click_button3"
          >
            Angry
          </button>
          <button style={{background:'#005b38'}}
            onClick={() => OnclickTag("fear")}
            /*Pass fear to backend*/ id="click_button3"
          >
            Scared
          </button>
          <button style={{background:'#003078'}}
            onClick={() => OnclickTag("love")}
            /*Pass love to backend*/ id="click_button3"
          >
            Loved
          </button>
          <button style={{background:'#75007b'}}
            onClick={() => OnclickTag("disgust")}
            /*Pass disgust to backend*/ id="click_button3"
          >
            Stressed
          </button>
        </Link>
      </div>  
      </div>
 
    </div>
  );
};

export default Moodselect;
