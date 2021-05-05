import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import Browse from '../screens/Browse';
import Login from '../screens/Login';
import Workout from '../screens/Workout';
import Programm from '../screens/Programm';
import Onboarding from '../screens/Onboarding';
import Profil from '../screens/Profil';
import Exercise from '../screens/Exercise';

function App() {
  return (
    <div className="App">

      <main>
        <Switch>
          <Route path="/" exact>
            <Register />
          </Route>
          <Route path="/home">
            <Dashboard />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
          <Route path="/programm">
            <Programm />
          </Route>
          <Route path="/onboarding">
            <Onboarding />
          </Route>
          <Route path="/exercise">
            <Exercise />
          </Route>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;



//our-domain.com                 => Register
//our-domain.com/home            => Dashboard
//our-domain.com/browse          => Browse 1
//our-domain.com/profil          => Profil bearbeiten
//our-domain.com/login           => Login
//our-domain.com/workout         => Workout
//our-domain.com/programm        => Programm
//our-domain.com/onboarding      => Onboarding
//our-domain.com/exercise        => Exercise 1
