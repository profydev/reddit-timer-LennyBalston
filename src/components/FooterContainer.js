import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  height: 100px;
  max-width: 1280px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-around;
  align-items: center;

  @media (min-width: calc(1280px + 40px)) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default FooterContainer;
