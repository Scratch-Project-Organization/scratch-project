import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BoardPage from './BoardPage'

// displays boardcards (for each user if using login)
// navigation page to individual scrum boards

const HomePage = () => {
  return(
    <Router>
      <div>
        <Link to="/board">Scrum Board</Link>
        <Switch>
          <Route path="/board">
            <BoardPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default HomePage;