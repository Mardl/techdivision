import React from 'react';

export default class List extends React.Component {
  state = { todos: [] };

  // [{id: 1, title: 'eat'},{ id: 2, title: 'sleep'}, {id: 3, title: 'code'}]

  componentDidMount() {
    console.log('things happen');
  }

  render() {
    const todoItems = this.state.todos.map(todo => (
      <li key={todo.id}>{todo.title}</li>
    ));

    return <ul>{todoItems}</ul>;
  }
}
