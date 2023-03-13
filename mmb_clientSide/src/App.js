import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/Aboutus";
import Blog from "./components/Blogs";
import Faq from "./components/Faq";
import Moodselect from "./components/Moodselect";
import Song from "./components/Song";
import Jobs from "./components/Jobs";
import Companion from "./components/Companion";
import Therapist from "./components/Therapist";
import { useState } from "react";
import { GetSongsAction } from "./actions/songs";
import Dialogflow from "./components/Dialogflow";
import Dialoghook from "./components/Dialoghook";
import Blogs from "./components/Blogs";
import Dashboard from "./components/Dashboard";

function App() {
  const [songs, setSongs] = useState([
    {
      lind: "https://youtu.be/BddP6PYo2gs",
      singer: "...",
      title: "Rendering",
    },
  ]);

  const [currSongIndex, setCurrSongIndex] = useState(0);
  const [currPlay, setCurrPlay] = useState(1);

  const syncCurrSongIndex = async (index, isPlaying) => {
    console.log("Syncing...");
    await setCurrSongIndex(index);
    await setCurrPlay(isPlaying);
    console.log(currSongIndex, currPlay);
  };

  //TODO: suffle array
  const OnclickTag = async (tag) => {
    const Allsongs = await GetSongsAction({}, tag);
    let AllSongsState = [];
    Allsongs.forEach((s, i) => {
      AllSongsState.push({
        lind: Allsongs[i].URL,
        singer: Allsongs[i].singer,
        title: Allsongs[i].title,
      });
    });
    // console.log(AllSongsState);
    if (Allsongs) {
      AllSongsState.sort((a, b) => 0.5 - Math.random());
      setSongs(AllSongsState);
    }
    // console.log(songs);
  };
  // songs.sort((a, b) => 0.5 - Math.random());
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/song"
            element={
              <Song song={songs} syncCurrSongIndex={syncCurrSongIndex} />
            }
          />
          <Route
            path="/mood"
            element={<Moodselect OnclickTag={OnclickTag} />}
          />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companion" element={<Companion />} />
          <Route path="/therapist" element={<Therapist />} />
          <Route path="/chat" element={<Dialogflow />} />
          <Route path="/hook" element={<Dialoghook />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
