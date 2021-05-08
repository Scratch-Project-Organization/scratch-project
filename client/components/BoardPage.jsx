import React, { Component } from 'react';
import Column from './Column'

const BoardPage = () => {
  const columns = [];
  for (let i = 0; i < 6; i++) {
    columns.push(
      <Column key={i} />
    );
  }
  
  return(
    <div>
      {columns}
    </div>
  );
};

export default BoardPage;