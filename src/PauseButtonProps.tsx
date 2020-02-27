import { MouseEventHandler } from 'react';

export interface PauseButtonProps {
  visible: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
