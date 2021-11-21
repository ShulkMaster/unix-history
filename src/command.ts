import {CommandEvent} from './components/console/CommandFactory';

type Command = {
  description: string;
  fn: (...args: string[]) => Promise<void | string>;
};

type CommandsProp = {
  [command: string]: Command
};

const makeCommand = (command: CommandEvent, setCommand: (command: CommandEvent) => void): Command => ({
  description: command,
  fn: async () => setCommand(command),
});

export const commands = (setCommand: (command: CommandEvent) => void): CommandsProp => {
  return {
    unix: makeCommand('unix', setCommand),
    background: makeCommand('background', setCommand),
    echo: {
      description: 'echo',
      fn: async (...args) => args.join(' '),
    },
  };
};
