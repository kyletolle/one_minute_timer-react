// Built following this tutorial and then changing it to be relevant to TypeScript:
// https://codeburst.io/lets-build-a-countdown-timer-with-react-part-1-2e7d5692d914
import React, { ChangeEvent, MouseEventHandler } from 'react';
import './App.css';

// Found this at https://stackoverflow.com/a/14639219/249218
type EventCallback = (e: ChangeEvent<HTMLInputElement>) => void;

export interface TimerInputProps { 
  minutes: string,
  handleChange: EventCallback,
  disabled: boolean
}
export interface TimerInputState { number: number }

class TimerInput extends React.Component<TimerInputProps, TimerInputState> {
  render() {
    return (
      <div>
        <h3>Input your desired time</h3>
        <input 
          style={{ fontSize: '2em', width: '2em' }}
          type="number"
          min="0"
          disabled={this.props.disabled}
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
        <h1 style={{ fontSize: 100 }}>
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
      <div style={{ display: 'inline-block' }}>
        <button
          style={{fontSize: 50}}
          onClick={this.props.handleClick}
        >
          Start
        </button>
      </div>
    )
  }
}

export interface StopButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>
}

class StopButton extends React.Component<StopButtonProps> {
  render() {
    let styleAttrs = {
       marginLeft: 50,
        display: 'inline-block'
    }
    return(
      <div style={styleAttrs}>
        <button
          style={{ fontSize: 50 }}
          onClick={this.props.handleClick}
        >
          Stop
        </button>
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
  countDownInProgress: boolean = false;
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
    this.stopCountDown = this.stopCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    let inputElement = (event.target as HTMLInputElement);
    let newMinutes = inputElement.value;
    let minutesToSet;
    if (newMinutes === undefined) {
      // TODO: Not sure if this would ever get triggered...
      minutesToSet = this.DOUBLE_ZEROS;
    }
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
    this.countDownInProgress = true;
    this.intervalHandle = setInterval(this.tick, 1000);

    let time = Number(this.state.minutes);

    this.secondsRemaining = time * 60;
  }

  stopCountDown() {
    this.countDownInProgress = false;
    this.stopTimer();
    this.setState(this.INITIAL_STATE);
  }

  private stopTimer() {
    if (this.intervalHandle != null) {
      clearInterval(this.intervalHandle);
    }
  }

  render() {
    return (
      <div className="App">
        <TimerInput 
          minutes={this.state.minutes}
          handleChange={this.handleChange}
          disabled={this.countDownInProgress}
        />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <div>
          <StartButton handleClick={this.startCountDown} />
          <StopButton handleClick={this.stopCountDown} />
        </div>
      </div>
    );
  }
}

export default App;
