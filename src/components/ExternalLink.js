import styled from 'styled-components';

const ExternalLink = styled.a`
  color: ${(props) => props.theme.colors.greyDark};
  line-height: 1.25;
  font-size: ${(props) => (
    props.fontSize ? props.fontSize : '1rem'
  )}
`;

export default ExternalLink;
