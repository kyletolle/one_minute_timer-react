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

/** First used the timer approach from
 * https://yizhiyue.me/2019/12/08/how-to-create-a-simple-react-countdown-timer
 * but now modifying it using another approach from
 * https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2
 */
const UnstyledApp: React.FC<AppProps> = (props: AppProps) => {
  const { className } = props;

  /**
   * Tracking state with an approach like found at
   * https://stackoverflow.com/a/58976086/249218
   */
  const [timeData, setTimeData] = useState({
    countDownInProgress: INITIAL_COUNTDOWN_IN_PROGRESS,
    countDownIsPaused: INITIAL_COUNTDOWN_IS_PAUSED,
    endTimeInMs: 0,
    remainingTimeInMs: 0,
  });

  /**
   * Clean up interval when component is unmounted like mentioned at
   * https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
   * and
   * https://reactgo.com/react-setinterval/
   */
  useEffect(() => {
    const timerInterval = window.setInterval(tick, 25);
    return () => clearInterval(timerInterval);
  });

  const tick = () => {
    let {
      countDownInProgress,
      countDownIsPaused,
      endTimeInMs,
      remainingTimeInMs,
    } = timeData;
    const newRemainingTimeInMs = endTimeInMs - Date.now();
    // console.log('tick: newRemainingTimeInMs', newRemainingTimeInMs);

    if (remainingTimeInMs < 0) {
      pauseCountDown();
      stopCountDown();
      return;
    }

    const shouldRun =
      countDownInProgress &&
      !countDownIsPaused &&
      (endTimeInMs > 0 || remainingTimeInMs > 0);
    if (!shouldRun) {
      // console.log('Should NOT run.');
      return;
    }

    const newTimeData = Object.assign({}, timeData, {
      remainingTimeInMs: newRemainingTimeInMs,
    });
    setTimeData(newTimeData);
  };

  const resumeCountDown = (): void => {
    const now = Date.now();
    const newEndTimeInMs = now + remainingTimeInMs;
    const newTimeData = Object.assign({}, timeData, {
      endTimeInMs: newEndTimeInMs,
      countDownIsPaused: false,
    });
    setTimeData(newTimeData);
  };

  const startCountDown = (): void => {
    const now = Date.now();
    const newEndTimeInMs = now + ONE_MINUTE_IN_MS;
    const newTimeData = Object.assign({}, timeData, {
      countDownInProgress: true,
      countDownIsPaused: false,
      endTimeInMs: newEndTimeInMs,
      remainingTimeInMs: ONE_MINUTE_IN_MS,
    });
    setTimeData(newTimeData);
    console.log('startCountDown: newTimeData', newTimeData);
  };

  const pauseCountDown = (): void => {
    // TODO: Currently broken. We need to set a
    const newTimeData = Object.assign({}, timeData, {
      countDownIsPaused: true,
    });
    setTimeData(newTimeData);
  };

  const stopCountDown = (): void => {
    const newTimeData = Object.assign({}, timeData, {
      countDownInProgress: INITIAL_COUNTDOWN_IN_PROGRESS,
      countDownIsPaused: INITIAL_COUNTDOWN_IS_PAUSED,
      endTimeInMs: 0,
      remainingTimeInMs: 0,
    });
    setTimeData(newTimeData);
  };

  const {
    countDownInProgress,
    countDownIsPaused,
    remainingTimeInMs,
  } = timeData;
  const showPauseButton = countDownInProgress && !countDownIsPaused;
  const showResumeButton = countDownInProgress && countDownIsPaused;

  let remainingTimeToUse = remainingTimeInMs;
  if (remainingTimeToUse <= 0) {
    remainingTimeToUse = ONE_MINUTE_IN_MS;
  }
  const minutes = ('0' + (Math.floor(remainingTimeToUse / 60_000) % 60)).slice(
    -2,
  );
  const seconds = ('0' + (Math.floor(remainingTimeToUse / 1000) % 60)).slice(
    -2,
  );
  let centiseconds = ('0' + (Math.floor(remainingTimeToUse / 10) % 100)).slice(
    -2,
  );

  return (
    <div className={className}>
      {/* <TimerInput
        className={className}
        minutes={minutesToStartWith}
        handleChange={handleChange}
        disabled={countDownInProgress}
      /> */}
      <Timer
        className={className}
        minutes={minutes}
        seconds={seconds}
        centiseconds={centiseconds}
      />
      <div>
        {!countDownInProgress && (
          <StartButton className={className} handleClick={startCountDown} />
        )}
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
        {countDownInProgress && (
          <StopButton className={className} handleClick={stopCountDown} />
        )}
      </div>
    </div>
  );
};

const App = styled(UnstyledApp)`
  text-align: center;
`;

export default App;
