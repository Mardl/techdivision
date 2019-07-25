import React from 'react';
import Form from './Form';

export default function List({ todos, onSubmit }) {
  return (
    <>
      <h1>I am from redux</h1>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo.title}</li>
        ))}
      </ul>
      <Form onSubmit={onSubmit} />
      <hr />
    </>
  );
}
