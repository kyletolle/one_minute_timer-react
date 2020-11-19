/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import ResumeButtonProps from './ResumeButtonProps';

const display = (props: ResumeButtonProps) => (
  css`
    display: ${props.visible ? 'inline-block' : 'none'};
  `
);

const UnstyledResumeButton: React.FC<ResumeButtonProps> = ({ className, handleClick }) => {
  return (
    <div className={className}>
      <button onClick={handleClick}>
        Resume
      </button>
    </div>
  );
}

const ResumeButton = styled(UnstyledResumeButton)`
  margin-left: 3em;
  button {
    font-size: 3em;
  };

  ${display}
`;

export default ResumeButton;