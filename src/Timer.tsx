import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import TimerProps from './TimerProps';

const UnstyledTimer: React.FC<TimerProps> = ({
  className,
  minutes,
  seconds,
  centiseconds,
}) => (
  <div className={className}>
    <h1>
      {minutes}:{seconds}.{centiseconds}
    </h1>
  </div>
);

UnstyledTimer.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
  centiseconds: PropTypes.string.isRequired,
};

const Timer = styled(UnstyledTimer)`
  display: flex;
  justify-content: center;

  h1 {
    width: 4.5em;
    font-size: 5em;
    text-align: left;
  }
`;

export default Timer;
