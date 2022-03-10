import styled from 'styled-components';

const Main = styled.main`
  display: main;
  max-width: 1144px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 100px;

  @media (min-width: calc(1280px + 40px)) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Main;
