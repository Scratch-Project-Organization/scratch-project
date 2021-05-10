import React, { Component, useState } from 'react';
import Column from '../components/Column'

// display createCard form
// render a card after filling out createCard form

const BoardPage = () => {
  // const [column, setColumn] = useState("")
  const [title, setTitle] = useState("");
  const [column, setColumn] = useState('Story');
  const [cardList, setCardList] = useState([]);

  // declare state for each column
  const [story, setStory] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [toVerify, setToVerify] = useState([]);
  const [completed, setCompleted] = useState([]);


  const columnList = ['Story', 'To-Do', 'In-Progess', 'To-Verify', 'Completed'];
// {title:"sdf", column:''}
  const columnHandler = () => {
    // setCardList([...cardList, {"title": title, "column": column}])
    if (column === "Story") setStory([...story, {'title': title, 'column': column}]);
    if (column === "To-Do") setToDo([...toDo, {'title': title, 'column': column}]);
    if (column === "In-Progress") setInProgress([...inProgress, {'title': title, 'column': column}]);
    if (column === "To-Verify") setToVerify([...toVerify, {'title': title, 'column': column}]);
    if (column === "Completed") setCompleted([...completed, {'title': title, 'column': column}]);
    setTitle("");
  };



  return(
    <div>
      <h2 id='board-page-title'>Board Page</h2>
      <div className="inputBox">
        <input type='text' value= {title} onChange={e=> setTitle(e.target.value)}></input>  
        <select name='column' id='column-select' onChange={e => setColumn(e.target.value)}>
          <option value="Story" defaultValue>Story</option>
          <option value="To-Do">To-Do</option>
          <option value="In-Progress">In-Progress</option>
          <option value="To-Verify">To-Verify</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={columnHandler}>Create Card</button>
      </div>

      <div id="columns">
        <Column column={story} header="Story" />
        <Column column={toDo} header="To-Do" />
        <Column column={inProgress} header="In-Progress" />
        <Column column={toVerify} header="To-Verify" />
        <Column column={completed} header="Completed" />

        {/* {columnList.map((column, i) => <Column key={`column${i}`} title={column} />)} */}
      </div>

    </div>
  );
};

export default BoardPage;