import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import Yoga2 from '../icons/Yoga2.svg';
import Navigation from '../components/Navigation';
import Tageszeit from '../components/Tageszeit';
import Name from '../components/Name';
import userdata from '../data/Userdata';

const YogaImg =styled.img`
  margin: -1.5vh 4.8vw 0 4.8vw;
  width: 90vw;
  `;

const Gruß = styled.h1`
   margin: 9.66vh 4.8vw 4.5vh 4.8vw;
   text-align: left;
`;

const Heute= styled.div`
    margin: 0 4.8vw;
    display:flex;
    justify-content: space-between;
    align-items: baseline;
    `;

const Workout = styled.div`
    margin: -1.5vh 4.8vw 0 4.8vw;
    text-align: left;
    & p {
      margin-bottom: 0;
    }
    & ul {
      margin-bottom: 8vh;
      padding: 0;
      display: flex;
    }
    & li {
      margin-right: 4vw;
    }
    & li:first-child {
      list-style-type: none;
    }
    `;

const DATACHANGE= gql`
  query {
    allProgram {
      title
    }
  }
`;

function Dashboard() {
  const { loading, error, data } = useQuery(DATACHANGE);
  console.log(data);

    return(
        <div>
          <Gruß>Guten<br/>{Tageszeit},<br/><Name name={userdata[0].name}/></Gruß>
          <Heute>
            <h2>Dein Workout heute</h2>
            <p className='small-text'>Trainingsplan</p>
          </Heute>
          <YogaImg src={Yoga2} alt="Yoga Graphik" />
          <Workout>                                              
            <p>Workout: {loading? 'loading': data.allProgram[0].title}<br/>Programm: {loading? 'loading': data.allProgram[0].title}</p>
            <ul className='small-text'>
              <li>XXX kcal</li>
              <li>26 Min.</li>
              <li>Beweglichkeit</li>
            </ul>
          </Workout>
          <Navigation />
        </div>
    );
};

export default Dashboard;