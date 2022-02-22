import React from 'react';

import StyledLink from './StyledLink';

function Header() {
  return (
    <header>
      <div>logo placeholder</div>
      <StyledLink to="#">Search</StyledLink>
      <StyledLink to="#">How it works</StyledLink>
      <StyledLink to="#">About</StyledLink>
    </header>
  );
}

export default Header;
