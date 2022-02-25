import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.greyDark};
  line-height: 1.25;
`;

export default StyledLink;
