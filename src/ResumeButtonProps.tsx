import { MouseEventHandler } from 'react';

export interface ResumeButtonProps {
  visible: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
