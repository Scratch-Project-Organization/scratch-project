import React, { Component } from 'react';

const Card = (props) => {
  return(
    <div className='card-component'>
      {props.title}
      <select name='column' className='card-component-dropdown'>
          <option value="Story" defaultValue>Story</option>
          <option value="To-Do">To-Do</option>
          <option value="In-Progress">In-Progress</option>
          <option value="To-Verify">To-Verify</option>
          <option value="Completed">Completed</option>
        </select>
        <button className='move-button'>Move</button> 
    </div>
  );
};

export default Card;