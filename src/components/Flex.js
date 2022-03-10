import styled from 'styled-components';

// TODO replace margin-right with gap property when better browser support available

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => (
    props.justifyContent ? props.justifyContent : 'initial'
  )};
  margin-bottom: ${(props) => (
    props.marginBottom ? props.marginBottom : 'initial'
  )};

  & > *  {
    margin-right: ${(props) => (props.gap ? props.gap : 'initial')};    
  }
  & > :last-child {
    margin-right: initial;
  }
`;

export default Flex;
