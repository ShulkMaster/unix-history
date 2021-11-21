import {Unix, Background, Creator, Reasons, Versions} from 'components/commands';

export type CommandEvent =
  | 'unix'
  | 'background'
  | 'creators'
  | 'reasons'
  | 'versions'
  | 'context';


export const CommandFactory = ({event}: { event: CommandEvent }): JSX.Element => {
  switch (event) {
    case 'unix':
      return <Unix/>;
    case 'background':
      return <Background/>;
    case 'creators':
      return <Creator/>;
    case 'reasons':
      return <Reasons/>;
    case 'versions':
      return <Versions/>;
    default:
      return <p>command not fount</p>;
  }
};
