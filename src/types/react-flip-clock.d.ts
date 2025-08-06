declare module 'react-flip-clock' {
  import { ComponentType } from 'react';
  
  interface ClockProps {
    time?: number;
    format?: string;
    showSeconds?: boolean;
    showLabels?: boolean;
    size?: 'small' | 'medium' | 'large';
    theme?: 'dark' | 'light';
    [key: string]: any;
  }
  
  const Clock: ComponentType<ClockProps>;
  export default Clock;
} 