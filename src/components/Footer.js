import React from 'react';

import logo from '../assets/logo-symbol.svg';
import FooterContainer from './FooterContainer';
import StyledLink from './StyledLink';

function Header() {
  return (
    <FooterContainer>
      <StyledLink
        as="a"
        href="https://profy.dev/employers"
        fontSize="small"
        target="_blank"
        style={{ flex: '1' }}
      >
        profy.dev
      </StyledLink>
      <StyledLink to="/">
        <img src={logo} alt="logo" width="36px" height="auto" style={{ display: 'block' }} />
      </StyledLink>
      <StyledLink
        to="/terms"
        fontSize="small"
        style={{ flex: '1', textAlign: 'right' }}
      >
        Terms & Privacy
      </StyledLink>
    </FooterContainer>
  );
}

export default Header;
