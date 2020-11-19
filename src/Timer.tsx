import React from 'react';
import PropTypes from 'prop-types';
import TimerProps from './TimerProps';

const Timer: React.FC<TimerProps> = ({ minutes, seconds }) => (
  <div>
    <h1 style={{ fontSize: 100 }}>
      {minutes}:{seconds}
    </h1>
  </div>
);

Timer.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
};

export default Timer;
