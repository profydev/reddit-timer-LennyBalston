import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import Flex from './Flex';
import HeaderContainer from './HeaderContainer';
import StyledLink from './StyledLink';

function Header() {
  return (
    <HeaderContainer>
      <Link to="/"><img src={logo} alt="logo" width="150px" height="auto" style={{ display: 'block' }} /></Link>
      <Flex as="nav" justifyContent="flex-end" gap="1.625rem">
        <StyledLink to="/search/javascript">Search</StyledLink>
        <StyledLink to="/#how-it-works">How it works</StyledLink>
        <StyledLink to="/#about">About</StyledLink>
      </Flex>
    </HeaderContainer>
  );
}

export default Header;
