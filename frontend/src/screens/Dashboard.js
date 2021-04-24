import Navigation from '../components/Navigation';
import styled from 'styled-components';
import Yoga2 from '../icons/Yoga2.svg';


const YogaImg =styled.img`
  margin: 0 20px;
  width: 90vw;
  `;

function Dashboard() {
    return(
        <div>
          <h1>Guten Morgen, Name</h1>
          <h2>Dein Workout heute</h2>
          <p>Trainingsplan</p>
          <YogaImg src={Yoga2} alt="Yoga Graphik" />
          <p>Titel des Workouts</p>
          <p>Titel des Programms</p>
          <ul>
            <li>XXX kcal</li>
            <li>26 Min.</li>
            <li>Beweglichkeit</li>
          </ul>
          <Navigation />
        </div>
    );
};

export default Dashboard;