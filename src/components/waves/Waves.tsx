import waves from 'nice-waves';
import {useLayoutEffect, useRef} from 'react';
import {BootState} from '../Boot/Boot';

export type WavesProps = {
  onFinish: (state: BootState) => void;
}

export const Waves = ({onFinish}: WavesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const current = ref.current;
  useLayoutEffect(() => {
    if (!current) return;
    const opts = {
      fills: [
        'rgba(92, 7, 7, 0.65)',
        'rgba(175, 0, 0, 0.6)',
        'rgba(255, 0, 0, 0.5)',
      ],
      flowRate: 11,
      swayRate: 1.61,
      wavelength: 8,
      offset: 0.48,
      randomHeight: 0.6,
      randomOffset: 0.29,
    };

    const wav = waves(opts).mount(current);
    wav.play();
    const stamp = setTimeout(() => onFinish('booted'), 5000);
    return () => {
      wav.stop();
      clearTimeout(stamp);
    };
  }, [current, onFinish]);

  return <div id="main-frame" ref={ref}/>;
};
