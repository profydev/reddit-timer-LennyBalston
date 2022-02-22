import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Bitter&family=Montserrat:wght@400;500;600;700&display=swap');

  body {
    color: ${(props) => props.theme.colors.main};    
    background-color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fontFamily.sans};
    font-weight: 400;
    line-height: 1.69;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default GlobalStyle;
