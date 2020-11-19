import React from 'react';
import { TimerProps } from './TimerProps';

const Timer: React.FC<TimerProps> = ({minutes, seconds}) => (
  <div>
    <h1 style={{ fontSize: 100 }}>
      {minutes}:{seconds}
    </h1>
  </div>
);

export default Timer;