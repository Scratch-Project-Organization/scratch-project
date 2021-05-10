import React from 'react';
import { BrowserRouter as Router , Switch, Route, Link,
  NavLink, useParams } from 'react-router-dom';


const Board = (props) => {
  // const goToBoardPage = () => {
  //   // grab board id
  //   // open board page rendering information matching board id
  //   // route
  //   fetch(`/api/${props.board}`, {
  //     method: 'GET',
  //     headers:  { 'Content-Type': 'application/json'}
  //     })
  //     .then(data => data.json())
  //     .then(res => )

  // };
  // fetch(`/apiname/?name=${props.board}`, )

  //when you click on board thumbnail, rout to BoardPage, and send board ID number to boardpage



  return(
      <div className="board-component" >
        <Link className='board-component-link' to={`/board/${props.board}`} activeclassname="current">{props.board}</Link>
      </div>
  
  );
};

export default Board;