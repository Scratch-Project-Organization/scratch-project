import { NavLink } from "react-router-dom";
import React from 'react';
import Board from './components/Board'

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

export default Navigation;