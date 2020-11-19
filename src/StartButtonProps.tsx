import { MouseEventHandler } from 'react';

export interface StartButtonProps {
  className: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
