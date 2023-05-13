import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/Aboutus";
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
import SignupPage from './pages/Signup';
import StoryPage from "./pages/StoryPage";
import Private from "./components/PrivateSignup";
import Otp from "./pages/Otp";
import Openup from "./pages/Openup";
import OpenupText from "./pages/OpenupText";
import OpenupSpeak from "./pages/OpenupSpeak";
import Category from "./pages/Category";
import Friends from "./pages/Categories/Friends";
import Parents from "./pages/Categories/Parents";
import Relationships from "./pages/Categories/Relationships";
import Parenting from "./pages/Categories/Parenting";
import Colleagues from "./pages/Categories/Colleagues";
import Lifestyle from "./pages/Categories/Lifestyle";
import Loneliness from "./pages/Categories/Loneliness";
import Marriage from "./pages/Categories/Marriage";
import AllCategorisBlogs from "./pages/Categories/AllCategoriesBlogs"


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
          <Route path="/faq" element={<Faq />} />
          <Route path="/song" element={<Song song={songs} />} />
          <Route path="/mood" element={<Moodselect OnclickTag={OnclickTag} />}
          />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companion" element={<Private><Companion /></Private>} />
          <Route path="/therapist" element={<Private><Therapist /></Private>} />
          <Route path="/Story/:index" element={<Story />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/stories" element={<StoryPage />} />
          <Route path="/cdc" element={<StoryPage />} />
          <Route path="/openup" element={<Private><Openup /></Private>} />
          <Route path="/openup/text" element={<Private><OpenupText /></Private>} />
          <Route path="/openup/speak" element={<Private><OpenupSpeak /></Private>} />
          <Route path="/category" element={<Private><Category /></Private>} />
          <Route path="/category/friends" element={<Private><Friends /></Private>} />
          <Route path="/category/parents" element={<Private><Parents /></Private>} />
          <Route path="/category/relationships" element={<Private><Relationships /></Private>} />
          <Route path="/category/parenting" element={<Private><Parenting /></Private>} />
          <Route path="/category/colleagues" element={<Private><Colleagues /></Private>} />
          <Route path="/category/lifestyle" element={<Private><Lifestyle /></Private>} />
          <Route path="/category/loneliness" element={<Private><Loneliness /></Private>} />
          <Route path="/category/marriage" element={<Private><Marriage /></Private>} />
          <Route path="/All" element={<Private><AllCategorisBlogs /></Private>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
