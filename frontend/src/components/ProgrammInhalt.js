import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Herz } from '../icons/Herz.svg';
import LinkStyled from './LinkStyled';

const TitelBox= styled.div`
  background: ${props => props.theme.rbcolors.beige};
  border-radius: 5px;
  max-width: 100%;
  height: 27vh;
  margin-bottom: 20px;
  padding: 1.7vh 3.85vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `;

const Hinweis= styled.p`
  margin: 0;
  width: 40vw;
  height: 2.18vh;
  text-align: right;
  `;

const Titel= styled.div`
  text-align: left;
  width: 100%;
  height: 24vh;
  padding: 0 7.7vw;

  & h2 {
      margin-top: 8vh;
  }
  `;

function ProgrammInhalt() {
    return(
        <TitelBox>
          <Herz />
          <Hinweis className="small-text">Neu</Hinweis>
          <Titel>
            <LinkStyled to="/programm">
              <h2>Titel des Programms</h2>
            </LinkStyled>
          </Titel>
        </TitelBox>
    )
};

export default ProgrammInhalt;