import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [time, setTime] = useState(5 * 60); // 5 minutes in seconds
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setIsTimeUp(true);
    }
  }, [time]);

  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');

  return (
    <div className="timer-container">
      {isTimeUp ? (
        <div className="time-up">Time's up!</div>
      ) : (
        <div className="time">
          <div className="time-minutes">{minutes}</div>
          <div className="time-divider">:</div>
          <div className="time-seconds">{seconds}</div>
        </div>
      )}
    </div>
  );
}

export default Timer;
