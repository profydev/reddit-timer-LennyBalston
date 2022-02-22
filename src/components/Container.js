import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.screens.sm}) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    margin-left: 80px;
    margin-right: 80px;
  }
`;

export default Container;
