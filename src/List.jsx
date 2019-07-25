import React from 'react';
import ListItemClass from './ListItemClass';

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
    console.log('render');
    const todoItems = this.state.todos.map(todo => (
      <ListItemClass key={todo.id} todo={todo} />
    ));

    return <ul>{todoItems}</ul>;
  }
}
