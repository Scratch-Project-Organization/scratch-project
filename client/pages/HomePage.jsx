import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BoardPage from './BoardPage';
import Board from '../components/Board';

// displays boardcards (for each user if using login)
// navigation page to individual scrum boards

const HomePage = () => {

  const [board, setBoard] = useState("");
  const [boardList, setBoardList] = useState(["Project1"]);

  const saveBoardHandler = () => {
    setBoardList([...boardList, board]);
    setBoard("");
  }

  //cards for board componenets
  // input box and a button

  return(
    <div>
      <h1>Home page</h1>
      <div>
      {boardList.map((name, i) => <Board key={`card${i}`} board={name}/>)}
      </div>

      <div className="inputBox">
        <input value={board} type='text' onChange={e => setBoard(e.target.value)}></input>
        <button onClick={saveBoardHandler}>Create New Board</button>
  
      </div>
      
    </div>
  );
};

export default HomePage;