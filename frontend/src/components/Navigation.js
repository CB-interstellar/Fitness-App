import { NavLink } from 'react-router-dom';
import { ReactComponent as Haus } from '../icons/Haus.svg';
import { ReactComponent as Hanteln } from '../icons/Hanteln.svg';
import { ReactComponent as Gesicht } from '../icons/Gesicht.svg';

function Navigation() {
    return(
        <div>
          <ul>
            <li>
              <Haus />
              <NavLink to='/home'>HOME</NavLink>
            </li>
            <li>
              <Hanteln />
              <NavLink to='/browse'>BROWSE</NavLink>
            </li>
            <li>
            <Gesicht />
              <NavLink to='/profil'>PROFIL</NavLink>
            </li>
          </ul>
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