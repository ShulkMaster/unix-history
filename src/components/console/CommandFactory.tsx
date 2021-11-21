import {Simulate} from 'react-dom/test-utils';
import play = Simulate.play;

export type Enter = {
  command: 'Enter'
}

export type Echo = {
  command: 'Echo',
  args: string;
}

export type Exit = {
  command: 'Exit',
  args: string;
}

export type NoCommand = {
  command: 'NoCommand'
  name: string;
}

export type CommandEvent = Enter | Echo | Exit | NoCommand;


export const CommandFactory = ({event}: { event: CommandEvent }): JSX.Element => {
  switch (event.command) {
    case 'Enter':
      return <p>root@unix-pc:~</p>;
    case 'Echo':
      return <p>{event.args}</p>;
    case 'Exit':
      return <p>{event.args}</p>;
    default:
      return <p>command {event.name} not fount</p>;
  }
};
