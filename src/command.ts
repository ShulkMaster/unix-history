import {CommandEvent} from 'components/console/CommandFactory';

export const command = (input: string): CommandEvent => {
  const args = input.split(' ').map(arg => arg.trim());
  console.log(args);
  if (args.length < 1 || args[0] === '') {
    return {command: 'Enter'};
  }

  const command = args[0].toUpperCase();

  switch (command) {
    case 'Echo':
      return {
        command: 'Echo',
        args: input.trim().substring(4),
      };
    default:
      return {
        command: 'NoCommand',
        name: args[0],
      };
  }
};
