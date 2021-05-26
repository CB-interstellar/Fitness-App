import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import ProgrammInhalt from '../components/ProgrammInhalt';
import programmdata from '../data/Programmdata';


const Heading = styled.h2`
  text-align: left;
  margin: 10.2vh 4.8vw 0 4.8vw;
`;

const Filter = styled.p`
  text-align:left;
  margin: 3.5vh 4.8vw;
`;

const ProBox = styled.div`
  margin: 4.8vw;
  display: flex;
  flex-direction: column;
`;

function createTitel(titelData) {
  return <ProgrammInhalt 
              key={titelData.id}
              name={titelData.name}
          />
};

function Browse() {
  
    return(
        <div>
          <Heading>Browse</Heading>
          <Filter className='small-text'>Filter</Filter>
          <ProBox>
            {programmdata.map(createTitel)}
          </ProBox>
          <Navigation />
        </div>
    );
};

export default Browse;