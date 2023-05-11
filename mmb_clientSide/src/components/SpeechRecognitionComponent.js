import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './SRC.css';

function SpeechRecognitionComponent(props) {
  const [recognizedText, setRecognizedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const { transcript, resetTranscript } = useSpeechRecognition({
    language: selectedLanguage,
  });
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
    return <div className="error">Your browser does not support speech recognition.</div>;
  }
  props.sendVariable(recognizedText);
  return (
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
        <button className="button" onClick={handleListen}>Start Speaking</button>
        <button className="button" onClick={SpeechRecognition.stopListening}>Stop Speaking</button>
      </div>
      <div className="recognized-text">{recognizedText}</div>
      <div className="transcript">{transcript}</div>
    </div>
  );
}

export default SpeechRecognitionComponent;
