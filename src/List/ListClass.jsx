import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {
  state = { todos: [] };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todos: [
          { id: 1, title: 'eat' },
          { id: 2, title: 'sleep' },
          { id: 3, title: 'code' },
        ],
      });
    }, 2000);
  }

  render() {
    const todoItems = this.state.todos.map(todo => (
      <ListItem key={todo.id} todo={todo} />
    ));

    return <ul>{todoItems}</ul>;
  }
}
