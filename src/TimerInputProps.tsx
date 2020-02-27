import { EventCallback } from './EventCallback';

export interface TimerInputProps {
  minutes: string;
  handleChange: EventCallback;
  disabled: boolean;
}
