import { MouseEventHandler } from 'react';

interface PauseButtonProps {
  className: string;
  visible: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default PauseButtonProps;
