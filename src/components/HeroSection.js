import React from 'react';

import Section from './Section';
import Title from './Title';
import SubTitle from './SubTitle';
import Flex from './Flex';
import Button from './Button';
import Typography from './Typography';

import heatmap from '../assets/heatmap.png';

const subreddit = '/r/javascript';

export default function HeroSection() {
  return (
    <Section>
      <Title>No reactions to your reddit posts?</Title>
      <SubTitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </SubTitle>
      <Flex justifyContent="center" marginBottom="30px">
        <Button>SHOW ME THE BEST TIME</Button>
      </Flex>
      <Flex justifyContent="center" marginBottom="30px">
        <Typography>{subreddit}</Typography>
      </Flex>
      <Flex justifyContent="center" marginBottom="30px">
        <img src={heatmap} alt="heatmap" />
      </Flex>
    </Section>
  );
}
