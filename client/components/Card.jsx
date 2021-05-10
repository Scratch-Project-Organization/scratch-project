import React, { Component } from 'react';

const Card = (props) => {
  return(
    <div className='card-component'>
      {props.title}
    </div>
  );
};

export default Card;