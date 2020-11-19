/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react';
import { StartButtonProps } from './StartButtonProps';

const UnstyledStartButton: React.FC<StartButtonProps> = ({className, handleClick}) => (
  <div className={className}>
    <button onClick={handleClick}>
      Start
    </button>
  </div>
)

const StartButton = styled(UnstyledStartButton)`
display: inline-block;

button {
  font-size: 3em;
}
`;

export default StartButton;