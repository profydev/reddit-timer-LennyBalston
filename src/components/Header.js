import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import Flex from './Flex';
import StyledLink from './StyledLink';

function Header() {
  return (
    <Flex
      as="header"
      height="100px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/"><img src={logo} alt="logo" width="150px" /></Link>
      <Flex as="nav" justifyContent="flex-end" rowSpacing="xl">
        <StyledLink to="/search?q=javascript">Search</StyledLink>
        <StyledLink to="/#how-it-works">How it works</StyledLink>
        <StyledLink to="/#about">About</StyledLink>
      </Flex>
    </Flex>
  );
}

export default Header;
