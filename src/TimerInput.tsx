/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import TimerInputProps from './TimerInputProps';

const UnstyledTimerInput: React.FC<TimerInputProps> = ({className, minutes, handleChange, disabled}) => (
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

const TimerInput = styled(UnstyledTimerInput)`
input {
  font-size: 2em;
  width: 2em;
}
`;

export default TimerInput;