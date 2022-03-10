import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  height: 100px;
  max-width: 940px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;

  @media (min-width: calc(940px + 40px)) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default FooterContainer;
