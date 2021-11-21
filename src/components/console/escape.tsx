import {CommandEvent} from './CommandFactory';

export type EscapeProps = {
  next?: CommandEvent;
}

export const Escape = ({next}: EscapeProps) => {
  return (
    <div>
      {next && <p>el siguiente comando es: {next}</p>}
      <p>Press <b>ESC</b> to close</p>
    </div>
  );
};
