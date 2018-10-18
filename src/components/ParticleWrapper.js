import React from 'react';
import { Hero } from '@front10/landing-page-book/dist/components';

const ParticleWrapper = (props) => {
  return (
    <Hero
      backgroundColor="#212529"
      particlesParams={{ particles: { line_linked: { enable: false } } }}
    >
      <div style={{ width: '100%', height: "100%", marginTop: '2rem' }}>
        {props.children}
      </div>
    </Hero>
  );
}

export default ParticleWrapper;