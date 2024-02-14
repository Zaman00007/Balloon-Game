import react from "react";
import './App.css';
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Unauthorized from "./Unauthorized";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
            <Home/>
          </Route>
          <PrivateRoute path="/Game" exact >
            <Game/>
          </PrivateRoute>
          <Route path="/Unauthorized" exact >
            <Unauthorized/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
