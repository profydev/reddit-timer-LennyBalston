import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.fontFamily.serif};
  font-weight: 400;
  font-size: 2.375rem;
  line-height: 2.875rem;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
`;

export default Title;
