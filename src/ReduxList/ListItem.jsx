import React from 'react';
import { Li } from './ListItem.styles';

export default function ListItem({ todo }) {
  return <Li>{todo.title}</Li>;
}
