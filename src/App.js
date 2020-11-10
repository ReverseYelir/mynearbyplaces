import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props}/>}>
            
          </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
