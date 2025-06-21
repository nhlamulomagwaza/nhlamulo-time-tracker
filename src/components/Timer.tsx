// src/components/Timer.tsx

import React, { useContext } from 'react';
import { AppContext } from '../store/TimeEntriesContext.tsx';
import { type AppContextType } from '../types/index.ts';
import toast from 'react-hot-toast';
import '../styles/components/timer.scss'; // Timer styling

const Timer: React.FC = () => {
  const {
    isTimerRunning,
    currentTimerTaskName,
    elapsedSeconds,
    startTimer,
    stopTimer,
    resetTimer,
    addTimeEntry,
    taskName,
    setTaskName,
    setHours
  } = useContext(AppContext as React.Context<AppContextType>);

  // Format elapsed seconds into HH:MM:SS
  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  // Start timer with task name from input field
  const handleStart = () => {
    if (!taskName.trim()) {
      toast.error('Please enter a task name to start the timer!');
      return;
    }

    startTimer(taskName.trim());
    setTaskName('');
    setHours('');
  };

  // Stop the timer without logging
  const handleStop = () => {
    stopTimer();
  };

  // Log the current timer as a time entry
  const handleLogTime = () => {
    if (elapsedSeconds > 0 && currentTimerTaskName) {
      const hoursToLog = parseFloat((elapsedSeconds / 3600).toFixed(2));
      addTimeEntry(currentTimerTaskName, hoursToLog);
      resetTimer();

      toast.success(`Logged ${hoursToLog} hours for "${currentTimerTaskName}"`);
    } else {
      toast.error('No time to log or task name missing!');
    }
  };

  return (
    <div className="timer-container">
      <h3>You can also add tasks via a timer</h3>

      {/* Task name + time elapsed */}
      <div className="timer-display">
        <span className="timer-task-name">
          {currentTimerTaskName || 'No Active Task'}
        </span>
        <span className="timer-time">{formatTime(elapsedSeconds)}</span>
      </div>

      {/* Timer buttons */}
      <div className="timer-controls">
        {!isTimerRunning ? (
          <button className="btn btn-start" onClick={handleStart}>
            Start Timer
          </button>
        ) : (
          <>
            <button className="btn btn-stop" onClick={handleStop}>
              Stop Timer
            </button>
            <button
              className="btn btn-log"
              onClick={handleLogTime}
              disabled={elapsedSeconds === 0}
            >
              Log Time
            </button>
            <button className="btn btn-reset" onClick={resetTimer}>
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Timer;
