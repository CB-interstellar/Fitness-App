import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
   text-decoration: none;
   color: ${props => props.theme.bbcolors.blue};
   display: block;
   
   &:link,
   &:visited {
      color: ${props => props.theme.bbcolors.blue};
    }

   &:hover,
   &:focus,
   &:active {
      color: ${props => props.theme.rbcolors.mediumblue};
    }
   `;

export default LinkStyled;