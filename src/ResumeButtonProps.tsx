import { MouseEventHandler } from 'react';

interface ResumeButtonProps {
  className: string;
  visible: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export default ResumeButtonProps;