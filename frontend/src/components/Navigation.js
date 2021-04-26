import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Haus } from '../icons/Haus.svg';
import { ReactComponent as Hanteln } from '../icons/Hanteln.svg';
import { ReactComponent as Gesicht } from '../icons/Gesicht.svg';


const NavBar= styled.ul`
   list-style-type: none;
   background-color: ${props => props.theme.rbcolors.beige};
   margin-bottom: 0;
   padding: 0;
   width: 100vw;
   position: fixed;
   bottom: 0;
   display: flex;
   justify-content: space-around;
   align-items: baseline;

   & a {
     text-decoration: none;
     color: ${props => props.theme.bbcolors.blue};
     margin-top: 1vh;
     display:flex;
     flex-direction: column;
     align-items: center;


     &:visited {
      color: ${props => props.theme.bbcolors.blue};
    }

     &:hover {
        color: ${props => props.theme.rbcolors.mediumblue};
     }

     &.active {
       color: ${props => props.theme.rbcolors.neonblue};
     }
   }
`;

function Navigation() {
    return(
        <div>
          <NavBar>
            <li>
              <NavLink to='/home' className='nav-text' activeClassName='active'><Haus />HOME</NavLink>
            </li>
            <li>
              <NavLink to='/browse' className='nav-text' activeClassName='active'><Hanteln />BROWSE</NavLink>
            </li>
            <li>
              <NavLink to='/profil' className='nav-text' activeClassName='active'><Gesicht />PROFIL</NavLink>
            </li>
          </NavBar>
        </div>
    );
};

export default Navigation;

//für SVG eine Alternative (z.B. Haus.svg) :
//              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26">
//                 <g fill="none">
//                    <path d="M12.5 1.84326L1.12354 10.553L1.12354 17.4984L1.12354 24.1178L8.86196 24.1178L8.86196 15.131L15.8303 15.131L15.8303 24.1178L23.8765 24.1178L23.8765 10.553L12.5 1.84326Z" stroke="#1D2A73" stroke-width="2"/>
//                 </g>
//             </svg>