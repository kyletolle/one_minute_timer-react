import React from 'react';
import { TimerInputProps } from './TimerInputProps';
import { TimerInputState } from './TimerInputState';

export class TimerInput extends React.Component<TimerInputProps, TimerInputState> {
  render() {
    return (<div>
      <h3>Input your desired time</h3>
      <input style={{ fontSize: '2em', width: '2em' }} type="number" min="0" disabled={this.props.disabled} value={this.props.minutes} onChange={this.props.handleChange} required />
    </div>);
  }
}
