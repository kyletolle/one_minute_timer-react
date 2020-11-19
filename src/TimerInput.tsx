/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import TimerInputProps from './TimerInputProps';

const UnstyledTimerInput: React.FC<TimerInputProps> = ({
  className,
  minutes,
  handleChange,
  disabled,
}) => (
  <div className={className}>
    <h3>Input your desired time</h3>
    <input
      type="number"
      min="0"
      disabled={disabled}
      value={minutes}
      onChange={handleChange}
      required
    />
  </div>
);

UnstyledTimerInput.propTypes = {
  className: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const TimerInput = styled(UnstyledTimerInput)`
  input {
    font-size: 2em;
    width: 2em;
  }
`;

export default TimerInput;
