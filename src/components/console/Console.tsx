import {AppString} from 'app.string';
import React, {useRef, useState} from 'react';
import ReactConsole from '@webscopeio/react-console';
import {Prompt} from './Prompt';
import {CommandEvent} from './CommandFactory';
import {commands} from 'command';

export const Console = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [command, setCommand] = useState<CommandEvent | ''>('');
  const ref = useRef<ReactConsole>(null);

  const colorStyle = {color: '#0f0'};
  const unixCommand = commands(setCommand);
  const notFound = async (...command: string[]): Promise<string> => {
    const commandName = command[0] || '';
    return `Command ${commandName} does not exist
to see the list of available commands please type commands command`;
  };

  unixCommand.history = {
    description: 'History',
    fn: async () => history.join('\r\n'),
  };

  const afterClose = () => {
    ref?.current?.focusConsole();
  };

  return (
    <div>
      <Prompt command={command} setOpen={() => setCommand('')} afterClose={afterClose}/>
      <ReactConsole
        autoFocus
        welcomeMessage={AppString.welcome(new Date())}
        prompt="root@unix:~$"
        lineStyle={colorStyle}
        inputStyle={colorStyle}
        promptStyle={colorStyle}
        wrapperStyle={{height: 'auto'}}
        history={history}
        noCommandFound={notFound}
        ref={ref}
        onAddHistoryItem={entry => setHistory(h => [...h, entry])}
        commands={unixCommand}
      />
    </div>
  );
};
