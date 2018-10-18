import React from 'react';
import { Section, Container, Video, Button } from '@front10/landing-page-book/dist/components';

import ParticleWrapper from './ParticleWrapper';

const About = () => {
  return (
    <ParticleWrapper>

      <Section
        subTitle="One Look Is Worth A Thousand Words."
        title="WHAT WE DO"
      >
        <Container className="text-center">
          <Button className="mt-5">
            Explore
          </Button>
        </Container>
      </Section>


    </ParticleWrapper>
  );
}

export default About;