import React from 'react';

import logo from '../assets/logo-symbol.svg';
import FooterContainer from './FooterContainer';
import InternalLink from './InternalLink';
import ExternalLink from './ExternalLink';

function Header() {
  return (
    <FooterContainer>
      <ExternalLink
        href="https://www.google.com"
        fontSize="0.875rem"
        target="_blank"
      >
        profy.dev
      </ExternalLink>
      <InternalLink to="/">
        <img src={logo} alt="logo" width="36px" height="auto" style={{ display: 'block' }} />
      </InternalLink>
      <InternalLink to="/terms" fontSize="0.875rem">Terms & Privacy</InternalLink>
    </FooterContainer>
  );
}

export default Header;
