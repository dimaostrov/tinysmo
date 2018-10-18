import React from 'react';
import { Hero } from '@front10/landing-page-book/dist/components';


const Home = () => {
  return <Hero
    backgroundColor="#212529"
    particlesParams={{ particles: { line_linked: { enable: false } } }}
    header="Dima Ostrov"
    subHeader="React & NodeJS Developer"
  />;
}

export default Home;