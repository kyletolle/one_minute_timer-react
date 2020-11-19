/** @jsx jsx */
// Built following this tutorial and then changing it to be relevant to TypeScript:
// https://codeburst.io/lets-build-a-countdown-timer-with-react-part-1-2e7d5692d914
import { jsx } from '@emotion/react'
import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled'
import { TimerInput } from './TimerInput';
import { Timer } from './Timer';
import StartButton from './StartButton';
import { PauseButton } from './PauseButton';
import ResumeButton from './ResumeButton';
import StopButton from './StopButton';
import { AppProps } from './AppProps';
import { AppState } from './AppState';

class UnstyledApp extends React.Component<AppProps, AppState> {
  secondsRemaining: number;
  intervalHandle?: NodeJS.Timeout;

  readonly DOUBLE_ZEROS = '00';
  readonly INITIAL_STATE = {
      minutes: '01',
      seconds: this.DOUBLE_ZEROS,
      countDownInProgress: false,
      countDownIsPaused: false,
  }

  constructor(props: AppProps) {
    super(props);

    this.state = this.INITIAL_STATE;

    this.secondsRemaining = 0;

    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.pauseCountDown = this.pauseCountDown.bind(this);
    this.resumeCountDown = this.resumeCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    let inputElement = (event.target as HTMLInputElement);
    let newMinutes = inputElement.value;
    let minutesToSet;
    if (Number(newMinutes) < 10) {
      minutesToSet = "0" + newMinutes;
    } else {
      minutesToSet = newMinutes;
    }

    this.setState({
      minutes: minutesToSet
    });
  }

  tick() {
    let minutes = Math.floor(this.secondsRemaining / 60);
    let seconds = this.secondsRemaining - (minutes * 60);

    if (minutes === 0 && seconds === 0) {
      this.stopTimer();
    }

    // String conversion comes from https://stackoverflow.com/a/32607656/249218
    let secondsToSet = String(seconds);
    if (seconds < 10) {
      secondsToSet = "0" + secondsToSet;
    }

    let minutesToSet = String(minutes);
    if (minutes < 10) {
      minutesToSet = "0" + minutesToSet;
    }

    this.setState({
      minutes: minutesToSet,
      seconds: secondsToSet
    });

    this.secondsRemaining--;
  }

  startCountDown() {
    this.setState({ countDownInProgress: true })
    this.startTimer();

    let time = Number(this.state.minutes);

    this.secondsRemaining = time * 60;
  }

  pauseCountDown() {
    this.setState({ countDownIsPaused: true })
    this.stopTimer();
  }

  resumeCountDown() {
    this.setState({ countDownIsPaused: false })
    this.startTimer();
  }

  stopCountDown() {
    this.setState({ countDownInProgress: false })
    this.stopTimer();
    this.setState(this.INITIAL_STATE);
  }

  private startTimer() {
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  private stopTimer() {
    if (this.intervalHandle != null) {
      clearInterval(this.intervalHandle);
    }
  }

  render() {
    let showPauseButton = this.state.countDownInProgress && !this.state.countDownIsPaused;
    let showResumeButton = this.state.countDownInProgress && this.state.countDownIsPaused;

    return (
      <div className={this.props.className}>
        <TimerInput
          minutes={this.state.minutes}
          handleChange={this.handleChange}
          disabled={this.state.countDownInProgress}
        />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <div>
          <StartButton className={this.props.className} handleClick={this.startCountDown} />
          <PauseButton
            visible={showPauseButton}
            handleClick={this.pauseCountDown}
          />
          <ResumeButton
            visible={showResumeButton}
            handleClick={this.resumeCountDown}
            className={this.props.className}
          />
          <StopButton className={this.props.className} handleClick={this.stopCountDown} />
        </div>
      </div>
    );
  }
}

const App = styled(UnstyledApp)`
  text-align: center;
`;

export default App;
