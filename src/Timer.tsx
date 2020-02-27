import React from 'react';
import { TimerProps } from './TimerProps';

export class Timer extends React.Component<TimerProps> {
  render() {
    return (<div>
      <h1 style={{ fontSize: 100 }}>
        {this.props.minutes}:{this.props.seconds}
      </h1>
    </div>);
  }
}
