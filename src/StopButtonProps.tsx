import { MouseEventHandler } from 'react';

export default interface StopButtonProps {
  className: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};
