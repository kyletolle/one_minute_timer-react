import { MouseEventHandler } from 'react';
import StartButton from './StartButton';

interface StartButtonProps {
  className: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default StartButtonProps;