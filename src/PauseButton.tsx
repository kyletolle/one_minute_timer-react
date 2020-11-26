/** @jsx jsx */
import React from 'react';
import { jsx, css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import PauseButtonProps from './PauseButtonProps';

const display = (props: PauseButtonProps): SerializedStyles =>
  css`
    display: ${props.visible ? 'inline-block' : 'none'};
  `;

const UnstyledPauseButton: React.FC<PauseButtonProps> = ({
  className,
  handleClick,
}) => (
  <div className={className}>
    <button onClick={handleClick}>Pause</button>
  </div>
);

UnstyledPauseButton.propTypes = {
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const PauseButton = styled(UnstyledPauseButton)`
  ${display}
`;
export default PauseButton;
