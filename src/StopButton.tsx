/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import StopButtonProps from './StopButtonProps';

const UnstyledStopButton: React.FC<StopButtonProps> = ({
  className,
  handleClick,
}) => (
  <div className={className}>
    <button onClick={handleClick}>Stop</button>
  </div>
);

UnstyledStopButton.propTypes = {
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const StopButton = styled(UnstyledStopButton)`
  margin-left: 3em;
  display: inline-block;

  button {
    font-size: 3em;
  }
`;

export default StopButton;
