import {Unix, Background} from 'components/commands';
import {Creator} from '../commands/creator';

export type CommandEvent =
  | 'unix'
  | 'background'
  | 'creators'
  | 'reasons'
  | 'context'
  | 'versions'
  | 'memory';


export const CommandFactory = ({event}: { event: CommandEvent }): JSX.Element => {
  switch (event) {
    case 'unix':
      return <Unix/>;
    case 'background':
      return <Background/>;
    case 'creators':
      return <Creator/>;
    default:
      return <p>command not fount</p>;
  }
};
