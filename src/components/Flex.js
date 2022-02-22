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
    margin-right: ${(props) => (props.rowSpacing ? props.theme.spacing[props.rowSpacing] : 'initial')};    
  }

  & > :last-child {
    margin-right: initial;
  }
`;

export default Flex;
