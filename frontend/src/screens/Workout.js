import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as BackPfeil } from '../icons/BackPfeil.svg';
import Perlen from '../components/Perlen';
import Button, { BtnBox } from '../components/Button';


const WorkPage= styled.div`
  background: ${props => props.theme.gradients.lightorange};
  height: 100vh;
  padding-top: 1.7vh;
  position: relative;
`;

const BackBox= styled(Link)`
  margin: 3.3vh 4.8vw;
  position: absolute;
  top: 0;
  right: 0;
`;

const TitelBox= styled.div`
  margin: 30vh 0 24vh 0;

  & ul {
    margin-bottom: 8vh;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  & li {
    margin-right: 4vw;
  }
  
  & li:first-child {
    list-style-type: none;
  }
`;

function Workout() {
    return(
        <WorkPage>
          <p className='small-text'>Titel des Programms</p>
          <BackBox to='/programm'>
            <BackPfeil />
          </BackBox>
          <Perlen />
          <TitelBox>
            <h1>Tag 2</h1>
            <ul className='small-text'>
              <li>XXX kcal</li>
              <li>26 Min.</li>
              <li>Beweglichkeit</li>
            </ul>
          </TitelBox>
          <BtnBox>
            <Button as={Link} to="/exercise">los!</Button>
          </BtnBox>
        </WorkPage>
    );
};

export default Workout;