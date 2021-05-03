import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button, { BtnBox} from "../components/Button";
import { ReactComponent as X} from '../icons/X.svg';
import { ReactComponent as Ellipse } from '../icons/Ellipse.svg';
import { ReactComponent as Figpie } from '../icons/Figpie.svg';
import KleinerKreis from '../components/Kreis';
import Tagesbox from '../components/Tagesbox';


const Header= styled.div`
  background : ${props => props.theme.gradients.lightorange};
  height: 73.44vh;
  position: relative;
`;

const Close= styled(Link)`
  margin: 3.4vh 4.8vw;
  position: absolute;
  right: 0;
`;

const Titel= styled.div`
  max-width: 83.3vw;
  margin: 0 auto;
  padding-top: 31vh;
`;

const Matches= styled.ul`
  list-style-type: none;
  position: absolute;
  bottom: 0;
  padding: 0 5.76vw 2.7vh 5.76vw;
  width: 88vw;
  display: flex;
  justify-content: space-between;

  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Starten= styled(BtnBox)`
  position: fixed;
  left: 32vw;
  bottom: 2.5vh;
  z-index: 2;
`;

const Beschreibung= styled.p`
  background: ${props=>props.theme.rbcolors.beige};
  margin: 0;
  padding: 2.75vh 7.4vw 2.75vh 5.8vw;
  text-align: left;
`;

const Aufteilung= styled.div`
  text-align: left;
  padding: 2vh 5.8vw;
  position: relative;

  & h3 {
    margin-bottom: 5.4vh;
  }

  & ul{
    position: absolute;
    right: 20.6vw;
    bottom: 4.6vh;
    list-style-type: none;
    
    & li {
      margin-top: 2.44vh;
      display: flex;
      align-items: center;

      & div {
        margin-right: 3vw;
      }
    }
  }
`;



const Dauer= styled.div`
  background: ${props=>props.theme.rbcolors.beige};
  text-align: left;
`;

const DauerHeader= styled.div`
  padding: 2.76vh 5.8vw;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

function Programm() {
    return(
        <div>
          <Header>
            <Close to='/browse'><X /></Close>
            <Titel><h1>Titel des Programms</h1></Titel>
            <Matches>
              <li className='nav-text'><Ellipse />Abnehmen</li>
              <li className='nav-text'><Ellipse />Leicht </li>
              <li className='nav-text'><Ellipse />6 Wochen</li>
            </Matches>
          </Header>
          <main>
            <Starten>
              <Button as={Link} to="/workout">jetzt starten</Button>
            </Starten>
            <Beschreibung>
               Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. 
               Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. 
               Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. 
               Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.
            </Beschreibung>
            <Aufteilung>
              <h3>So ist das Programm aufgeteilt:</h3>
              <Figpie />
              <ul className='small-text'>
                <li><KleinerKreis kraft />Krafttraining</li>
                <li><KleinerKreis cardio />Cardio</li>
                <li><KleinerKreis koord />Koordination</li>
                <li><KleinerKreis beweg />Beweglichkeit</li>
              </ul>
            </Aufteilung>
            <Dauer>
              <DauerHeader>
                <h3>21 Tage</h3>
                <p className='small-text'>Alle anzeigen</p>
              </DauerHeader>
              <Tagesbox />
              <Tagesbox />
              <Tagesbox />
              <Tagesbox />
            </Dauer>
          </main>
        </div>
    );
};

export default Programm;