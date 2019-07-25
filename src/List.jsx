import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import axios from 'axios';

export default function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:3001/todos');
      setTodos(data);
    })();

    // return () => {
    //   console.log('componentWillUnmount');
    // };
  }, []);

  return (
    <ul>
      {todos.map(todo => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
