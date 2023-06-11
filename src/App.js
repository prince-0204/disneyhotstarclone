import './App.css';
import Home from './Home';
import Landing from './Landing';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MovieScreen from './MovieScreen';
import Not_Found from './Not_Found';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Landing/>
          </Route>
          <Route exact path = "/home">
            <Home/>
          </Route>
          <Route path = "/home/movies">
            <MovieScreen/>
          </Route>
          <Route path = "*">
            <Not_Found/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;