import React from 'react';
import { BrowserRouter as Router , Switch, Route, Link,
  NavLink, useParams } from 'react-router-dom';


const Board = (props) => {
  const goToBoardPage = () => {
    // grab board id
    // open board page rendering information matching board id
    // route
    console.log(props.board);
  };
  // fetch(`/apiname/?name=${props.board}`, )

  //when you click on board thumbnail, rout to BoardPage, and send board ID number to boardpage



  return(
    // <Router>
      <div className="board-component" onClick={goToBoardPage}>

        <h3>{props.board}</h3>

      </div>
      /* <Switch>
        <Route path=""
      </Switch>
    </Router> */
  
  );
};

export default Board;