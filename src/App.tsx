/** @jsx jsx */
/*
 * Built following this tutorial and then changing it to be relevant to
 * TypeScript:
 * https://codeburst.io/lets-build-a-countdown-timer-with-react-part-1-2e7d5692d914
 */
import { jsx } from '@emotion/react';
import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import TimerInput from './TimerInput';
import Timer from './Timer';
import StartButton from './StartButton';
import PauseButton from './PauseButton';
import ResumeButton from './ResumeButton';
import StopButton from './StopButton';
import AppProps from './AppProps';

const DOUBLE_ZEROS = '00';
const INITIAL_MINUTES = '01';
const INITIAL_SECONDS = DOUBLE_ZEROS;
const INITIAL_COUNTDOWN_IN_PROGRESS = false;
const INITIAL_COUNTDOWN_IS_PAUSED = false;

const UnstyledApp: React.FC<AppProps> = (props: AppProps) => {
  const { className } = props;
  const [minutes, setMinutes] = useState(INITIAL_MINUTES);
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const [countDownInProgress, setCountDownInProgress] = useState(
    INITIAL_COUNTDOWN_IN_PROGRESS,
  );
  const [countDownIsPaused, setCountDownIsPaused] = useState(
    INITIAL_COUNTDOWN_IS_PAUSED,
  );
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [intervalHandle, setIntervalHandle] = useState(0);

  const showPauseButton = countDownInProgress && !countDownIsPaused;
  const showResumeButton = countDownInProgress && countDownIsPaused;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputElement = event.target as HTMLInputElement;
    const newMinutes = inputElement.value;
    let minutesToSet;

    if (Number(newMinutes) < 10) {
      minutesToSet = `0${newMinutes}`;
    } else {
      minutesToSet = newMinutes;
    }

    setMinutes(minutesToSet);
  };

  const tick = (): void => {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining - minutes * 60;

    if (minutes === 0 && seconds === 0) {
      stopTimer();
    }

    // String conversion comes from https://stackoverflow.com/a/32607656/249218
    let secondsToSet = String(seconds);

    if (seconds < 10) {
      secondsToSet = `0${secondsToSet}`;
    }

    let minutesToSet = String(minutes);

    if (minutes < 10) {
      minutesToSet = `0${minutesToSet}`;
    }

    setSeconds(secondsToSet);
    setSecondsRemaining(secondsRemaining - 1);
  };

  const startCountDown = (): void => {
    setCountDownInProgress(true);
    startTimer();

    const time = Number(minutes);

    setSecondsRemaining(time * 60);
  };

  const pauseCountDown = (): void => {
    setCountDownIsPaused(true);
    stopTimer();
  };

  const resumeCountDown = (): void => {
    setCountDownIsPaused(false);
    startTimer();
  };

  const stopCountDown = (): void => {
    setCountDownInProgress(false);
    stopTimer();
    setMinutes(INITIAL_MINUTES);
    setSeconds(INITIAL_SECONDS);
    setCountDownInProgress(INITIAL_COUNTDOWN_IN_PROGRESS);
    setCountDownIsPaused(INITIAL_COUNTDOWN_IS_PAUSED);
  };

  const startTimer = (): void => {
    setIntervalHandle(window.setInterval(tick, 1000));
  };

  const stopTimer = (): void => {
    if (intervalHandle != null) {
      clearInterval(intervalHandle);
      setIntervalHandle(0);
    }
  };

  return (
    <div className={className}>
      <TimerInput
        className={className}
        minutes={minutes}
        handleChange={handleChange}
        disabled={countDownInProgress}
      />
      <Timer minutes={minutes} seconds={seconds} />
      <div>
        <StartButton className={className} handleClick={startCountDown} />
        <PauseButton
          className={className}
          visible={showPauseButton}
          handleClick={pauseCountDown}
        />
        <ResumeButton
          className={className}
          visible={showResumeButton}
          handleClick={resumeCountDown}
        />
        <StopButton className={className} handleClick={stopCountDown} />
      </div>
    </div>
  );
};

const App = styled(UnstyledApp)`
  text-align: center;
`;

export default App;
