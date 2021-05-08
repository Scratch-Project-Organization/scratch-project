import React, { Component } from 'react';
import Column from '../components/Column'
import CreateCard from '../components/CreateCard'
// display createCard form
// render a card after filling out createCard form

const BoardPage = () => {

  // for (let i = 0; i < 6; i++) {
  //   columns.push(
  //     <Column key={i} />
  //   );
// }

  return(
    <div>
      <h2>Board Page</h2>
        <CreateCard />


    </div>
  );
};

export default BoardPage;