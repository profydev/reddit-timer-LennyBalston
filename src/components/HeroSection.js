import React from 'react';

import Section from './Section';
import Title from './Title';
import SubTitle from './SubTitle';
import Flex from './Flex';
import Button from './Button';

const subreddit = '/r/javascript';

export default function HeroSection() {
  return (
    <Section>
      <Title>No reactions to your reddit posts?</Title>
      <SubTitle>
        Great timing, great results! Find the best time to post on your subreddit.
      </SubTitle>
      <Flex justifyContent="center" marginBottom="30px">
        <Button value={subreddit}>SHOW ME THE BEST TIME</Button>
      </Flex>
    </Section>
  );
}
