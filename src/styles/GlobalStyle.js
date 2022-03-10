import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    color: ${(props) => props.theme.colors.main};    
    background-color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fontFamily.sans};
    font-size: ${(props) => props.theme.fontSizes.default};
    font-weight: 400;
    line-height: 1.69;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default GlobalStyle;
