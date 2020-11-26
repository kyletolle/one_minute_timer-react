/** @jsx jsx */
/*
 * Built following this tutorial and then changing it to be relevant to
 * TypeScript:
 * https://codeburst.io/lets-build-a-countdown-timer-with-react-part-1-2e7d5692d914
 */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Timer from './Timer';
import StartButton from './StartButton';
import PauseButton from './PauseButton';
import ResumeButton from './ResumeButton';
import StopButton from './StopButton';
import AppProps from './AppProps';

const INITIAL_COUNTDOWN_IN_PROGRESS = false;
const INITIAL_COUNTDOWN_IS_PAUSED = false;
const ONE_MINUTE_IN_MS = 60 * 1_000;

/* First used the timer approach from
 * https://yizhiyue.me/2019/12/08/how-to-create-a-simple-react-countdown-timer
 * but now modifying it using another approach from
 * https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2
 */
const UnstyledApp: React.FC<AppProps> = (props: AppProps) => {
  const { className } = props;
  const [countDownInProgress, setCountDownInProgress] = useState(
    INITIAL_COUNTDOWN_IN_PROGRESS,
  );
  const [countDownIsPaused, setCountDownIsPaused] = useState(
    INITIAL_COUNTDOWN_IS_PAUSED,
  );

  const [timeData, setTimeData] = useState({
    endTimeInMs: 0,
    remainingTimeInMs: 0,
  });

  useEffect(() => {
    const timerInterval = window.setInterval(() => {
      const { endTimeInMs, remainingTimeInMs } = timeData;
      console.log('tick: endTimeInMs', endTimeInMs);
      console.log('tick: remainingTimeInMs', remainingTimeInMs);
      const shouldRun =
        countDownInProgress &&
        !countDownIsPaused &&
        (endTimeInMs !== 0 || remainingTimeInMs !== 0);
      if (!shouldRun) {
        console.log('Should NOT run.');
        return;
      }

      const newRemainingTimeInMs = endTimeInMs - Date.now();
      console.log('tick: newRemainingTimeInMs', newRemainingTimeInMs);

      const newTimeData = Object.assign({}, timeData, {
        remainingTimeInMs: newRemainingTimeInMs,
      });
      setTimeData(newTimeData);
    }, 500);
    return () => clearInterval(timerInterval);
  }, []);

  const resumeCountDown = (): void => {
    setCountDownIsPaused(false);
  };

  const startCountDown = (): void => {
    const now = Date.now();
    const newEndTimeInMs = now + ONE_MINUTE_IN_MS;
    const newTimeData = Object.assign({}, timeData, {
      endTimeInMs: newEndTimeInMs,
      remainingTimeInMs: ONE_MINUTE_IN_MS,
      // timerInterval: startInterval(),
    });
    console.log('startCountDown: newTimeData', newTimeData);
    setTimeData(newTimeData);
    setCountDownInProgress(true);
    setCountDownIsPaused(false);
  };

  const pauseCountDown = (): void => {
    setCountDownIsPaused(true);
  };

  const stopCountDown = (): void => {
    setCountDownInProgress(INITIAL_COUNTDOWN_IN_PROGRESS);
    setCountDownIsPaused(INITIAL_COUNTDOWN_IS_PAUSED);
    const newTimeData = Object.assign({}, timeData, {
      endTimeInMs: 0,
      remainingTimeInMs: 0,
    });
    setTimeData(newTimeData);
  };

  const showPauseButton = countDownInProgress && !countDownIsPaused;
  const showResumeButton = countDownInProgress && countDownIsPaused;

  const { remainingTimeInMs } = timeData;
  console.log('remainingTimeInMs during render', remainingTimeInMs);
  const minutes = ('0' + (Math.floor(remainingTimeInMs / 60_000) % 60)).slice(
    -2,
  );
  const seconds = ('0' + (Math.floor(remainingTimeInMs / 1000) % 60)).slice(-2);

  return (
    <div className={className}>
      {/* <TimerInput
        className={className}
        minutes={minutesToStartWith}
        handleChange={handleChange}
        disabled={countDownInProgress}
      /> */}
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
