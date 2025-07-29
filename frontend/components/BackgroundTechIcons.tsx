// components/BackgroundIcons.tsx
'use client';
import {
  SiPython,
  SiPostgresql,
  SiGooglecloud,
  SiAwslambda,
  SiFastapi,
  SiDocker,
  SiApacheairflow,
  SiApachekafka,
  SiPandas,
} from 'react-icons/si';

const iconPositions = [
  { Icon: SiPython, color: '#3776AB', top: '70%', left: '45%' },
  { Icon: SiPostgresql, color: '#336791', top: '65%', left: '55%' },
  { Icon: SiGooglecloud, color: '#4285F4', top: '70%', left: '65%' },
  { Icon: SiAwslambda, color: '#FF9900', top: '65%', left: '75%' },
  { Icon: SiFastapi, color: '#009688', top: '70%', left: '85%' },
  { Icon: SiDocker, color: '#2496ED', top: '85%', left: '50%' },
  { Icon: SiApacheairflow, color: '#017CEE', top: '80%', left: '60%' },
  { Icon: SiApachekafka, color: '#231F20', top: '85%', left: '70%' },
  { Icon: SiPandas, color: '#150458', top: '80%', left: '80%' },
];

export default function BackgroundIcons() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {iconPositions.map(({ Icon, color, top, left }, idx) => (
        <Icon
          key={idx}
          color={color}
          size={60}
          className="opacity-35 absolute"
          style={{ top, left }}
        />
      ))}
    </div>
  );
}