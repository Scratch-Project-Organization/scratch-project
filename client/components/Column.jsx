import React, { Component } from 'react';
import Card from './Card';



const Column = ({column, header}) =>{
  
  const card = [];
  column.forEach((el, i) => {
    card.push(<Card title={el.title} key={`card${i}`} />);
  });

  return(
    <div>
      <h1>{header}</h1>
      {/* <h1>{(props.column.length === 0) ? "" : props.column[0].title}</h1> */}
      {card}
    </div>
  );
};

export default Column;