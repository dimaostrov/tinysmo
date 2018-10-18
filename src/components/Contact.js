import React from 'react';
import { Hero } from '@front10/landing-page-book/dist/components';

const Contact = () => {
  return ( 
    <Hero
    backgroundColor="#212529"
    particlesParams={{ particles: { line_linked: { enable: false } } }}
    header="Contact"
    subHeader="React & NodeJS Developer"
  />
   );
}
 
export default Contact;