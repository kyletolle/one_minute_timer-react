import { EventCallback } from './EventCallback';

interface TimerInputProps {
  className: string;
  minutes: string;
  handleChange: EventCallback;
  disabled: boolean;
}

export default TimerInputProps;
