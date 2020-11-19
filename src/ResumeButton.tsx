/** @jsx jsx */
import React from 'react';
import { jsx, css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ResumeButtonProps from './ResumeButtonProps';

const display = (props: ResumeButtonProps): SerializedStyles =>
  css`
    display: ${props.visible ? 'inline-block' : 'none'};
  `;

const UnstyledResumeButton: React.FC<ResumeButtonProps> = ({
  className,
  handleClick,
}) => (
  <div className={className}>
    <button onClick={handleClick}>Resume</button>
  </div>
);

UnstyledResumeButton.propTypes = {
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const ResumeButton = styled(UnstyledResumeButton)`
  margin-left: 3em;
  button {
    font-size: 3em;
  }

  ${display}
`;

export default ResumeButton;
