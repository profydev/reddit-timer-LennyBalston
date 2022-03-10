import React from 'react';

import logo from '../assets/logo-symbol.svg';
import FooterContainer from './FooterContainer';
import StyledLink from './StyledLink';
import HrefLink from './HrefLink';

function Header() {
  return (
    <FooterContainer style={{ backgroundColor: 'yellow' }}>
      <HrefLink
        href="https://www.google.com"
        fontSize="0.875rem"
        target="_blank"
      >
        profy.dev
      </HrefLink>
      <StyledLink to="/">
        <img src={logo} alt="logo" width="36px" height="auto" style={{ display: 'block' }} />
      </StyledLink>
      <StyledLink to="/terms" fontSize="0.875rem">Terms & Privacy</StyledLink>
    </FooterContainer>
  );
}

export default Header;
