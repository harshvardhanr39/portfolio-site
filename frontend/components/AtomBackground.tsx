'use client';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

export default function AtomBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="global-atom-bg"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'gray' },
        particles: {
          number: { value: 50 },
          size: { value: 2 },
          color: { value: '#aaa' },
          opacity: { value: 0.5 },
          links: {
            enable: true,
            distance: 120,
            color: '#aaa',
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            outMode: 'bounce',
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
      }}
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
    />
  );
}
