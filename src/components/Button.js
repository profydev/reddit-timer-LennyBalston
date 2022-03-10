import styled from 'styled-components';

const Button = styled.button`
  padding: 13.5px 15px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDarker}
  }
`;

export default Button;
