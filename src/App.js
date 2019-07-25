import React from 'react';
import './App.css';
import List from './List';
import BastiSeineComponent from './BastiSeineComponent';

function App() {
  return (
    <>
      <BastiSeineComponent name="Klaus" />
      <div>
        <List />
      </div>
    </>
  );
}

export default App;
