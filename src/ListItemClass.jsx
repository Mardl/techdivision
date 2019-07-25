import React from 'react';

export default class ListItemClass extends React.Component {
  render() {
    const todo = this.props.todo;

    return <li>{todo.title}</li>;
  }
}
