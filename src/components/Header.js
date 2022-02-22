import React from 'react';

import Flex from './Flex';
import StyledLink from './StyledLink';

function Header() {
  return (
    <header>
      <div>logo placeholder</div>
      <Flex as="nav" justifyContent="flex-end" rowSpacing="xl">
        <StyledLink to="/search?q=javascript">Search</StyledLink>
        <StyledLink to="/#how-it-works">How it works</StyledLink>
        <StyledLink to="/#about">About</StyledLink>
      </Flex>
    </header>
  );
}

export default Header;
