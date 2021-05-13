import React, { Component, useState, useEffect } from 'react';
import Column from '../components/Column'
import { useParams } from "react-router-dom";

// display createCard form
// render a card after filling out createCard form

// const BoardPage = () =>{
//   let {id} = useParams();
//    return(
//     <h1>Hello {id}</h1>
//   )
// }

const BoardPage = () => {
  // const [column, setColumn] = useState("")
  const [title, setTitle] = useState("");
  const [column, setColumn] = useState('Story');
  const [cardList, setCardList] = useState([]);

  console.log(column)

  // declare state for each column
  const [story, setStory] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [toVerify, setToVerify] = useState([]);
  const [completed, setCompleted] = useState([]);


  const [user, setUser] = useState('')



  const columnList = ['Story', 'To-Do', 'In-Progess', 'To-Verify', 'Completed'];
// {title:"sdf", column:''}
  const columnHandler = () => {
    // setCardList([...cardList, {"title": title, "column": column}])
    fetch(`/api/${board}`, {
      method: 'POST',
      headers:  { 'Content-Type': 'application/json'},
      body: JSON.stringify({'title': title, 'category': column})
      })
        .then(data => data.json())
        .then(res => console.log(res));

    if (column === "Story") setStory([...story, {'title': title, 'column': column}]);
    if (column === "To-Do") setToDo([...toDo, {'title': title, 'column': column}]);
    if (column === "In-Progress") setInProgress([...inProgress, {'title': title, 'column': column}]);
    if (column === "To-Verify") setToVerify([...toVerify, {'title': title, 'column': column}]);
    if (column === "Completed") setCompleted([...completed, {'title': title, 'column': column}]);
    setTitle("");
  };

  const fetchColumnHandler = (arrayOfCards) => {
    arrayOfCards.forEach((cardObj, i) => {
      const { category, title } = cardObj;
      console.log(title)
      if (category === "Story") setStory(prevStory => [...prevStory, {'title': title, 'column': "Story"}]);
      if (category === "To-Do") setToDo(preTodo => [...preTodo, {'title': title, 'column': "To-Do"}]);
      if (category === "In-Progress") setInProgress(preProgess => [...preProgess, {'title': title, 'column': "In-Progress"}]);
      if (category === "To-Verify") setToVerify(preVerify => [...preVerify, {'title': title, 'column': "To-Verify"}]);                    
      if (category === "Completed") setCompleted(preCompleted => [...preCompleted, {'title': title, 'column': "Completed"}]);
    })
  }
  
  // const moveCard


  const { board } = useParams();
  useEffect(() => {
    // const { board } = useParams();
    fetch(`/api/${board}`)
      .then(response => response.json())
        .then(data => {
          // console.log(data);
          fetchColumnHandler(data);
        }
        )
  }, [])


  return(
    <div id='board-page-div'>
      <h2 id='board-page-title'>{board}</h2>
      <div className="cardInputBox">
        <input type='text' placeholder='Task Description' value= {title} onChange={e=> setTitle(e.target.value)}></input>  
        <select name='column' id='column-select' onChange={e => setColumn(e.target.value)}>
          <option value="Story" defaultValue>Story</option>
          <option value="To-Do">To-Do</option>
          <option value="In-Progress">In-Progress</option>
          <option value="To-Verify">To-Verify</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={columnHandler}>Create Card</button>
      </div>

      <div id="columns-div">
        <Column className='columns' column={story} header="Story" />
        <Column className='columns' column={toDo} header="To-Do" />
        <Column className='columns' column={inProgress} header="In-Progress" />
        <Column className='columns' column={toVerify} header="To-Verify" />
        <Column className='columns' column={completed} header="Completed" />
      </div>

    </div>
  );
};

export default BoardPage;