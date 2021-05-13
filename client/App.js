import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import TestPage from './pages/TestPage';
import { BrowserRouter as Router , Switch, Route, Link,
    NavLink} from 'react-router-dom';


function Navigation(props) {
    return (
      <nav className="navbar">
        {/* <Link className="navbar-brand" to="/">Sets & Reps</Link> */}
        <ul>
        <li>
            <NavLink exact to="/signout">
              Sign Out
            </NavLink>
          </li>
        <li>
            <NavLink exact to="/board">
              Boards
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
                Home
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

const App = props => {
    return(
        <div>           
            <Router>
            <Navigation />
                <Switch>
                    <Route path="/" exact component ={HomePage} /> 
                    <Route path="/board/:board" component ={BoardPage} />
                    <Route path="/test">
                      <TestPage/>
                      </Route>

                </Switch>
            </Router>
        </div>
        
    );
};

export default App;