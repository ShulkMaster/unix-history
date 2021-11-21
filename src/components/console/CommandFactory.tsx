import {Unix} from './commands/unix';

export type CommandEvent =
  | 'unix'
  | 'background'
  | 'creators'
  | 'reasons'
  | 'context'
  | 'versions'
  | 'memory'
  | 'tree'
  | 'cowsay';


export const CommandFactory = ({event}: { event: CommandEvent }): JSX.Element => {
  switch (event) {
    case 'unix':
      return <Unix/>;
    default:
      return <p>command not fount</p>;
  }
};
