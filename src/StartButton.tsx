/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import StartButtonProps from './StartButtonProps';

const UnstyledStartButton: React.FC<StartButtonProps> = ({
  className,
  handleClick,
}) => (
  <div className={className}>
    <button onClick={handleClick}>Start</button>
  </div>
);

UnstyledStartButton.propTypes = {
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const StartButton = styled(UnstyledStartButton)`
  display: inline-block;
`;

export default StartButton;
