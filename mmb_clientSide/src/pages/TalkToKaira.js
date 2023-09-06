import React, { useEffect, useLayoutEffect } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import mic from "../media/podcast.png";
import "./Openup.css";
import NavbarComp from "../components/Navbar";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
import { useState } from "react";
import SearchBlogFromQuery from "../searchAlgorithm/search-query";
import SpeechRecognitionComponent from "../components/SpeechRecognitionComponent";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import getResponse from "../actions/kaira";
import speak from "../controllers/kaira";

const TalkToKaira = () => {
  const [recognizedText, setRecognizedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [displayedTranscript, setDisplayedTranscript] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition({
    language: selectedLanguage,
  });

  useEffect(() => {
    setDisplayedTranscript(transcript);
  }, [transcript]);

  const [messagest1, setMessagest1] = useState([
    {
      role: "system",
      content: "Be sympathetic to the user. write only 5-6 words",
    },
  ]);
  const [messagest2, setMessagest2] = useState([
    {
      role: "system",
      content:
        "Give answers in 10-15 words. Gently Ask counter questions over what the user has told. Do not show sympathy.",
    },
  ]);
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  //childVariable containg the text given by user
  // useEffect(() => {
  //   document.title = "Speak - Express your Emotions | MakeMyBrain"
  //   const chaplusi = await getResponse(1,messagest1);
  //   await speak(chaplusi);
  //   const reply = await getResponse(1,messagest1);
  //   let temp1=messagest1;
  //   let temp2=messagest2;
  //   temp1.append({'role':'system','content':reply})
  //   temp2.append({'role':'system','content':reply})
  //   setMessagest1(temp1)
  //   setMessagest2(temp2)
  //   await speak(reply);
  // }, [recognizedText])
  useEffect(() => {
    const fetchData = async () => {
      try {
        document.title = "Talk to Kaira | MakeMyBrain";
        const temp11 = [...messagest1, { role: "user", content: transcript }];
        const temp22 = [...messagest2, { role: "user", content: transcript }];
        setMessagest1(temp11);
        setMessagest2(temp22);
        const chaplusi = await getResponse(1, messagest1);
        // await speak(chaplusi);
        
        const reply = await getResponse(2, messagest2);

        console.log(reply + `hey`);

        if(!reply)return
        const temp1 = [...messagest1, { role: "system", content: reply }];
        const temp2 = [...messagest2, { role: "system", content: reply }];
        // console.log("TestPrint1: ",temp1)
        // console.log("TestPrint2: ",temp2)

        setMessagest1(temp1);
        setMessagest2(temp2);

        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(reply);

         // Find and set a female voice. You may need to customize this based on available voices in your browser.
        const voices = speechSynthesis.getVoices();
        const femaleVoice = voices.find((voice) => voice.name.includes("Female"));

        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }

        // You can customize the voice and other settings here if needed
        utterance.lang = selectedLanguage;

        // Event handler when speech finishes
        utterance.onend = () => {
          // Handle any actions after speech playback ends
        };

        // Start speech synthesis
        speechSynthesis.speak(utterance);

        await speak(reply);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [recognizedText]);

  const handleListen = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return;
    }

    SpeechRecognition.startListening({
      continuous: true,
      language: selectedLanguage,
    });
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="error">
        Your browser does not support speech recognition.
      </div>
    );
  }

  const handleChildVariable2 = () => {
    setRecognizedText(transcript);
    console.log(transcript);
    setDisplayedTranscript("");
  };

  return (
    <div>
      <NavbarComp></NavbarComp>
      <div className="openup-container">
        <h1 id="openup-head">Open Up</h1>

        <div id="openup-subhead-speak">
          Select your preferred language to start speaking.
        </div>
        {/* <SpeechRecognitionComponent sendVariable={handleChildVariable} /> */}

        <div className="speech-container">
          <div className="dropdown">
            <select
              className="language-select"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="en-US">English (US)</option>
              <option value="en-GB">English (UK)</option>
              <option value="hi-IN">Hindi</option>
              <option value="bn-IN">Bengali</option>
              <option value="ta-IN">Tamil</option>
              <option value="te-IN">Telugu</option>
              <option value="mr-IN">Marathi</option>
              <option value="gu-IN">Gujarati</option>
              <option value="kn-IN">Kannada</option>
            </select>
          </div>
          <div className="button-container">
            <button
              className="button"
              onClick={handleListen}
            >
              Start Speaking
            </button>
            <button
              className="button"
              onClick={SpeechRecognition.stopListening}
            >
              Stop Speaking
            </button>
          </div>
          <div className="transcript">{displayedTranscript}</div>
        </div>

        <Link
          to="/openup/text"
          className="openup-express"
        >
          Type
        </Link>
        <div
          className="openup-express"
          onClick={handleChildVariable2}
        >
          Next
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TalkToKaira;
