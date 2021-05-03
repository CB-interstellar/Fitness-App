import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SmallPlay } from '../icons/SmallPlay.svg';
import { ReactComponent as Herz } from '../icons/Herz.svg';


const Startbox= styled.div`
  padding: 0 5.8vw 1.9vh 3.0vw;
  display: flex;
  justify-content: space-between;
`;

const PlayBox= styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tage= styled.div`
  background: white;
  position: relative;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 2vh 0 1.36vh 4.3vw;
  flex: 1;

  & p {
      margin: 0;
  }

  & ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  & li {
    margin-right: 4vw;
  }

  & li:first-child {
    list-style-type: none;
  }

  & svg {
      width: 2.88vw;
      position: absolute;
      bottom: 1.36vh;
  }
`;

function Tagesbox() {
    return(
        <Startbox>
          <PlayBox>
            <Link to='/workout-1'><SmallPlay /></Link>
          </PlayBox>
          <Tage>
            <p>Tag 1</p>
            <ul className='small-text'>
              <li>XXX kcal</li>
              <li>26 Min.</li>
              <li>Beweglichkeit</li>
            </ul>
            <Herz />
          </Tage>
        </Startbox>
    )
};

export default Tagesbox;
