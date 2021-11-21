import {BootState} from 'types';
import {Console} from 'components/console/Console';
import play from 'assets/play.svg';
import {useState} from 'react';
import {Waves} from 'components/waves/Waves';
import './Boot.scss';

export const Boot = () => {
  const [state, setState] = useState<BootState>('init');
  switch (state) {
    case 'init':
      return (
        <div className="boot-drive">
          <button onClick={() => setState('booting')}>
            Login <img src={play} alt="play"/>
          </button>
        </div>
      );
    case 'booting':
      return <Waves onFinish={setState}/>;
    case 'booted':
      return <Console exit={setState}/>;
  }
};
