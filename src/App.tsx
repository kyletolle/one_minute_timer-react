// Built following this tutorial and then changing it to be relevant to TypeScript:
// https://codeburst.io/lets-build-a-countdown-timer-with-react-part-1-2e7d5692d914
import React, { ChangeEvent, MouseEventHandler } from 'react';
import './App.css';

// Found this at https://stackoverflow.com/a/14639219/249218
type EventCallback = (e: ChangeEvent<HTMLInputElement>) => void;

export interface TimerInputProps { 
  minutes: string,
  handleChange: EventCallback
}
export interface TimerInputState { number: number }

class TimerInput extends React.Component<TimerInputProps, TimerInputState> {
  render() {
    return (
      <div style={{ marginLeft:100 }}>
        <h3>Input your desired time</h3>
        <input 
          type="number"
          min="0"
          value={this.props.minutes}
          onChange={this.props.handleChange}
          required
        />
      </div>
    );
  }
}

export interface TimerProps {
   minutes: string,
  seconds: string
}

class Timer extends React.Component<TimerProps> {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100, marginLeft: 100 }}>
          {this.props.minutes}:{this.props.seconds}
        </h1>
      </div>
    );
  }
}

export interface StartButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>
}

class StartButton extends React.Component<StartButtonProps> {
  render() {
    return(
      <div style={{ marginLeft: 100 }}>
        <button onClick={this.props.handleClick}>Start</button>
      </div>
    )
  }
}

export interface AppProps { }
export interface AppState {
  seconds: string,
  minutes: string
}

class App extends React.Component<AppProps, AppState> {
  secondsRemaining: number;
  intervalHandle?: NodeJS.Timeout;

  readonly DOUBLE_ZEROS = '00';
  readonly INITIAL_STATE = {
      seconds: this.DOUBLE_ZEROS,
      minutes: this.DOUBLE_ZEROS
  }

  constructor(props: AppProps) {
    super(props);

    this.state = this.INITIAL_STATE;

    this.secondsRemaining = 0;

    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    let minutesToSet = (event.target as HTMLInputElement).value || '0';
    this.setState({
      minutes: minutesToSet
    })
  }

  tick() {
    let minutes = Math.floor(this.secondsRemaining / 60)
    let seconds = this.secondsRemaining - (minutes * 60);

    if (minutes === 0 && seconds === 0) {
      if (this.intervalHandle != null) {
        clearInterval(this.intervalHandle);
      }
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
    this.intervalHandle = setInterval(this.tick, 1000);

    let time = Number(this.state.minutes);

    this.secondsRemaining = time * 60;
  }

  render() {
    return (
      <div className="App">
        <TimerInput minutes={this.state.minutes} handleChange={this.handleChange} />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <StartButton handleClick={this.startCountDown} />
      </div>
    );
  }
}

export default App;
