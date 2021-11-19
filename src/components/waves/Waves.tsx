import {BootState} from 'components/boot/Boot';
import waves from 'nice-waves';
import {useEffect, useLayoutEffect, useRef} from 'react';

export type WavesProps = {
  onFinish: (state: BootState) => void;
}

export const Waves = ({onFinish}: WavesProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    console.log('called');
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

    const wav = waves(opts).mount(ref.current);
    wav.play();
    const stamp = setTimeout(() => onFinish('booted'), 5000);
    return () => {
      clearTimeout(stamp);
    };
  }, [ref]);

  return <div className="main-frame" ref={ref}/>;
};
