import update from 'immutability-helper';
import { CREATE_TODO } from './ReduxList/actions';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'eat',
    },
    {
      id: 2,
      title: 'sleep',
    },
    {
      id: 3,
      title: 'code',
    },
    {
      id: 4,
      title: 'eat pizza',
    },
    {
      title: 'Pizza wirklich verdauen',
      id: 5,
    },
    {
      title: 'Eis essen',
      id: 6,
    },
    {
      title: 'Feierabend machen',
      id: 7,
    },
    {
      title: 'schlafen gehen',
      id: 8,
    },
    {
      title: 'wtf?',
      id: 9,
    },
    {
      title: 'xxx',
      id: 10,
    },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return update(state, { todos: { $push: [action.payload] } });
    default:
      return state;
  }
}
