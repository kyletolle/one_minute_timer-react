import { ChangeEvent } from 'react';

// Found this at https://stackoverflow.com/a/14639219/249218
export type EventCallback = (e: ChangeEvent<HTMLInputElement>) => void;
