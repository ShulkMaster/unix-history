import generateSVG from 'donatello-svg';
import InlineSVG from 'svg-inline-react';
import {useEffect, useState} from 'react';
import './Header.css';

export const Header = () => {
  const colors: string[] = [
    '#32a852', '#eb4034', '#4287f5',
    '#fcba03', '#2596be', '#6c25be',
  ];
  const backSvg = generateSVG(100, 100, colors, 'simple');
  const backSvg2 = generateSVG(100, 100, colors, 'simple');

  const [state, setState] = useState(0);

  useEffect(() => {
    const timeSpan = setTimeout(() => {
      setState(s => s + 1);
    }, 60 + 220 * Math.random());
    return () => clearTimeout(timeSpan);
  }, [state, setState]);

  return (
    <header className="head-random">
      <InlineSVG src={backSvg}/>
      <div>
        <h1>Unix</h1>
        <h2>The Operating system</h2>
      </div>
      <InlineSVG src={backSvg2}/>
    </header>
  );
};
