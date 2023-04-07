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
import Companion from "./components/Companion"
import Therapist from "./components/Therapist"
import { useState } from "react";
import { GetSongsAction } from "./actions/songs";
import { Users } from "./components/Users";
import Story from "./components/Story";
import LoginPage from './pages/Login';
import StoryPage from "./pages/StoryPage";
import Otp from "./pages/Otp";


function App() {
  const [songs, setSongs] = useState([
    {
      lind: "https://youtu.be/BddP6PYo2gs",
      singer: "...",
      title: "Rendering",
    },
  ]);

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
    console.log(AllSongsState);
    if (Allsongs) {
      setSongs(AllSongsState);
    }
    console.log(songs);
  };
  const shuffledSong = songs.sort((a, b) => 0.5 - Math.random())
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/song" element={<Song song={songs} />} />
          <Route path="/mood" element={<Moodselect OnclickTag={OnclickTag} />}
          />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companion" element={<Companion />} />
          <Route path="/therapist" element={<Therapist />} />
          <Route path="/Story" element={<Story />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/Storypage" element={<StoryPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
