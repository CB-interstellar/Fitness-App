import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Haken } from '../icons/Haken.svg';
import { ReactComponent as Punkt8 } from '../icons/Punkt8.svg';
import { ReactComponent as Punkt2 } from '../icons/Punkt2.svg';


// Was soll das darstellen ?
const PerlenKette= styled.div` 
  width: 100vw;
  box-sizing: border-box; 
  margin-top: 4.7vh;
  padding-left: 4vw;
  display: flex;
  align-items: center;
`;

const Perle = styled.div`
  height: 24px;
  width: 24px;
  border: solid 3px ${props => props.theme.bbcolors.blue};
  border-radius: 50px;

  ${props => props.filled && css`
  background-color: ${props => props.theme.bbcolors.blue};
  `};

  & svg {
      visibility: hidden;

      &.sichtbar {
        visibility: visible;
      }
  }
`;




function Perlen() {
    return(
        <PerlenKette>
          <Perle filled><Haken className="sichtbar"/></Perle>
          <Punkt8 />
          <Perle><Haken /></Perle>
          <Punkt8 />
          <Perle><Haken /></Perle>
          <Punkt8 />
          <Perle><Haken /></Perle>
          <Punkt8 />
          <Perle><Haken /></Perle>
          <Punkt2 />
        </PerlenKette>
    )
};

export default Perlen;