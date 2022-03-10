import { Link } from 'react-router-dom';
import styled from 'styled-components';

const InternalLink = styled(Link)`
  color: ${(props) => props.theme.colors.greyDark};
  line-height: 1.25;
  font-size: ${(props) => (
    props.fontSize ? props.fontSize : '1rem'
  )}
`;

export default InternalLink;
