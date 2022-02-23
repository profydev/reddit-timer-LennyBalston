import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  height: ${(props) => (props.height ? props.height : 'initial')};
  flex-direction: ${(props) => (props.direction ? props.direction : 'initial')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'initial')};

  justify-content: ${(props) => (
    props.justifyContent ? props.justifyContent : 'initial'
  )};

  & > *  {
    margin-right: ${(props) => (props.gap ? props.gap : 'initial')};    
  }

  & > :last-child {
    margin-right: initial;
  }

  &.header-wrapper {
    max-width: 1280px;
    @media (min-width: ${(props) => props.theme.screens.sm}) {
      margin-left: 20px;
      margin-right: 20px;
    }

    @media (min-width: calc(1280px + 40px)) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default Flex;
