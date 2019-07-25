import React from 'react';
import './App.css';
import List from './List';
import BastiSeineComponent from './BastiSeineComponent';
import Form from './Form';

function App() {
  return (
    <>
      <BastiSeineComponent name="Klaus" />
      <div>
        <List />
      </div>
      <Form />
    </>
  );
}

export default App;
