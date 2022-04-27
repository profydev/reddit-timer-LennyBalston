import React from 'react';
import { Link } from 'react-router-dom';

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
    <Section data-testid="hero-section">
      <Title>No reactions to your reddit posts?</Title>
      <SubTitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </SubTitle>
      <Flex justifyContent="center" marginBottom="30px">
        <Link to="/search/javascript" title="search for javascript">
          <Button>SHOW ME THE BEST TIME</Button>
        </Link>
      </Flex>
      <Flex justifyContent="center" marginBottom="30px">
        <Typography>{subreddit}</Typography>
      </Flex>
      <Flex justifyContent="center" marginBottom="30px">
        <Link to="/search/javascript" title="search for javascript">
          <img src={heatmap} alt="heatmap" />
        </Link>
      </Flex>
    </Section>
  );
}
