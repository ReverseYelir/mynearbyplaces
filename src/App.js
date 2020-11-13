import Home from './components/Home';
import Login from './components/Login';
import Add from './components/Add';
import Delete from './components/Delete';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props}/>}>
            
          </Route>
          <Route exact path="/login" render={(props) => <Login {...props}/>}>

          </Route>
          <Route exact path="/add" render={(props) => <Add {...props}/>}>

          </Route>
          <Route exact path="/delete" render={(props) => <Delete {...props}/>}>

          </Route>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
