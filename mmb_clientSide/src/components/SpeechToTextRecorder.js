import React, { useState, useEffect } from 'react';
import SpeechRecognition from 'react-speech-recognition';

function SpeechToTextRecorder({ transcript, resetTranscript }) {
  const [listening, setListening] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [processing, setProcessing] = useState(false);

  // useEffect(() => {
  //   if (transcript !== '') {
  //     setDisplayText(transcript);
  //     resetTranscript();
  //   }
  // }, [transcript, resetTranscript]);

  

  useEffect(() => {
    let timeoutId;

    if (!listening && displayText) {
      timeoutId = setTimeout(() => {
        setProcessing(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [listening, displayText]);

  return (
    <div>
      <h1>Speech to Text Recorder</h1>
      <p>Click the "Allow" button to grant microphone access.</p>
      <div>
        <p>Spoken Text:</p>
        <div className="text-box">{displayText}</div>
        {processing && <p>Processing your request...</p>}
      </div>
    </div>
  );
}

export default SpeechToTextRecorder;