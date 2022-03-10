import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import Flex from './Flex';
import HeaderContainer from './HeaderContainer';
import InternalLink from './InternalLink';

function Header() {
  return (
    <HeaderContainer>
      <Link to="/"><img src={logo} alt="logo" width="150px" height="auto" style={{ display: 'block' }} /></Link>
      <Flex as="nav" justifyContent="flex-end" gap="1.625rem">
        <InternalLink to="/search/javascript">Search</InternalLink>
        <InternalLink to="/#how-it-works">How it works</InternalLink>
        <InternalLink to="/#about">About</InternalLink>
      </Flex>
    </HeaderContainer>
  );
}

export default Header;
