/** @jsx jsx */
/*
 * Built following this tutorial and then changing it to be relevant to
 * TypeScript:
 * https://codeburst.io/lets-build-a-countdown-timer-with-react-part-1-2e7d5692d914
 */
import { jsx } from '@emotion/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
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
  const [minutesToStartWith, setMinutesToStartWith] = useState(INITIAL_MINUTES);
  const [minutes, setMinutes] = useState(INITIAL_MINUTES);
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);
  const [countDownInProgress, setCountDownInProgress] = useState(
    INITIAL_COUNTDOWN_IN_PROGRESS,
  );
  const [countDownIsPaused, setCountDownIsPaused] = useState(
    INITIAL_COUNTDOWN_IS_PAUSED,
  );
  const [secondsRemaining, setSecondsRemaining] = useState(0);

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

    setMinutesToStartWith(minutesToSet);
    setMinutes(minutesToSet);
  };

  // Using timer approach from
  // https://yizhiyue.me/2019/12/08/how-to-create-a-simple-react-countdown-timer
  useEffect(() => {
    if (!countDownInProgress || countDownIsPaused) {
      return;
    }

    const minutesNumber = Math.floor(secondsRemaining / 60);
    const secondsNumber = secondsRemaining - minutesNumber * 60;

    // String conversion comes from https://stackoverflow.com/a/32607656/249218
    let secondsString = String(secondsNumber);
    if (secondsNumber < 10) {
      secondsString = `0${secondsString}`;
    }

    let minutesString = String(minutesNumber);

    if (minutesNumber < 10) {
      minutesString = `0${minutesString}`;
    }
    setMinutes(minutesString);
    setSeconds(secondsString);

    if (countDownInProgress && secondsRemaining > 0) {
      const timer = setInterval(tick, 1000);
      return () => clearInterval(timer);
    } else {
      stopCountDown();
    }
  }, [countDownInProgress, countDownIsPaused, secondsRemaining]);

  const tick = (): void => {
    setSecondsRemaining(secondsRemaining - 1);
  };

  const startCountDown = (): void => {
    setCountDownInProgress(true);
    const time = Number(minutes);
    const newSecondsRemaining = time * 60;
    setSecondsRemaining(newSecondsRemaining);
  };

  const pauseCountDown = (): void => {
    setCountDownIsPaused(true);
  };

  const resumeCountDown = (): void => {
    setCountDownIsPaused(false);
  };

  const stopCountDown = (): void => {
    setSecondsRemaining(0);
    setMinutes(minutesToStartWith);
    setSeconds(INITIAL_SECONDS);
    setCountDownInProgress(INITIAL_COUNTDOWN_IN_PROGRESS);
    setCountDownIsPaused(INITIAL_COUNTDOWN_IS_PAUSED);
  };

  return (
    <div className={className}>
      <TimerInput
        className={className}
        minutes={minutesToStartWith}
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
