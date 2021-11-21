import {AppString} from 'app.string';
import React, {useRef, useState} from 'react';
import ReactConsole from '@webscopeio/react-console';
import {Prompt} from './Prompt';

export const Console = () => {
  const [history, setHistory] = useState([
    'echo hello world',
    'sleep 1000',
    'sleep 2000',
    'sleep 3000',
    'echo ola',
    'not found',
  ]);

  const [command, setCommand] = useState('');
  const ref = useRef<ReactConsole>(null);

  const colorStyle = {color: '#0f0'};
  const notFound = async (...command: string[]): Promise<string> => {
    const commandName = command[0] || '';
    return `Command ${commandName} does not exist
to see the list of available commands please type commands command`;
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
        commands={{
          history: {
            description: 'History',
            fn: () => new Promise(resolve => {
              resolve(`${history.join('\r\n')}`);
            }),
          },
          echo: {
            description: 'echo',
            fn: async (...args) => {
              return args.join(' ');
            },
          },
          open: {
            description: 'Open',
            fn: async () => {
              setCommand('open');
            },
          },
        }}/>
    </div>
  );
};
