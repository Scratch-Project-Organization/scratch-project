import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';
// import styles from

const App = props => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component ={HomePage} />
                    <Route path="/board" exact component ={BoardPage} />

                </Switch>
            </Router>

        </div>
        
    );
};

export default App;