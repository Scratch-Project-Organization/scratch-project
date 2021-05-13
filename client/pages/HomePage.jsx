import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import BoardPage from './BoardPage';
import Board from '../components/Board';
import '../scss/HomePage.scss';
// displays boardcards (for each user if using login)
// navigation page to individual scrum boards

const HomePage = () => {

  const [board, setBoard] = useState("");
  const [boardList, setBoardList] = useState([]);
  const history = useHistory()

  console.log("BOARD", boardList)

  const saveBoardHandler = () => {
    //make post request to backend
    //take the result and push it to boardlist
    const newBoard = {title: board};
    fetch('/api', {
    method: 'POST',
    headers:  { 'Content-Type': 'application/json'},
    body: JSON.stringify(newBoard),
    })
      .then(data => data.json())
      .then(res => setBoardList([...boardList, ...res]))
    setBoard("");
  }

  useEffect(() => {
    console.log("fetching boards")
    fetch('/api')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(!res.isLoggedIn) {
        history.push('/landing')
      } else{
      setBoardList([...boardList, ...res.boards]);
      }
    })
    .catch(e => console.log(e));
  }, []);
  
  
  // res = [{_id: "6098502bae510d80bb913ee4", title: "Scrum Board", __v: 0}, {_id: "6098502bae510d80bb913ee4", title: "Scrum Board", __v: 0}, {_id: "6098502bae510d80bb913ee4", title: "Scrum Board", __v: 0}]
  // cards for board components
  // input box and a button

  return(
    <div className="homePage">
      <h1>Project Boards</h1>
      <div className="board-container">
      {boardList.map((board, i) => <Board key={`card${i}`} board={board.title} />)}
      </div>

      <div className="inputBox">
        <input value={board} type='text' onChange={e => setBoard(e.target.value)}></input>
        <button onClick={saveBoardHandler}>Create New Board</button>
  
      </div>
      
    </div>
  );
};

export default HomePage;