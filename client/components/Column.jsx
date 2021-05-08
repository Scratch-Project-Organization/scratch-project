import React, { Component } from 'react';
import Card from './Card';



function Column() {

  // const 

  const cards = [];
  for (let i = 0; i < 1; i++) {
    cards.push(<Card key={i} />)
  }

  return(
    <div>
      {cards}
    </div>
  )
}

export default Column;