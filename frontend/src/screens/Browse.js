import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import ProgrammInhalt from '../components/ProgrammInhalt';

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

function Browse() {
    return(
        <div>
          <Heading>Browse</Heading>
          <Filter className='small-text'>Filter</Filter>
          <ProBox>
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
             <ProgrammInhalt />
          </ProBox>
          <Navigation />
        </div>
    );
};

export default Browse;