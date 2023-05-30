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
import Pricing from "./pages/Pricing";


function App() {
  const [songs, setSongs] = useState([
    {
      lind: "https://youtu.be/BddP6PYo2gs",
      singer: "...",
      title: "Rendering",
    },
  ]);

  //Function for Api call in after 20 min automatically
  function callLinkRepeatedly() {
    fetch('https://mmb-auth.onrender.com', {
      method: 'GET', // or 'POST' if required
      // Additional headers or body if necessary
    })
      .then(response => {
        // Process the response if needed
        console.log('Link called successfully.');
      })
      .catch(error => {
        // Handle any errors
        console.error('Error calling the link:', error);
      });
    setTimeout(callLinkRepeatedly, 20 * 60 * 1000);
  }

  // Start the initial call
  callLinkRepeatedly();

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
          <Route path="/therapist" element={<Therapist />} />
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
          <Route path="/pricing" element={<Pricing />} />


          {/* <Route path="/jobs" element={<Jobs />} />
          <Route path="/companion" element={<Companion />} />
          <Route path="/therapist" element={<Therapist />} />
          <Route path="/Story/:index" element={<Story />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/stories" element={<StoryPage />} />
          <Route path="/cdc" element={<StoryPage />} />
          <Route path="/openup" element={<Openup />} />
          <Route path="/openup/text" element={<OpenupText />} />
          <Route path="/openup/speak" element={<OpenupSpeak />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/friends" element={<Friends />} />
          <Route path="/category/parents" element={<Parents />} />
          <Route path="/category/relationships" element={<Relationships />} />
          <Route path="/category/parenting" element={<Parenting />} />
          <Route path="/category/colleagues" element={<Colleagues />} />
          <Route path="/category/lifestyle" element={<Lifestyle />} />
          <Route path="/category/loneliness" element={<Loneliness />} />
          <Route path="/category/marriage" element={<Marriage />} />
          <Route path="/All" element={<AllCategorisBlogs />} />
          <Route path="/pricing" element={<Pricing />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
